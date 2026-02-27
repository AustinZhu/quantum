terraform {
  required_version = ">= 1.7.0"

  # Configure with:
  # terraform init -backend-config=environments/dev/backend.hcl.example
  backend "consul" {}

  required_providers {
    airflow = {
      source  = "drfaust92/airflow"
      version = ">= 0.1.0"
    }
    casdoor = {
      source  = "prochac/casdoor"
      version = ">= 0.1.0"
    }
    consul = {
      source  = "hashicorp/consul"
      version = "~> 2.22"
    }
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
    grafana = {
      source  = "grafana/grafana"
      version = "~> 3.16"
    }
    local = {
      source  = "hashicorp/local"
      version = "~> 2.5"
    }
    postgresql = {
      source  = "cyrilgdn/postgresql"
      version = "~> 1.24"
    }
    redpanda = {
      source  = "redpanda-data/redpanda"
      version = ">= 0.1.0"
    }
    temporal = {
      source  = "platacard/temporal"
      version = ">= 0.1.0"
    }
    vault = {
      source  = "hashicorp/vault"
      version = "~> 4.5"
    }
  }
}
