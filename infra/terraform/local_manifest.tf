resource "local_file" "bootstrap_manifest" {
  filename = "${path.root}/bootstrap-manifest.json"
  content = jsonencode({
    project_root    = local.resolved_project_root
    compose_file    = local.compose_file_path
    env_file        = local.env_file_path
    consul_keys     = sort(keys(local.consul_kv))
    vault_secret    = sort(keys(local.vault_secrets))
    temporal_ns     = sort(tolist(var.temporal_namespaces))
    redpanda_topics = sort(keys(var.redpanda_topics))
    minio_buckets   = local.minio_bucket_list
  })
}
