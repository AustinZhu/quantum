output "project_root" {
  value = local.resolved_project_root
}

output "compose_command" {
  value = "docker compose --project-name ${var.compose_project_name} --env-file \"${local.env_file_path}\" -f \"${local.compose_file_path}\""
}

output "consul_seeded_paths" {
  value = sort(keys(local.consul_kv))
}

output "vault_seeded_paths" {
  value = sort(keys(local.vault_secrets))
}

output "casdoor_oidc_redirect_uris" {
  value = local.oidc_redirect_uris_sorted
}

output "temporal_namespaces" {
  value = sort(tolist(var.temporal_namespaces))
}

output "redpanda_topics" {
  value = sort(keys(var.redpanda_topics))
}

output "minio_buckets" {
  value = local.minio_bucket_list
}
