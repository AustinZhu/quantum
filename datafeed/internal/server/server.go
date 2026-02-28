package server

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/google/wire"
)

type HTTPServer struct {
	cfg    conf.Config
	server *http.Server
}

var ProviderSet = wire.NewSet(NewMux, NewHTTPServer)

func NewHTTPServer(cfg conf.Config, mux *http.ServeMux) *HTTPServer {
	return &HTTPServer{
		cfg: cfg,
		server: &http.Server{
			Addr:    cfg.Server.HTTPAddr,
			Handler: mux,
		},
	}
}

func (s *HTTPServer) Run(ctx context.Context) error {
	go func() {
		<-ctx.Done()
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()
		_ = s.server.Shutdown(shutdownCtx)
	}()

	log.Printf("datafeed API listening on %s", s.cfg.Server.HTTPAddr)
	if err := s.server.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
		return fmt.Errorf("http server: %w", err)
	}
	return nil
}

func (s *HTTPServer) Shutdown(ctx context.Context) error {
	return s.server.Shutdown(ctx)
}
