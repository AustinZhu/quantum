package connect

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	"github.com/austin/quantum/datafeed/internal/app"
)

func NewMux(service *app.Service, apiKey string) *http.ServeMux {
	mux := http.NewServeMux()

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
