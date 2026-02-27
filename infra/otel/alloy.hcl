otelcol.receiver.otlp "ingest" {
  grpc {
    endpoint = "0.0.0.0:4317"
  }

  http {
    endpoint = "0.0.0.0:4318"
  }

  output {
    logs    = [otelcol.processor.batch.main.input]
    metrics = [otelcol.processor.batch.main.input]
    traces  = [otelcol.processor.batch.main.input]
  }
}

otelcol.processor.batch "main" {
  output {
    logs    = [otelcol.exporter.otlphttp.loki.input]
    metrics = [otelcol.exporter.prometheus.prom.input]
    traces  = [otelcol.exporter.otlp.tempo.input]
  }
}

otelcol.exporter.otlp "tempo" {
  client {
    endpoint = "tempo:4317"

    tls {
      insecure = true
    }
  }
}

otelcol.exporter.otlphttp "loki" {
  client {
    endpoint = "http://loki:3100/otlp"
  }
}

otelcol.exporter.prometheus "prom" {
  forward_to = [prometheus.remote_write.prom.receiver]
}

prometheus.remote_write "prom" {
  endpoint {
    url = "http://prometheus:9090/api/v1/write"
  }
}
