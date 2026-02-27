resource "terraform_data" "compose_up_infra" {
  input = {
    manage_compose        = tostring(var.manage_compose)
    compose_file          = local.compose_file_path
    compose_file_sha      = local.compose_file_hash
    env_file              = local.env_file_path
    env_file_sha          = local.env_file_hash
    project_name          = var.compose_project_name
    core_services_joined  = local.bootstrap_core_services_joined
    core_services_sha256  = sha256(local.bootstrap_core_services_joined)
  }

  triggers_replace = [
    tostring(var.manage_compose),
    var.compose_project_name,
    local.compose_file_hash,
    local.env_file_hash,
    sha256(local.bootstrap_core_services_joined),
  ]

  depends_on = [docker_volume.stateful]

  provisioner "local-exec" {
    interpreter = ["/bin/bash", "-c"]
    command = var.manage_compose ? <<-EOT
      set -euo pipefail
      docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" up -d --build --wait ${local.bootstrap_core_services_joined}
    EOT : "echo 'manage_compose=false; skipping core docker compose up'"
  }
}

resource "terraform_data" "compose_up_all" {
  input = {
    manage_compose   = tostring(var.manage_compose)
    compose_file     = local.compose_file_path
    compose_file_sha = local.compose_file_hash
    env_file         = local.env_file_path
    env_file_sha     = local.env_file_hash
    project_name     = var.compose_project_name
  }

  triggers_replace = [
    tostring(var.manage_compose),
    var.compose_project_name,
    local.compose_file_hash,
    local.env_file_hash,
  ]

  depends_on = [
    terraform_data.compose_up_infra,
    terraform_data.postgresql_migrations,
    terraform_data.airflow_db_migration,
    consul_keys.seed_config,
    vault_kv_secret_v2.seed_secret,
    terraform_data.temporal_namespaces,
    terraform_data.redpanda_topics,
    terraform_data.minio_buckets,
  ]

  provisioner "local-exec" {
    interpreter = ["/bin/bash", "-c"]
    command = var.manage_compose ? <<-EOT
      set -euo pipefail
      docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" up -d --build --wait
    EOT : "echo 'manage_compose=false; skipping full docker compose up'"
  }

  provisioner "local-exec" {
    when        = destroy
    interpreter = ["/bin/bash", "-c"]
    command = var.manage_compose && var.compose_down_on_destroy ? <<-EOT
      set -euo pipefail
      docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" down
    EOT : "echo 'compose_down_on_destroy=false; skipping docker compose down'"
  }
}
