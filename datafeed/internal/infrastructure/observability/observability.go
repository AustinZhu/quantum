package observability

import (
	"context"
	"errors"
	"log/slog"
	"net/http"
	"runtime/debug"
	"strings"
	"sync/atomic"
	"time"

	"connectrpc.com/connect"
	"connectrpc.com/otelconnect"
	"go.opentelemetry.io/otel/trace"
)

type ConnectHandlerOptions struct {
	Values []connect.HandlerOption
}

func New() (ConnectHandlerOptions, error) {
	otelInterceptor, err := otelconnect.NewInterceptor(
		otelconnect.WithTrustRemote(),
		otelconnect.WithoutServerPeerAttributes(),
	)
	if err != nil {
		return ConnectHandlerOptions{}, err
	}

	auditInterceptor := &auditInterceptor{
		logger: slog.Default().With("component", "connect-audit"),
	}

	return ConnectHandlerOptions{
		Values: []connect.HandlerOption{
			connect.WithInterceptors(otelInterceptor, auditInterceptor),
			connect.WithRecover(recoverPanic),
		},
	}, nil
}

func recoverPanic(ctx context.Context, spec connect.Spec, headers http.Header, recovered any) error {
	traceID, spanID := traceIDs(ctx)
	slog.Default().Error(
		"rpc.panic",
		"procedure", spec.Procedure,
		"stream_type", spec.StreamType.String(),
		"trace_id", traceID,
		"span_id", spanID,
		"request_id", requestID(headers),
		"panic", recovered,
		"stack", string(debug.Stack()),
	)
	return connect.NewError(connect.CodeInternal, errors.New("internal server error"))
}

type auditInterceptor struct {
	logger *slog.Logger
}

func (i *auditInterceptor) WrapUnary(next connect.UnaryFunc) connect.UnaryFunc {
	return func(ctx context.Context, req connect.AnyRequest) (connect.AnyResponse, error) {
		start := time.Now()
		response, err := next(ctx, req)
		i.log(
			ctx,
			req.Spec(),
			req.Peer(),
			req.Header(),
			req.HTTPMethod(),
			time.Since(start),
			err,
			0,
			0,
		)
		return response, err
	}
}

func (i *auditInterceptor) WrapStreamingClient(next connect.StreamingClientFunc) connect.StreamingClientFunc {
	return next
}

func (i *auditInterceptor) WrapStreamingHandler(next connect.StreamingHandlerFunc) connect.StreamingHandlerFunc {
	return func(ctx context.Context, conn connect.StreamingHandlerConn) error {
		start := time.Now()
		wrapped := &countingStreamingHandlerConn{StreamingHandlerConn: conn}
		err := next(ctx, wrapped)
		i.log(
			ctx,
			conn.Spec(),
			conn.Peer(),
			conn.RequestHeader(),
			"",
			time.Since(start),
			err,
			wrapped.received.Load(),
			wrapped.sent.Load(),
		)
		return err
	}
}

func (i *auditInterceptor) log(
	ctx context.Context,
	spec connect.Spec,
	peer connect.Peer,
	headers http.Header,
	httpMethod string,
	duration time.Duration,
	err error,
	received int64,
	sent int64,
) {
	traceID, spanID := traceIDs(ctx)
	code := connect.CodeOf(err)
	fields := []any{
		"procedure", spec.Procedure,
		"stream_type", spec.StreamType.String(),
		"protocol", peer.Protocol,
		"peer_addr", peer.Addr,
		"http_method", httpMethod,
		"duration_ms", duration.Milliseconds(),
		"code", code.String(),
		"trace_id", traceID,
		"span_id", spanID,
		"request_id", requestID(headers),
		"user_agent", headers.Get("User-Agent"),
	}
	if spec.StreamType != connect.StreamTypeUnary {
		fields = append(fields, "messages_received", received, "messages_sent", sent)
	}
	if err == nil {
		i.logger.Info("rpc.audit", fields...)
		return
	}
	i.logger.Warn("rpc.audit", append(fields, "error", err.Error())...)
}

func traceIDs(ctx context.Context) (string, string) {
	spanContext := trace.SpanContextFromContext(ctx)
	if !spanContext.IsValid() {
		return "", ""
	}
	return spanContext.TraceID().String(), spanContext.SpanID().String()
}

func requestID(headers http.Header) string {
	if value := strings.TrimSpace(headers.Get("X-Request-Id")); value != "" {
		return value
	}
	if value := strings.TrimSpace(headers.Get("X-Correlation-Id")); value != "" {
		return value
	}
	return ""
}

type countingStreamingHandlerConn struct {
	connect.StreamingHandlerConn
	received atomic.Int64
	sent     atomic.Int64
}

func (c *countingStreamingHandlerConn) Receive(message any) error {
	if err := c.StreamingHandlerConn.Receive(message); err != nil {
		return err
	}
	c.received.Add(1)
	return nil
}

func (c *countingStreamingHandlerConn) Send(message any) error {
	if err := c.StreamingHandlerConn.Send(message); err != nil {
		return err
	}
	c.sent.Add(1)
	return nil
}
