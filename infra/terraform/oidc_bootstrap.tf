resource "terraform_data" "casdoor_oidc_application" {
  count = var.configure_casdoor_oidc ? 1 : 0

  input = {
    owner             = var.casdoor_application_owner
    application       = var.casdoor_application_name
    redirect_uris_sha = sha256(local.oidc_redirect_uris_json)
  }

  triggers_replace = [
    sha256(local.oidc_redirect_uris_json),
    var.casdoor_application_owner,
    var.casdoor_application_name,
  ]

  depends_on = [
    terraform_data.compose_up_all,
    terraform_data.postgresql_migrations,
  ]

  provisioner "local-exec" {
    interpreter = ["/bin/bash", "-c"]
    environment = {
      BOOTSTRAP_PGPASSWORD = var.postgres_superuser_password
    }
    command = <<-EOT
      set -euo pipefail
      SQL="UPDATE \\"application\\" SET redirect_uris = (SELECT jsonb_agg(v ORDER BY v)::text FROM (SELECT DISTINCT value AS v FROM jsonb_array_elements_text(COALESCE(\\"application\\".redirect_uris::jsonb, '[]'::jsonb) || '${local.oidc_redirect_uris_sql}'::jsonb)) s) WHERE owner = '${var.casdoor_application_owner}' AND name = '${var.casdoor_application_name}' RETURNING 1;"
      for attempt in $(seq 1 30); do
        UPDATED=$(
          docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" exec -T \
            -e PGPASSWORD="$${BOOTSTRAP_PGPASSWORD}" \
            timescaledb psql -U ${var.postgres_superuser} -d casdoor -At -c "$${SQL}" | grep -c 1 || true
        )
        if [ "$${UPDATED}" -ge 1 ]; then
          echo "Casdoor redirect_uris initialized for ${var.casdoor_application_owner}/${var.casdoor_application_name}"
          exit 0
        fi
        sleep 2
      done
      echo "Casdoor application ${var.casdoor_application_owner}/${var.casdoor_application_name} not found after retries."
      exit 1
    EOT
  }
}
