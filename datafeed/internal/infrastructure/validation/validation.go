package validation

import (
	"context"

	"buf.build/go/protovalidate"
	"connectrpc.com/connect"
	"google.golang.org/protobuf/proto"
)

type ConnectHandlerOptions struct {
	Values []connect.HandlerOption
}

type Interceptor struct {
	validator protovalidate.Validator
}

func New() (ConnectHandlerOptions, error) {
	validator, err := protovalidate.New()
	if err != nil {
		return ConnectHandlerOptions{}, err
	}

	return ConnectHandlerOptions{
		Values: []connect.HandlerOption{
			connect.WithInterceptors(&Interceptor{validator: validator}),
		},
	}, nil
}

func (i *Interceptor) WrapUnary(next connect.UnaryFunc) connect.UnaryFunc {
	return func(ctx context.Context, req connect.AnyRequest) (connect.AnyResponse, error) {
		if err := i.validate(req.Any()); err != nil {
			return nil, err
		}
		return next(ctx, req)
	}
}

func (i *Interceptor) WrapStreamingClient(next connect.StreamingClientFunc) connect.StreamingClientFunc {
	return next
}

func (i *Interceptor) WrapStreamingHandler(next connect.StreamingHandlerFunc) connect.StreamingHandlerFunc {
	return func(ctx context.Context, conn connect.StreamingHandlerConn) error {
		return next(ctx, &validationStreamingHandlerConn{
			StreamingHandlerConn: conn,
			validate:             i.validate,
		})
	}
}

func (i *Interceptor) validate(value any) error {
	message, ok := value.(proto.Message)
	if !ok || message == nil {
		return nil
	}
	if err := i.validator.Validate(message); err != nil {
		return connect.NewError(connect.CodeInvalidArgument, err)
	}
	return nil
}

type validationStreamingHandlerConn struct {
	connect.StreamingHandlerConn
	validate func(any) error
}

func (c *validationStreamingHandlerConn) Receive(message any) error {
	if err := c.StreamingHandlerConn.Receive(message); err != nil {
		return err
	}
	return c.validate(message)
}
