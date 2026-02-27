FROM golang:1.26.0 AS builder
WORKDIR /src

COPY go.mod go.sum* ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /out/datafeed-api ./cmd/api
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /out/datafeed-worker ./cmd/worker

FROM alpine:3.22
RUN apk add --no-cache ca-certificates curl
WORKDIR /app
COPY --from=builder /out/datafeed-api /app/datafeed-api
COPY --from=builder /out/datafeed-worker /app/datafeed-worker
COPY --from=builder /src/migrations /app/migrations
EXPOSE 8081
CMD ["/app/datafeed-api"]
