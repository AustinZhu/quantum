package conf

import (
	"fmt"
	"strings"
)

type Config struct {
	Server      ServerConfig      `koanf:"server"`
	Storage     StorageConfig     `koanf:"storage"`
	Infra       InfraConfig       `koanf:"infra"`
	Worker      WorkerConfig      `koanf:"worker"`
	Jobs        JobsConfig        `koanf:"jobs"`
	Integration IntegrationConfig `koanf:"integration"`
	Config      SourceConfig      `koanf:"config"`
}

type ServerConfig struct {
	HTTPAddr        string     `koanf:"http_addr"`
	Mode            string     `koanf:"mode"`
	PprofEnabled    bool       `koanf:"pprof_enabled"`
	APIKey          string     `koanf:"api_key"`
	OpenAPISpecPath string     `koanf:"openapi_spec_path"`
	Auth            AuthConfig `koanf:"auth"`
}

type AuthConfig struct {
	Enabled          bool   `koanf:"enabled"`
	CasdoorIssuerURL string `koanf:"casdoor_issuer_url"`
	CasdoorAudience  string `koanf:"casdoor_audience"`
	CasbinModelPath  string `koanf:"casbin_model_path"`
	CasbinPolicyPath string `koanf:"casbin_policy_path"`
}

type StorageConfig struct {
	PostgresURL    string `koanf:"postgres_url"`
	PostgresSchema string `koanf:"postgres_schema"`
	MigrationsPath string `koanf:"migrations_path"`
}

type InfraConfig struct {
	RedisURL string         `koanf:"redis_url"`
	Broker   BrokerConfig   `koanf:"broker"`
	Temporal TemporalConfig `koanf:"temporal"`
}

type BrokerConfig struct {
	Brokers   string `koanf:"brokers"`
	TickTopic string `koanf:"tick_topic"`
}

type TemporalConfig struct {
	Address   string `koanf:"address"`
	Namespace string `koanf:"namespace"`
	TaskQueue string `koanf:"task_queue"`
}

type WorkerConfig struct {
	BrokerGroupID      string `koanf:"broker_group_id"`
	BrokerCommandTopic string `koanf:"broker_command_topic"`
	BrokerEventTopic   string `koanf:"broker_event_topic"`
}

type JobsConfig struct {
	SyncSymbolsIntervalSec       int `koanf:"sync_symbols_interval_sec"`
	OutboxRecoveryIntervalSec    int `koanf:"outbox_recovery_interval_sec"`
	ProjectionRebuildIntervalSec int `koanf:"projection_rebuild_interval_sec"`
	MarketBackfillIntervalSec    int `koanf:"market_backfill_interval_sec"`
}

type IntegrationConfig struct {
	OKX OKXConfig `koanf:"okx"`
}

type OKXConfig struct {
	RESTBaseURL    string `koanf:"rest_base_url"`
	WSPublicURL    string `koanf:"ws_public_url"`
	WSBusinessURL  string `koanf:"ws_business_url"`
	InstTypes      string `koanf:"inst_types"`
	HTTPTimeoutSec int    `koanf:"http_timeout_sec"`
	SymbolCacheSec int    `koanf:"symbol_cache_sec"`
}

type SourceConfig struct {
	Consul ConsulConfig `koanf:"consul"`
	Vault  VaultConfig  `koanf:"vault"`
}

type ConsulConfig struct {
	Enabled  bool   `koanf:"enabled"`
	HTTPAddr string `koanf:"http_addr"`
	KVPath   string `koanf:"kv_path"`
}

type VaultConfig struct {
	Enabled     bool   `koanf:"enabled"`
	Addr        string `koanf:"addr"`
	Token       string `koanf:"token"`
	KVMount     string `koanf:"kv_mount"`
	SecretPath  string `koanf:"secret_path"`
	APIKeyField string `koanf:"api_key_field"`
}

func (c Config) Validate() error {
	if strings.TrimSpace(c.Server.HTTPAddr) == "" {
		return fmt.Errorf("server.http_addr is required")
	}
	if strings.TrimSpace(c.Server.Mode) == "" {
		return fmt.Errorf("server.mode is required")
	}
	if strings.TrimSpace(c.Storage.PostgresURL) == "" {
		return fmt.Errorf("storage.postgres_url is required")
	}
	if strings.TrimSpace(c.Storage.MigrationsPath) == "" {
		return fmt.Errorf("storage.migrations_path is required")
	}
	if strings.TrimSpace(c.Infra.RedisURL) == "" {
		return fmt.Errorf("infra.redis_url is required")
	}
	if c.Integration.OKX.HTTPTimeoutSec <= 0 {
		return fmt.Errorf("integration.okx.http_timeout_sec must be > 0")
	}
	if c.Integration.OKX.SymbolCacheSec <= 0 {
		return fmt.Errorf("integration.okx.symbol_cache_sec must be > 0")
	}
	if c.Jobs.SyncSymbolsIntervalSec <= 0 || c.Jobs.OutboxRecoveryIntervalSec <= 0 || c.Jobs.ProjectionRebuildIntervalSec <= 0 || c.Jobs.MarketBackfillIntervalSec <= 0 {
		return fmt.Errorf("jobs intervals must be > 0")
	}
	if c.Server.Auth.Enabled && strings.TrimSpace(c.Server.Auth.CasdoorIssuerURL) == "" {
		return fmt.Errorf("server.auth.casdoor_issuer_url is required when auth is enabled")
	}
	if c.Server.Auth.CasbinModelPath != "" && c.Server.Auth.CasbinPolicyPath == "" {
		return fmt.Errorf("server.auth.casbin_policy_path is required when casbin_model_path is set")
	}
	if c.Server.Auth.CasbinModelPath == "" && c.Server.Auth.CasbinPolicyPath != "" {
		return fmt.Errorf("server.auth.casbin_model_path is required when casbin_policy_path is set")
	}
	if c.Config.Consul.Enabled {
		if strings.TrimSpace(c.Config.Consul.HTTPAddr) == "" {
			return fmt.Errorf("config.consul.http_addr is required when consul is enabled")
		}
		if strings.TrimSpace(c.Config.Consul.KVPath) == "" {
			return fmt.Errorf("config.consul.kv_path is required when consul is enabled")
		}
	}
	if c.Config.Vault.Enabled {
		if strings.TrimSpace(c.Config.Vault.Addr) == "" {
			return fmt.Errorf("config.vault.addr is required when vault is enabled")
		}
		if strings.TrimSpace(c.Config.Vault.Token) == "" {
			return fmt.Errorf("config.vault.token is required when vault is enabled")
		}
		if strings.TrimSpace(c.Config.Vault.KVMount) == "" {
			return fmt.Errorf("config.vault.kv_mount is required when vault is enabled")
		}
		if strings.TrimSpace(c.Config.Vault.SecretPath) == "" {
			return fmt.Errorf("config.vault.secret_path is required when vault is enabled")
		}
		if strings.TrimSpace(c.Config.Vault.APIKeyField) == "" {
			return fmt.Errorf("config.vault.api_key_field is required when vault is enabled")
		}
	}
	return nil
}

func (s ServerConfig) IsDevelopmentMode() bool {
	mode := strings.ToLower(strings.TrimSpace(s.Mode))
	return mode == "development" || mode == "dev" || mode == "local"
}
