resource "grafana_folder" "quantum" {
  count = var.grafana_manage_datasources ? 1 : 0
  title = "Quantum"

  depends_on = [terraform_data.compose_up_all]
}

resource "grafana_data_source" "prometheus" {
  count = var.grafana_manage_datasources ? 1 : 0

  name        = "Prometheus"
  type        = "prometheus"
  url         = var.grafana_prometheus_url
  access_mode = "proxy"
  is_default  = true

  depends_on = [terraform_data.compose_up_all]
}

resource "grafana_data_source" "loki" {
  count = var.grafana_manage_datasources ? 1 : 0

  name        = "Loki"
  type        = "loki"
  url         = var.grafana_loki_url
  access_mode = "proxy"

  depends_on = [terraform_data.compose_up_all]
}

resource "grafana_data_source" "tempo" {
  count = var.grafana_manage_datasources ? 1 : 0

  name        = "Tempo"
  type        = "tempo"
  url         = var.grafana_tempo_url
  access_mode = "proxy"

  depends_on = [terraform_data.compose_up_all]
}
