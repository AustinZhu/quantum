package main

import (
	"context"
	"log"
	"net/http"
	"os/signal"
	"syscall"
	"time"

	"github.com/austin/quantum/datafeed/internal/app"
	"github.com/austin/quantum/datafeed/internal/config"
	"github.com/austin/quantum/datafeed/internal/connect"
	"github.com/austin/quantum/datafeed/internal/events"
	"github.com/austin/quantum/datafeed/internal/storage"
	"github.com/austin/quantum/datafeed/internal/telemetry"
)

func main() {
	cfg := config.Load()
	telemetry.Init()

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	if err := storage.RunMigrations(cfg.DatabaseURL, cfg.MigrationsPath); err != nil {
		log.Fatalf("failed to run migrations: %v", err)
	}

	repo, err := storage.NewPostgresRepository(ctx, cfg.DatabaseURL)
	if err != nil {
		log.Fatalf("failed to init repository: %v", err)
	}
	defer repo.Close()

	publisher, err := events.NewPublisher(cfg.RedisURL, cfg.RedpandaBrokers, cfg.RedpandaTickTopic)
	if err != nil {
		log.Fatalf("failed to init redis publisher: %v", err)
	}
	defer publisher.Close()

	service := app.NewService(repo, publisher)
	server := &http.Server{
		Addr:    cfg.HTTPAddr,
		Handler: connect.NewMux(service, cfg.APIKey, cfg.OpenAPISpecPath),
	}

	go func() {
		<-ctx.Done()
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()
		_ = server.Shutdown(shutdownCtx)
	}()

	log.Printf("datafeed API listening on %s", cfg.HTTPAddr)
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatalf("server error: %v", err)
	}
}
