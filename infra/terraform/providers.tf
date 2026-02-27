provider "docker" {
  host = var.docker_host
}

provider "postgresql" {
  host            = var.postgres_host
  port            = var.postgres_port
  database        = var.postgres_admin_database
  username        = var.postgres_superuser
  password        = var.postgres_superuser_password
  sslmode         = var.postgres_sslmode
  connect_timeout = 15
}

provider "consul" {
  address    = var.consul_address
  datacenter = var.consul_datacenter
}

provider "vault" {
  address = var.vault_address
  token   = var.vault_token
}

provider "grafana" {
  url  = var.grafana_url
  auth = "${var.grafana_admin_user}:${var.grafana_admin_password}"
}

provider "local" {}

# The following providers are declared in versions.tf and intentionally left
# unconfigured here. They can be configured via env vars or in env-specific
# overlays when their resources are enabled:
# - drfaust92/airflow
# - prochac/casdoor
# - redpanda-data/redpanda
# - platacard/temporal
