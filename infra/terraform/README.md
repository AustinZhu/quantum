# Terraform Bootstrap (On-Prem)

This stack automates local/on-prem platform bootstrap for Quantum:

- Docker Compose deployment orchestration
- Postgres role/database/schema creation
- Consul KV seeding
- Vault KV-v2 secret seeding
- Casdoor OIDC redirect URI initialization (via Casdoor DB bootstrap update)
- Temporal namespace bootstrap
- Redpanda topic bootstrap
- MinIO bucket bootstrap
- Airflow metadata schema migration (`airflow db migrate`)
- Optional Grafana datasource management

Provision order is enforced:

1. Start core infra services only (DB/cache/bus/secrets/Temporal).
2. Run seed/migration bootstrap (Postgres, Consul, Vault, topics, buckets, namespaces).
3. Run Airflow DB migration against Postgres.
4. Start full compose stack.
5. Initialize Casdoor OIDC redirect URIs.

Casdoor redirect URI bootstrap is additive: desired URIs are merged with existing values.

## Providers

Required providers are pinned in [`versions.tf`](./versions.tf):

- `kreuzwerker/docker`
- `prochac/casdoor`
- `platacard/temporal`
- `cyrilgdn/postgresql`
- `hashicorp/consul`
- `hashicorp/vault`
- `drfaust92/airflow`
- `grafana/grafana`
- `hashicorp/local`
- `redpanda-data/redpanda`

`casdoor`, `temporal`, `airflow`, and `redpanda` are declared and version-pinned so
they can be used in env-specific overlays. The base stack currently uses provider-backed
resources for Docker, PostgreSQL, Consul, Vault, Grafana, and Local, plus idempotent
runtime bootstrap commands for Temporal/Redpanda/Casdoor OIDC that run after compose up.

## State Management Best Practice

This stack uses a `consul` backend (partial config). Keep backend settings out of VCS.

1. Copy and customize:
   - [`environments/dev/backend.hcl.example`](./environments/dev/backend.hcl.example)
2. Initialize:

```bash
cd infra/terraform
terraform init -backend-config=environments/dev/backend.hcl.example
```

For production-like on-prem environments:

- Use a dedicated Consul ACL token with narrow state path permissions.
- Enforce TLS for Consul/Vault/Postgres/Grafana endpoints.
- Split state by environment/workspace and by concern (platform vs app stacks).
- Store secrets only in secure backends; avoid plaintext `*.tfvars` in VCS.

## Usage

```bash
cd infra/terraform
cp terraform.tfvars.example terraform.tfvars
# Edit sensitive fields in terraform.tfvars

terraform init -backend-config=environments/dev/backend.hcl.example
terraform plan
terraform apply
```

## Security Notes

- `vault_token`, DB passwords, and MinIO/Grafana credentials are sensitive Terraform variables.
- Do not commit `terraform.tfvars`, `*.auto.tfvars`, or local state files.
- Prefer injecting secrets through `TF_VAR_*` environment variables or a secret manager.

## Common Flags

- Skip compose lifecycle: `-var manage_compose=false`
- Keep stack running on destroy: `-var compose_down_on_destroy=false`
- Skip runtime bootstrap:
  - `-var bootstrap_airflow_db=false`
  - `-var bootstrap_temporal=false`
  - `-var bootstrap_redpanda_topics=false`
  - `-var bootstrap_minio=false`
  - `-var configure_casdoor_oidc=false`

## What Gets Seeded

- Consul keys:
  - `quantum/algorand/config`
  - `quantum/datafeed/config`
  - `quantum/doordash/config`
  - `quantum/casdoor/config`
- Vault KV-v2:
  - `secret/quantum/algorand`
  - `secret/quantum/datafeed`
  - `secret/quantum/doordash`
  - `secret/quantum/casdoor`
- Postgres:
  - DBs: `airflow`, `temporal`, `temporal_visibility`, `casdoor`
  - Schemas in `quantum`: `algorand`, `datafeed`, `doordash`
- Airflow:
  - Metadata migration command: `airflow db migrate` (run via Terraform bootstrap one-shot)
- OIDC redirect URI update for Casdoor app:
  - `admin/app-built-in`
