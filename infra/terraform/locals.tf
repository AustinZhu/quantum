locals {
  resolved_project_root = var.project_root != "" ? var.project_root : abspath("${path.root}/../..")
  compose_file_path     = var.compose_file != "" ? var.compose_file : "${local.resolved_project_root}/docker-compose.yml"
  env_file_path         = var.env_file != "" ? var.env_file : "${local.resolved_project_root}/.env"

  compose_file_hash = var.manage_compose ? filesha256(local.compose_file_path) : "compose-disabled"
  env_file_hash     = var.manage_compose ? filesha256(local.env_file_path) : "compose-disabled"
  bootstrap_core_services_joined = join(" ", var.bootstrap_core_services)

  consul_kv_defaults = {
    "quantum/algorand/config" = jsonencode({
      server_port          = 8080
      log_level            = "INFO"
      temporal_target      = "temporal:7233"
      redpanda_brokers     = "redpanda:9092"
      airflow_api_base_url = "http://airflow:8080/api/v1"
    })
    "quantum/datafeed/config" = jsonencode({
      http_addr           = ":8081"
      task_queue          = "datafeed-ingest"
      temporal_address    = "temporal:7233"
      redpanda_brokers    = "redpanda:9092"
      redpanda_tick_topic = "datafeed.ticks"
    })
    "quantum/doordash/config" = jsonencode({
      http_port            = 8082
      task_queue           = "doordash-orders"
      temporal_address     = "temporal:7233"
      redpanda_brokers     = "redpanda:9092"
      redpanda_order_topic = "doordash.orders"
      redpanda_risk_topic  = "doordash.risk"
    })
    "quantum/casdoor/config" = jsonencode({
      endpoint    = "http://casdoor:8000"
      db_name     = "casdoor"
      driver      = "postgres"
      rbac_engine = "casbin"
    })
  }

  consul_kv = merge(local.consul_kv_defaults, var.consul_kv_overrides)

  vault_secret_defaults = {
    "quantum/algorand" = {
      api_key = "terminal-dev-key"
    }
    "quantum/datafeed" = {
      api_key = "terminal-dev-key"
    }
    "quantum/doordash" = {
      api_key = "terminal-dev-key"
    }
    "quantum/casdoor" = {
      client_secret = "change-me"
      certificate   = ""
    }
  }

  vault_secrets = merge(local.vault_secret_defaults, var.vault_secret_overrides)

  oidc_redirect_uris_sorted = sort(distinct(var.oidc_redirect_uris))
  oidc_redirect_uris_json    = jsonencode(local.oidc_redirect_uris_sorted)
  oidc_redirect_uris_sql     = replace(local.oidc_redirect_uris_json, "'", "''")

  redpanda_topic_specs = [
    for topic in sort(keys(var.redpanda_topics)) :
    "${topic}:${var.redpanda_topics[topic].partitions}:${var.redpanda_topics[topic].replication_factor}"
  ]

  minio_bucket_list = sort(tolist(var.minio_buckets))

  postgres_database_bootstrap_sql = join("\n", flatten([
    for database_name in sort(keys(var.postgres_databases)) : [
      "SELECT 'CREATE DATABASE ${database_name} OWNER ${var.postgres_databases[database_name].owner}' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '${database_name}')\\gexec",
      "ALTER DATABASE ${database_name} OWNER TO ${var.postgres_databases[database_name].owner};",
      "GRANT ALL PRIVILEGES ON DATABASE ${database_name} TO ${var.postgres_databases[database_name].owner};",
    ]
  ]))

  postgres_schema_bootstrap_sql = join("\n", concat(
    ["CREATE EXTENSION IF NOT EXISTS timescaledb;"],
    [
      for schema_name in sort(tolist(var.postgres_service_schemas)) :
      "CREATE SCHEMA IF NOT EXISTS ${schema_name};"
    ],
    [
      for schema_name in sort(tolist(var.postgres_service_schemas)) :
      "ALTER SCHEMA ${schema_name} OWNER TO ${lookup(var.postgres_schema_owners, schema_name, var.postgres_superuser)};"
    ],
  ))
}
