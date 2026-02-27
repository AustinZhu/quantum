resource "terraform_data" "temporal_namespaces" {
  count = var.bootstrap_temporal ? 1 : 0

  input = {
    namespaces_sha = sha256(jsonencode(sort(tolist(var.temporal_namespaces))))
  }

  triggers_replace = [
    sha256(jsonencode(sort(tolist(var.temporal_namespaces)))),
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
        if docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" exec -T temporal-admin-tools \
          temporal operator cluster health --address temporal:7233 >/dev/null 2>&1; then
          break
        fi
        sleep 2
      done
      docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" exec -T temporal-admin-tools \
        temporal operator cluster health --address temporal:7233 >/dev/null
      for ns in ${join(" ", sort(tolist(var.temporal_namespaces)))}; do
        if docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" exec -T temporal-admin-tools \
          temporal operator namespace describe --address temporal:7233 --namespace "$${ns}" >/dev/null 2>&1; then
          echo "Temporal namespace exists: $${ns}"
        else
          echo "Creating Temporal namespace: $${ns}"
          docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" exec -T temporal-admin-tools \
            temporal operator namespace create --address temporal:7233 --namespace "$${ns}" --description "$${ns} namespace" --retention 72h
        fi
      done
    EOT
  }
}

resource "terraform_data" "redpanda_topics" {
  count = var.bootstrap_redpanda_topics ? 1 : 0

  input = {
    topics_sha = sha256(jsonencode(var.redpanda_topics))
  }

  triggers_replace = [
    sha256(jsonencode(var.redpanda_topics)),
  ]

  depends_on = [terraform_data.compose_up_infra]

  provisioner "local-exec" {
    interpreter = ["/bin/bash", "-c"]
    command = <<-EOT
      set -euo pipefail
      docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" exec -T redpanda \
        rpk cluster health --exit-when-healthy >/dev/null
      for spec in ${join(" ", local.redpanda_topic_specs)}; do
        IFS=':' read -r topic partitions replication <<< "$${spec}"
        echo "Ensuring Redpanda topic: $${topic}"
        docker compose --project-name ${var.compose_project_name} --env-file "${local.env_file_path}" -f "${local.compose_file_path}" exec -T redpanda \
          rpk topic create --if-not-exists "$${topic}" -p "$${partitions}" -r "$${replication}"
      done
    EOT
  }
}

resource "terraform_data" "minio_buckets" {
  count = var.bootstrap_minio ? 1 : 0

  input = {
    buckets_sha = sha256(jsonencode(local.minio_bucket_list))
  }

  triggers_replace = [
    sha256(jsonencode(local.minio_bucket_list)),
    var.minio_root_user,
  ]

  depends_on = [terraform_data.compose_up_infra]

  provisioner "local-exec" {
    interpreter = ["/bin/bash", "-c"]
    environment = {
      MINIO_ROOT_USER     = var.minio_root_user
      MINIO_ROOT_PASSWORD = var.minio_root_password
    }
    command = <<-EOT
      set -euo pipefail
      docker run --rm --network ${var.compose_project_name}_default \
        -e MINIO_ROOT_USER -e MINIO_ROOT_PASSWORD \
        minio/mc:latest sh -c "
          for i in \$(seq 1 30); do
            if mc alias set local http://minio:9000 \"$${MINIO_ROOT_USER}\" \"$${MINIO_ROOT_PASSWORD}\" >/dev/null 2>&1; then
              break
            fi
            sleep 2
          done
          mc alias set local http://minio:9000 \"$${MINIO_ROOT_USER}\" \"$${MINIO_ROOT_PASSWORD}\" >/dev/null
          for b in ${join(" ", local.minio_bucket_list)}; do
            mc mb --ignore-existing \"local/$${b}\" >/dev/null
            echo \"Ensured MinIO bucket: $${b}\"
          done
        "
    EOT
  }
}
