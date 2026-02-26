SHELL := /bin/bash

GOLANGCI_LINT_VERSION ?= v1.64.8

.PHONY: lint lint-fix test

lint:
	go run github.com/golangci/golangci-lint/cmd/golangci-lint@$(GOLANGCI_LINT_VERSION) run ./...

lint-fix:
	go run github.com/golangci/golangci-lint/cmd/golangci-lint@$(GOLANGCI_LINT_VERSION) run --fix ./...

test:
	go test ./...
