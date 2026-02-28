package server

import (
	"connectrpc.com/connect"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/pprof"
	"os"
	"time"

	"connectrpc.com/grpchealth"
	"connectrpc.com/grpcreflect"
	datafeedv1connect "github.com/AustinZhu/quantum/datafeed/api/datafeed/v1/datafeedv1connect"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/auth"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/observability"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/validation"
	marketservice "github.com/AustinZhu/quantum/datafeed/internal/modules/marketdata/service"
	scannerservice "github.com/AustinZhu/quantum/datafeed/internal/modules/scanner/service"
	scalargo "github.com/bdpiprava/scalar-go"
)

func NewMux(
	datafeedHandler *marketservice.DatafeedHandler,
	scannerHandler *scannerservice.Handler,
	authOpts auth.ConnectHandlerOptions,
	obsOpts observability.ConnectHandlerOptions,
	validationOpts validation.ConnectHandlerOptions,
	cfg conf.Config,
) *http.ServeMux {
	mux := http.NewServeMux()
	handlerOpts := make([]connect.HandlerOption, 0, len(authOpts.Values)+len(obsOpts.Values)+len(validationOpts.Values))
	handlerOpts = append(handlerOpts, obsOpts.Values...)
	handlerOpts = append(handlerOpts, authOpts.Values...)
	handlerOpts = append(handlerOpts, validationOpts.Values...)

	datafeedPath, datafeedHTTPHandler := datafeedv1connect.NewDatafeedServiceHandler(datafeedHandler, handlerOpts...)
	mux.Handle(datafeedPath, datafeedHTTPHandler)

	scannerPath, scannerHTTPHandler := datafeedv1connect.NewScannerServiceHandler(scannerHandler, handlerOpts...)
	mux.Handle(scannerPath, scannerHTTPHandler)

	healthPath, healthHandler := grpchealth.NewHandler(
		grpchealth.NewStaticChecker(
			datafeedv1connect.DatafeedServiceName,
			datafeedv1connect.ScannerServiceName,
		),
		obsOpts.Values...,
	)
	mux.Handle(healthPath, healthHandler)

	reflector := grpcreflect.NewStaticReflector(
		datafeedv1connect.DatafeedServiceName,
		datafeedv1connect.ScannerServiceName,
	)
	reflectV1Path, reflectV1Handler := grpcreflect.NewHandlerV1(reflector, handlerOpts...)
	reflectV1AlphaPath, reflectV1AlphaHandler := grpcreflect.NewHandlerV1Alpha(reflector, handlerOpts...)
	mux.Handle(reflectV1Path, reflectV1Handler)
	mux.Handle(reflectV1AlphaPath, reflectV1AlphaHandler)

	mux.HandleFunc("/healthz", func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(map[string]any{"status": "ok", "service": "datafeed", "ts_ms": time.Now().UnixMilli()})
	})

	mux.HandleFunc("/readyz", func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(map[string]any{"status": "ready"})
	})

	mux.HandleFunc("/metrics", func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "text/plain")
		_, _ = w.Write([]byte("# metrics scaffold\n"))
	})

	mux.HandleFunc("/openapi/connect.json", func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		file, err := os.Open(cfg.Server.OpenAPISpecPath)
		if err != nil {
			http.Error(w, fmt.Sprintf("openapi spec not found at %s", cfg.Server.OpenAPISpecPath), http.StatusNotFound)
			return
		}
		defer file.Close()
		if _, err := file.WriteTo(w); err != nil {
			http.Error(w, "failed to stream openapi spec", http.StatusInternalServerError)
			return
		}
	})

	mux.HandleFunc("/scalar", func(w http.ResponseWriter, _ *http.Request) {
		html, err := scalargo.NewV2(
			scalargo.WithSpecURL("/openapi/connect.json"),
			scalargo.WithMetaDataOpts(scalargo.WithTitle("Datafeed Connect API")),
		)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = w.Write([]byte(html))
	})

	if cfg.Server.PprofEnabled {
		registerPprofHandlers(mux)
	}

	return mux
}

func registerPprofHandlers(mux *http.ServeMux) {
	mux.HandleFunc("/debug/pprof/", pprof.Index)
	mux.HandleFunc("/debug/pprof/cmdline", pprof.Cmdline)
	mux.HandleFunc("/debug/pprof/profile", pprof.Profile)
	mux.HandleFunc("/debug/pprof/symbol", pprof.Symbol)
	mux.HandleFunc("/debug/pprof/trace", pprof.Trace)
	mux.Handle("/debug/pprof/allocs", pprof.Handler("allocs"))
	mux.Handle("/debug/pprof/block", pprof.Handler("block"))
	mux.Handle("/debug/pprof/goroutine", pprof.Handler("goroutine"))
	mux.Handle("/debug/pprof/heap", pprof.Handler("heap"))
	mux.Handle("/debug/pprof/mutex", pprof.Handler("mutex"))
	mux.Handle("/debug/pprof/threadcreate", pprof.Handler("threadcreate"))
}
