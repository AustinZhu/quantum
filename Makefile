SHELL := /bin/bash

.DEFAULT_GOAL := help

.PHONY: help check-env bootstrap generate up down down-v logs lint fmt test

help: ## Show available targets
	@awk 'BEGIN {FS = ":.*##"; printf "Usage: make <target>\n\nTargets:\n"} /^[a-zA-Z0-9_.-]+:.*##/ { printf "  %-12s %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

check-env: ## Ensure .env exists (copy from .env.example if missing)
	@if [ ! -f .env ]; then \
		if [ -f .env.example ]; then \
			cp .env.example .env; \
			echo "Created .env from .env.example"; \
		else \
			echo ".env and .env.example were not found"; \
			exit 1; \
		fi; \
	fi

bootstrap: ## Install local dependencies for all projects
	@echo "Bootstrapping language environments"
	cd algorand && uv sync --all-extras
	cd terminal && pnpm install
	cd datafeed && go mod tidy
	cd doordash && (./gradlew --no-daemon help || gradle --no-daemon help)

generate: ## Run protobuf/connect code generation from api/
	./api/scripts/generate.sh

up: check-env ## Build and start the full local stack
	docker compose up --build --wait

down: ## Stop the stack without deleting volumes
	docker compose down

down-v: ## Stop the stack and remove volumes
	docker compose down -v

logs: ## Stream compose logs; optional usage: make logs svc=algorand-api
	docker compose logs -f $(svc)

lint: ## Run lint and formatting checks where configured
	cd algorand && uv run ruff check . --exclude src/algorand/interfaces/connectrpc/generated --ignore B008
	cd datafeed && $(MAKE) lint
	cd terminal && pnpm run lint
	cd terminal && pnpm run fmt:check

fmt: ## Auto-format code where configured
	cd algorand && uv run ruff format .
	cd terminal && pnpm run fmt

test: ## Run all test suites
	cd algorand && uv run pytest
	cd datafeed && go test ./...
	cd doordash && (./gradlew --no-daemon test || gradle --no-daemon test)
	cd terminal && pnpm test
