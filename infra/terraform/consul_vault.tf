resource "consul_keys" "seed_config" {
  datacenter = var.consul_datacenter

  dynamic "key" {
    for_each = local.consul_kv
    content {
      path  = key.key
      value = key.value
    }
  }

  depends_on = [terraform_data.compose_up_infra]
}

resource "vault_mount" "kv_v2" {
  count = var.vault_manage_kv_mount ? 1 : 0

  path = var.vault_kv_mount
  type = "kv-v2"

  depends_on = [terraform_data.compose_up_infra]
}

resource "vault_kv_secret_v2" "seed_secret" {
  for_each = local.vault_secrets

  mount     = var.vault_kv_mount
  name      = each.key
  data_json = jsonencode(each.value)

  depends_on = [
    terraform_data.compose_up_infra,
    vault_mount.kv_v2,
  ]
}
