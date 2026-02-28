SHELL := /bin/bash

TOOLS_DIR ?= tools
TOOLS_MODFILE ?= $(TOOLS_DIR)/go.mod

.PHONY: tools lint lint-fix test wire buf sqlc mocks codegen

tools:
	cd $(TOOLS_DIR) && GOWORK=off go get -tool github.com/golangci/golangci-lint/v2/cmd/golangci-lint@v2.10.1
	cd $(TOOLS_DIR) && GOWORK=off go get -tool github.com/google/wire/cmd/wire@v0.7.0
	cd $(TOOLS_DIR) && GOWORK=off go get -tool github.com/vektra/mockery/v3@v3.6.1
	cd $(TOOLS_DIR) && GOWORK=off go get -tool github.com/sqlc-dev/sqlc/cmd/sqlc@v1.28.0
	cd $(TOOLS_DIR) && GOWORK=off go mod tidy

lint:
	GOWORK=off go tool -modfile=$(TOOLS_MODFILE) golangci-lint run ./...

lint-fix:
	GOWORK=off go tool -modfile=$(TOOLS_MODFILE) golangci-lint run --fix ./...

test:
	go test ./...

wire:
	GOWORK=off GOCACHE=/tmp/gocache go tool -modfile=$(TOOLS_MODFILE) wire ./internal/app/api ./internal/app/events ./internal/app/jobs

buf:
	buf generate --path proto/datafeed/v1

sqlc:
	GOWORK=off go tool -modfile=$(TOOLS_MODFILE) sqlc generate

mocks:
	GOWORK=off go tool -modfile=$(TOOLS_MODFILE) mockery --config .mockery.yaml

codegen:
	GOCACHE=/tmp/gocache go generate ./...
	$(MAKE) wire
	$(MAKE) mocks
