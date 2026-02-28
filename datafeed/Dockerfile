FROM golang:1.26.0 AS builder
WORKDIR /src

COPY go.mod go.sum* ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /out/datafeed-api ./cmd/datafeed-api
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /out/datafeed-events ./cmd/datafeed-events
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /out/datafeed-jobs ./cmd/datafeed-jobs

FROM alpine:3.22
RUN apk add --no-cache ca-certificates curl
WORKDIR /app
COPY --from=builder /out/datafeed-api /app/datafeed-api
COPY --from=builder /out/datafeed-events /app/datafeed-events
COPY --from=builder /out/datafeed-jobs /app/datafeed-jobs
COPY --from=builder /src/db/migrations /app/db/migrations
EXPOSE 8081
CMD ["/app/datafeed-api"]
