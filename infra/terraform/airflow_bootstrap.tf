resource "terraform_data" "airflow_db_migration" {
  count = var.bootstrap_airflow_db ? 1 : 0

  input = {
    compose_file_sha = local.compose_file_hash
    env_file_sha     = local.env_file_hash
  }

  triggers_replace = [
    local.compose_file_hash,
    local.env_file_hash,
  ]

  depends_on = [
    terraform_data.compose_up_infra,
    terraform_data.postgresql_migrations,
  ]

  provisioner "local-exec" {
    interpreter = ["/bin/bash", "-c"]
    command = <<-EOT
      set -euo pipefail

      for i in $(seq 1 60); do
        if docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" exec -T \
          timescaledb pg_isready -U ${var.postgres_superuser} -d airflow >/dev/null 2>&1; then
          break
        fi
        sleep 2
      done

      docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" run --rm --no-deps \
        --entrypoint /bin/bash airflow -lc "set -euo pipefail; (python -c 'import psycopg2' >/dev/null 2>&1 || pip install --no-cache-dir psycopg2-binary); airflow db migrate"
    EOT
  }
}
