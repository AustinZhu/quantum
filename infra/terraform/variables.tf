variable "project_root" {
  description = "Absolute project root. If empty, resolved to ../../ from this Terraform root."
  type        = string
  default     = ""
}

variable "compose_file" {
  description = "Absolute path to docker-compose.yml. If empty, resolved under project_root."
  type        = string
  default     = ""
}

variable "env_file" {
  description = "Absolute path to .env file. If empty, resolved under project_root."
  type        = string
  default     = ""
}

variable "compose_project_name" {
  description = "Docker Compose project name."
  type        = string
  default     = "quantum"
}

variable "bootstrap_core_services" {
  description = "Core infrastructure services started first for ordered bootstrap."
  type        = list(string)
  default = [
    "timescaledb",
    "redis",
    "redpanda",
    "minio",
    "consul",
    "vault",
    "temporal-admin-tools",
    "temporal",
  ]
}

variable "manage_compose" {
  description = "Run docker compose up from Terraform."
  type        = bool
  default     = true
}

variable "compose_down_on_destroy" {
  description = "Run docker compose down when Terraform resources are destroyed."
  type        = bool
  default     = false
}

variable "docker_host" {
  description = "Docker daemon socket/host."
  type        = string
  default     = "unix:///var/run/docker.sock"
}

variable "create_docker_volumes" {
  description = "Pre-create named Docker volumes used by compose."
  type        = bool
  default     = true
}

variable "docker_volumes" {
  description = "Stateful compose volumes to pre-create."
  type        = set(string)
  default = [
    "pg_data",
    "redpanda_data",
    "minio_data",
    "consul_data",
    "vault_data",
    "pgadmin_data",
    "redisinsight_data",
    "feast_data",
    "mlflow_data",
    "casdoor_data",
    "alloy_data",
    "tempo_data",
    "loki_data",
    "grafana_data",
    "algorand_data",
  ]
}

variable "postgres_host" {
  description = "PostgreSQL host reachable from Terraform runner."
  type        = string
  default     = "127.0.0.1"
}

variable "postgres_port" {
  description = "PostgreSQL port reachable from Terraform runner."
  type        = number
  default     = 5432
}

variable "postgres_admin_database" {
  description = "Database used for admin connection."
  type        = string
  default     = "postgres"
}

variable "postgres_app_database" {
  description = "Main application database where service schemas are created."
  type        = string
  default     = "quantum"
}

variable "postgres_superuser" {
  description = "PostgreSQL admin user."
  type        = string
  default     = "quantum"
}

variable "postgres_superuser_password" {
  description = "PostgreSQL admin password."
  type        = string
  sensitive   = true
  default     = "quantum"
}

variable "postgres_sslmode" {
  description = "PostgreSQL SSL mode."
  type        = string
  default     = "disable"
}

variable "postgres_service_users" {
  description = "Database users (roles) created for runtime services."
  type = map(object({
    password = string
  }))
  sensitive = true
  default = {
    algorand = { password = "quantum" }
    datafeed = { password = "quantum" }
    doordash = { password = "quantum" }
    airflow  = { password = "airflow" }
    casdoor  = { password = "quantum" }
  }
}

variable "postgres_databases" {
  description = "Databases created as part of bootstrap."
  type = map(object({
    owner = string
  }))
  default = {
    airflow             = { owner = "airflow" }
    temporal            = { owner = "quantum" }
    temporal_visibility = { owner = "quantum" }
    casdoor             = { owner = "quantum" }
  }
}

variable "postgres_service_schemas" {
  description = "Service schemas created in postgres_app_database."
  type        = set(string)
  default     = ["algorand", "datafeed", "doordash"]
}

variable "postgres_schema_owners" {
  description = "Schema owner mapping per service schema."
  type        = map(string)
  default = {
    algorand = "algorand"
    datafeed = "datafeed"
    doordash = "doordash"
  }
}

variable "consul_address" {
  description = "Consul HTTP API address."
  type        = string
  default     = "http://127.0.0.1:8500"
}

variable "consul_datacenter" {
  description = "Consul datacenter name."
  type        = string
  default     = "dc1"
}

variable "consul_kv_overrides" {
  description = "Optional map of KV overrides merged on top of defaults."
  type        = map(string)
  default     = {}
}

variable "vault_address" {
  description = "Vault HTTP API address."
  type        = string
  default     = "http://127.0.0.1:8200"
}

variable "vault_token" {
  description = "Vault token with write access to kv mount."
  type        = string
  sensitive   = true
  default     = "root"
}

variable "vault_kv_mount" {
  description = "Vault KV-v2 mount path."
  type        = string
  default     = "secret"
}

variable "vault_manage_kv_mount" {
  description = "Create/manage the vault_kv_mount via Terraform."
  type        = bool
  default     = false
}

variable "vault_secret_overrides" {
  description = "Optional map of Vault secret payload overrides merged on top of defaults."
  type        = map(map(string))
  sensitive   = true
  default     = {}
}

variable "configure_casdoor_oidc" {
  description = "Seed/refresh Casdoor application redirect URIs for OIDC clients."
  type        = bool
  default     = true
}

variable "casdoor_application_owner" {
  description = "Casdoor application owner used for redirect URI initialization."
  type        = string
  default     = "admin"
}

variable "casdoor_application_name" {
  description = "Casdoor application name used for redirect URI initialization."
  type        = string
  default     = "app-built-in"
}

variable "oidc_redirect_uris" {
  description = "Redirect URIs written into Casdoor application.redirect_uris."
  type        = list(string)
  default = [
    "http://airflow.quantum.orb.local/oauth-authorized/casdoor",
    "https://airflow.quantum.orb.local/oauth-authorized/casdoor",
    "http://grafana.quantum.orb.local/login/generic_oauth",
    "https://grafana.quantum.orb.local/login/generic_oauth",
    "http://localhost:3001/login/generic_oauth",
    "http://localhost:5001/callback",
    "http://localhost:5050/oauth2/authorize",
    "http://localhost:8087/oauth-authorized/casdoor",
    "http://localhost:3000/api/auth/callback",
    "http://mlflow.quantum.orb.local/callback",
    "http://pgadmin.quantum.orb.local/oauth2/authorize",
    "http://feast.quantum.orb.local/oauth2/callback",
    "http://localhost:6567/oauth2/callback",
    "http://terminal.quantum.orb.local/api/auth/callback",
    "https://terminal.quantum.orb.local/api/auth/callback",
  ]
}

variable "bootstrap_temporal" {
  description = "Create/ensure Temporal namespaces after stack startup."
  type        = bool
  default     = true
}

variable "bootstrap_airflow_db" {
  description = "Run Airflow metadata DB migrations against Postgres before starting full stack."
  type        = bool
  default     = true
}

variable "temporal_namespaces" {
  description = "Temporal namespaces to ensure."
  type        = set(string)
  default     = ["default", "algorand", "datafeed", "doordash"]
}

variable "bootstrap_redpanda_topics" {
  description = "Create/ensure Redpanda topics after stack startup."
  type        = bool
  default     = true
}

variable "redpanda_topics" {
  description = "Kafka/Redpanda topics to ensure."
  type = map(object({
    partitions         = number
    replication_factor = number
  }))
  default = {
    "datafeed.ticks"          = { partitions = 3, replication_factor = 1 }
    "datafeed.ticks.enriched" = { partitions = 3, replication_factor = 1 }
    "doordash.orders"         = { partitions = 3, replication_factor = 1 }
    "doordash.risk"           = { partitions = 3, replication_factor = 1 }
  }
}

variable "bootstrap_minio" {
  description = "Create/ensure MinIO buckets after stack startup."
  type        = bool
  default     = true
}

variable "minio_root_user" {
  description = "MinIO root user for bootstrap bucket creation."
  type        = string
  default     = "minioadmin"
}

variable "minio_root_password" {
  description = "MinIO root password for bootstrap bucket creation."
  type        = string
  sensitive   = true
  default     = "minioadmin"
}

variable "minio_buckets" {
  description = "MinIO buckets to ensure."
  type        = set(string)
  default     = ["artifacts", "feast", "lake", "mlflow"]
}

variable "grafana_url" {
  description = "Grafana URL for provider operations."
  type        = string
  default     = "http://127.0.0.1:3001"
}

variable "grafana_admin_user" {
  description = "Grafana admin username."
  type        = string
  default     = "admin"
}

variable "grafana_admin_password" {
  description = "Grafana admin password."
  type        = string
  sensitive   = true
  default     = "admin"
}

variable "grafana_manage_datasources" {
  description = "Manage Grafana datasources through Terraform."
  type        = bool
  default     = false
}

variable "grafana_prometheus_url" {
  description = "Prometheus datasource URL from Grafana container."
  type        = string
  default     = "http://prometheus:9090"
}

variable "grafana_loki_url" {
  description = "Loki datasource URL from Grafana container."
  type        = string
  default     = "http://loki:3100"
}

variable "grafana_tempo_url" {
  description = "Tempo datasource URL from Grafana container."
  type        = string
  default     = "http://tempo:3200"
}

variable "airflow_api_url" {
  description = "Airflow API base URL (reserved for provider-backed automation overlays)."
  type        = string
  default     = "http://127.0.0.1:8087/api/v1"
}

variable "airflow_username" {
  description = "Airflow API username (reserved for provider-backed automation overlays)."
  type        = string
  default     = "airflow"
}

variable "airflow_password" {
  description = "Airflow API password (reserved for provider-backed automation overlays)."
  type        = string
  sensitive   = true
  default     = "airflow"
}
