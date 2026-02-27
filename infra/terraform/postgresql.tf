resource "postgresql_role" "service_user" {
  for_each = var.postgres_service_users

  name            = each.key
  login           = true
  password        = each.value.password
  create_database = false
  create_role     = false

  depends_on = [terraform_data.compose_up_infra]
}

resource "terraform_data" "postgresql_migrations" {
  input = {
    databases_sha = sha256(local.postgres_database_bootstrap_sql)
    schemas_sha   = sha256(local.postgres_schema_bootstrap_sql)
  }

  triggers_replace = [
    sha256(local.postgres_database_bootstrap_sql),
    sha256(local.postgres_schema_bootstrap_sql),
  ]

  depends_on = [
    terraform_data.compose_up_infra,
    postgresql_role.service_user,
  ]

  provisioner "local-exec" {
    interpreter = ["/bin/bash", "-c"]
    environment = {
      BOOTSTRAP_PGPASSWORD = var.postgres_superuser_password
    }
    command = <<-EOT
      set -euo pipefail

      docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" exec -T \
        -e PGPASSWORD="$${BOOTSTRAP_PGPASSWORD}" \
        timescaledb psql -U ${var.postgres_superuser} -d postgres -v ON_ERROR_STOP=1 <<'SQL'
      ${local.postgres_database_bootstrap_sql}
      SQL

      docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" exec -T \
        -e PGPASSWORD="$${BOOTSTRAP_PGPASSWORD}" \
        timescaledb psql -U ${var.postgres_superuser} -d ${var.postgres_app_database} -v ON_ERROR_STOP=1 <<'SQL'
      ${local.postgres_schema_bootstrap_sql}
      SQL
    EOT
  }
}
