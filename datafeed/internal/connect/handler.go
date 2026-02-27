package connect

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/austin/quantum/datafeed/internal/app"
	datafeedv1connect "github.com/austin/quantum/datafeed/internal/gen/datafeed/v1/datafeedv1connect"
	scalargo "github.com/bdpiprava/scalar-go"
)

func NewMux(service *app.Service, apiKey string, openAPISpecPath string) *http.ServeMux {
	mux := http.NewServeMux()

	datafeedPath, datafeedHandler := datafeedv1connect.NewDatafeedServiceHandler(NewDatafeedRPCHandler(service))
	mux.Handle(datafeedPath, authorizeHTTPHandler(datafeedHandler, apiKey))

	scannerPath, scannerHandler := datafeedv1connect.NewScannerServiceHandler(NewScannerRPCHandler(service))
	mux.Handle(scannerPath, authorizeHTTPHandler(scannerHandler, apiKey))

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
		file, err := os.Open(openAPISpecPath)
		if err != nil {
			http.Error(w, fmt.Sprintf("openapi spec not found at %s", openAPISpecPath), http.StatusNotFound)
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

	mux.HandleFunc("/rpc/quant.datafeed.v1.DatafeedService/ReplayTicks", func(w http.ResponseWriter, r *http.Request) {
		if !authorizeRPCRequest(w, r, apiKey) {
			return
		}
		symbol := r.URL.Query().Get("symbol")
		start, _ := strconv.ParseInt(r.URL.Query().Get("start"), 10, 64)
		end, _ := strconv.ParseInt(r.URL.Query().Get("end"), 10, 64)
		items, err := service.ReplayTicks(r.Context(), symbol, start, end, 500)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(map[string]any{"ticks": items})
	})

	mux.HandleFunc("/rpc/quant.datafeed.v1.DatafeedService/QueryBars", func(w http.ResponseWriter, r *http.Request) {
		if !authorizeRPCRequest(w, r, apiKey) {
			return
		}
		symbol := r.URL.Query().Get("symbol")
		interval := r.URL.Query().Get("interval")
		start, _ := strconv.ParseInt(r.URL.Query().Get("start"), 10, 64)
		end, _ := strconv.ParseInt(r.URL.Query().Get("end"), 10, 64)
		items, err := service.QueryBars(r.Context(), symbol, interval, start, end, 500)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(map[string]any{"bars": items})
	})

	return mux
}

func authorizeRPCRequest(w http.ResponseWriter, r *http.Request, apiKey string) bool {
	if apiKey == "" {
		return true
	}
	provided := r.Header.Get("x-api-key")
	if provided == "" {
		provided = r.Header.Get("x-service-key")
	}
	if provided != apiKey {
		http.Error(w, "unauthorized", http.StatusUnauthorized)
		return false
	}
	return true
}

func authorizeHTTPHandler(next http.Handler, apiKey string) http.Handler {
	if apiKey == "" {
		return next
	}
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if !authorizeRPCRequest(w, r, apiKey) {
			return
		}
		next.ServeHTTP(w, r)
	})
}
