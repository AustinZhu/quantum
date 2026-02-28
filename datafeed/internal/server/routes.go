package server

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"

	datafeedv1connect "github.com/AustinZhu/quantum/datafeed/api/datafeed/v1/datafeedv1connect"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/auth"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	marketservice "github.com/AustinZhu/quantum/datafeed/internal/modules/marketdata/service"
	scannerservice "github.com/AustinZhu/quantum/datafeed/internal/modules/scanner/service"
	scalargo "github.com/bdpiprava/scalar-go"
)

func NewMux(
	datafeedHandler *marketservice.DatafeedHandler,
	scannerHandler *scannerservice.Handler,
	authMiddleware *auth.Middleware,
	cfg conf.Config,
) *http.ServeMux {
	mux := http.NewServeMux()

	datafeedPath, datafeedHTTPHandler := datafeedv1connect.NewDatafeedServiceHandler(datafeedHandler)
	mux.Handle(datafeedPath, authMiddleware.Wrap(datafeedHTTPHandler))

	scannerPath, scannerHTTPHandler := datafeedv1connect.NewScannerServiceHandler(scannerHandler)
	mux.Handle(scannerPath, authMiddleware.Wrap(scannerHTTPHandler))

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

	return mux
}
