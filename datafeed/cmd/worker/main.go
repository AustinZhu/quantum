package main

import (
	"context"
	"log"
	"os/signal"
	"syscall"

	"github.com/austin/quantum/datafeed/internal/app"
	"github.com/austin/quantum/datafeed/internal/config"
	"github.com/austin/quantum/datafeed/internal/events"
	"github.com/austin/quantum/datafeed/internal/storage"
	"github.com/austin/quantum/datafeed/internal/temporal"
)

func main() {
	cfg := config.Load()
	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

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

	service := app.NewService(repo, publisher, nil)
	worker := temporal.NewWorker(service)
	if err := worker.Run(ctx); err != nil {
		log.Printf("worker stopped: %v", err)
	}
}
