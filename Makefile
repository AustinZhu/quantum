SHELL := /bin/bash

.PHONY: bootstrap generate up down logs test

bootstrap:
	@echo "Bootstrapping language environments"
	cd algorand && uv sync --all-extras || true
	cd terminal && pnpm install || true
	cd datafeed && go mod tidy || true
	cd doordash && (./gradlew --no-daemon help || gradle --no-daemon help) || true

generate:
	./api/scripts/generate.sh

up:
	docker compose up --build

down:
	docker compose down -v

logs:
	docker compose logs -f

test:
	cd algorand && uv run pytest || true
	cd datafeed && go test ./... || true
	cd doordash && (./gradlew --no-daemon test || gradle --no-daemon test) || true
	cd terminal && pnpm test || true
