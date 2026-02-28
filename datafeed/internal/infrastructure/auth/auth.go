package auth

import (
	"net/http"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/google/wire"
)

type Middleware struct {
	apiKey string
}

var ProviderSet = wire.NewSet(New)

func New(cfg conf.Config) *Middleware {
	return &Middleware{apiKey: cfg.Server.APIKey}
}

func (m *Middleware) Wrap(next http.Handler) http.Handler {
	if m == nil || m.apiKey == "" {
		return next
	}
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		provided := r.Header.Get("x-api-key")
		if provided == "" {
			provided = r.Header.Get("x-service-key")
		}
		if provided != m.apiKey {
			http.Error(w, "unauthorized", http.StatusUnauthorized)
			return
		}
		next.ServeHTTP(w, r)
	})
}
