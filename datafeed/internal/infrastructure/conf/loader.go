package conf

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	kjson "github.com/knadh/koanf/parsers/json"
	"github.com/knadh/koanf/parsers/yaml"
	"github.com/knadh/koanf/providers/confmap"
	"github.com/knadh/koanf/providers/file"
	"github.com/knadh/koanf/v2"
)

type LoadOptions struct {
	ConfigPath string
}

func Load(ctx context.Context, opts LoadOptions) (Config, error) {
	k := koanf.New(".")

	if err := k.Load(confmap.Provider(defaultMap(), "."), nil); err != nil {
		return Config{}, fmt.Errorf("load default config: %w", err)
	}

	if strings.TrimSpace(opts.ConfigPath) != "" {
		parser, err := parserFromPath(opts.ConfigPath)
		if err != nil {
			return Config{}, err
		}
		if err := k.Load(file.Provider(opts.ConfigPath), parser); err != nil {
			return Config{}, fmt.Errorf("load config file %s: %w", opts.ConfigPath, err)
		}
	}

	applyEnv(k)

	var cfg Config
	if err := k.Unmarshal("", &cfg); err != nil {
		return Config{}, fmt.Errorf("decode config: %w", err)
	}

	if cfg.Config.Consul.Enabled {
		consulData, err := fetchConsulConfig(ctx, cfg)
		if err != nil {
			return Config{}, fmt.Errorf("fetch consul config: %w", err)
		}
		mergeConsulMap(&cfg, consulData)
	}

	if cfg.Config.Vault.Enabled {
		secretData, err := fetchVaultSecrets(ctx, cfg)
		if err != nil {
			return Config{}, fmt.Errorf("fetch vault secret: %w", err)
		}
		if value := asString(secretData[cfg.Config.Vault.APIKeyField]); value != "" {
			cfg.Server.APIKey = value
		}
	}

	if err := cfg.Validate(); err != nil {
		return Config{}, err
	}
	return cfg, nil
}

func parserFromPath(path string) (koanf.Parser, error) {
	switch strings.ToLower(filepath.Ext(path)) {
	case ".yaml", ".yml":
		return yaml.Parser(), nil
	case ".json":
		return kjson.Parser(), nil
	default:
		return nil, fmt.Errorf("unsupported config extension: %s", filepath.Ext(path))
	}
}

func applyEnv(k *koanf.Koanf) {
	setString := func(envKey, path string) {
		if value, ok := os.LookupEnv(envKey); ok {
			_ = k.Set(path, value)
		}
	}
	setBool := func(envKey, path string) {
		if value, ok := os.LookupEnv(envKey); ok {
			parsed, err := strconv.ParseBool(value)
			if err == nil {
				_ = k.Set(path, parsed)
			}
		}
	}
	setInt := func(envKey, path string) {
		if value, ok := os.LookupEnv(envKey); ok {
			parsed, err := strconv.Atoi(value)
			if err == nil {
				_ = k.Set(path, parsed)
			}
		}
	}
	setStringFallback := func(primary, fallback, path string) {
		if value, ok := os.LookupEnv(primary); ok {
			_ = k.Set(path, value)
			return
		}
		if value, ok := os.LookupEnv(fallback); ok {
			_ = k.Set(path, value)
		}
	}

	setString("DATAFEED_SERVER_HTTP_ADDR", "server.http_addr")
	setString("DATAFEED_SERVER_API_KEY", "server.api_key")
	setString("DATAFEED_SERVER_OPENAPI_SPEC_PATH", "server.openapi_spec_path")

	setString("DATAFEED_STORAGE_POSTGRES_URL", "storage.postgres_url")
	setString("DATAFEED_STORAGE_POSTGRES_SCHEMA", "storage.postgres_schema")
	setString("DATAFEED_STORAGE_MIGRATIONS_PATH", "storage.migrations_path")

	setString("DATAFEED_INFRA_REDIS_URL", "infra.redis_url")
	setString("DATAFEED_INFRA_BROKER_BROKERS", "infra.broker.brokers")
	setString("DATAFEED_INFRA_BROKER_TICK_TOPIC", "infra.broker.tick_topic")

	setStringFallback("DATAFEED_INFRA_TEMPORAL_ADDRESS", "DATAFEED_TEMPORAL_ADDRESS", "infra.temporal.address")
	setStringFallback("DATAFEED_INFRA_TEMPORAL_NAMESPACE", "DATAFEED_TEMPORAL_NAMESPACE", "infra.temporal.namespace")
	setString("DATAFEED_INFRA_TEMPORAL_TASK_QUEUE", "infra.temporal.task_queue")

	setString("DATAFEED_WORKER_BROKER_GROUP_ID", "worker.broker_group_id")
	setString("DATAFEED_WORKER_BROKER_COMMAND_TOPIC", "worker.broker_command_topic")
	setString("DATAFEED_WORKER_BROKER_EVENT_TOPIC", "worker.broker_event_topic")

	setInt("DATAFEED_JOBS_SYNC_SYMBOLS_INTERVAL_SEC", "jobs.sync_symbols_interval_sec")
	setInt("DATAFEED_JOBS_OUTBOX_RECOVERY_INTERVAL_SEC", "jobs.outbox_recovery_interval_sec")
	setInt("DATAFEED_JOBS_PROJECTION_REBUILD_INTERVAL_SEC", "jobs.projection_rebuild_interval_sec")
	setInt("DATAFEED_JOBS_MARKET_BACKFILL_INTERVAL_SEC", "jobs.market_backfill_interval_sec")

	setString("DATAFEED_INTEGRATION_OKX_REST_BASE_URL", "integration.okx.rest_base_url")
	setString("DATAFEED_INTEGRATION_OKX_WS_PUBLIC_URL", "integration.okx.ws_public_url")
	setString("DATAFEED_INTEGRATION_OKX_WS_BUSINESS_URL", "integration.okx.ws_business_url")
	setString("DATAFEED_INTEGRATION_OKX_INST_TYPES", "integration.okx.inst_types")
	setInt("DATAFEED_INTEGRATION_OKX_HTTP_TIMEOUT_SEC", "integration.okx.http_timeout_sec")
	setInt("DATAFEED_INTEGRATION_OKX_SYMBOL_CACHE_SEC", "integration.okx.symbol_cache_sec")

	setBool("DATAFEED_CONFIG_CONSUL_ENABLED", "config.consul.enabled")
	setString("DATAFEED_CONFIG_CONSUL_HTTP_ADDR", "config.consul.http_addr")
	setString("DATAFEED_CONFIG_CONSUL_KV_PATH", "config.consul.kv_path")

	setBool("DATAFEED_CONFIG_VAULT_ENABLED", "config.vault.enabled")
	setString("DATAFEED_CONFIG_VAULT_ADDR", "config.vault.addr")
	setString("DATAFEED_CONFIG_VAULT_TOKEN", "config.vault.token")
	setString("DATAFEED_CONFIG_VAULT_KV_MOUNT", "config.vault.kv_mount")
	setString("DATAFEED_CONFIG_VAULT_SECRET_PATH", "config.vault.secret_path")
	setString("DATAFEED_CONFIG_VAULT_API_KEY_FIELD", "config.vault.api_key_field")
}

func fetchConsulConfig(ctx context.Context, cfg Config) (map[string]any, error) {
	keyPath := strings.TrimLeft(cfg.Config.Consul.KVPath, "/")
	url := fmt.Sprintf("%s/v1/kv/%s?raw", strings.TrimRight(cfg.Config.Consul.HTTPAddr, "/"), keyPath)

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}
	client := &http.Client{Timeout: 5 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusNotFound {
		return map[string]any{}, nil
	}
	if resp.StatusCode >= http.StatusBadRequest {
		body, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("consul status %d: %s", resp.StatusCode, strings.TrimSpace(string(body)))
	}

	var payload map[string]any
	if err := json.NewDecoder(resp.Body).Decode(&payload); err != nil {
		return nil, err
	}
	return payload, nil
}

func fetchVaultSecrets(ctx context.Context, cfg Config) (map[string]any, error) {
	path := strings.TrimLeft(cfg.Config.Vault.SecretPath, "/")
	url := fmt.Sprintf("%s/v1/%s/data/%s", strings.TrimRight(cfg.Config.Vault.Addr, "/"), cfg.Config.Vault.KVMount, path)

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("X-Vault-Token", cfg.Config.Vault.Token)

	client := &http.Client{Timeout: 5 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusNotFound {
		return map[string]any{}, nil
	}
	if resp.StatusCode >= http.StatusBadRequest {
		body, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("vault status %d: %s", resp.StatusCode, strings.TrimSpace(string(body)))
	}

	var payload map[string]any
	if err := json.NewDecoder(resp.Body).Decode(&payload); err != nil {
		return nil, err
	}
	data, _ := payload["data"].(map[string]any)
	secretData, _ := data["data"].(map[string]any)
	if secretData == nil {
		return map[string]any{}, nil
	}
	return secretData, nil
}

func mergeConsulMap(cfg *Config, payload map[string]any) {
	if value := pickString(payload, "server.http_addr", "http_addr"); value != "" {
		cfg.Server.HTTPAddr = value
	}
	if value := pickString(payload, "server.api_key", "api_key"); value != "" {
		cfg.Server.APIKey = value
	}
	if value := pickString(payload, "server.openapi_spec_path", "openapi_spec_path"); value != "" {
		cfg.Server.OpenAPISpecPath = value
	}
	if value := pickString(payload, "storage.postgres_url", "database_url"); value != "" {
		cfg.Storage.PostgresURL = value
	}
	if value := pickString(payload, "storage.postgres_schema", "schema"); value != "" {
		cfg.Storage.PostgresSchema = value
	}
	if value := pickString(payload, "storage.migrations_path", "migrations_path"); value != "" {
		cfg.Storage.MigrationsPath = value
	}
	if value := pickString(payload, "infra.redis_url", "redis_url"); value != "" {
		cfg.Infra.RedisURL = value
	}
	if value := pickString(payload, "infra.broker.brokers", "redpanda_brokers"); value != "" {
		cfg.Infra.Broker.Brokers = value
	}
	if value := pickString(payload, "infra.broker.tick_topic", "redpanda_tick_topic"); value != "" {
		cfg.Infra.Broker.TickTopic = value
	}
	if value := pickString(payload, "infra.temporal.address", "temporal_address"); value != "" {
		cfg.Infra.Temporal.Address = value
	}
	if value := pickString(payload, "infra.temporal.namespace", "temporal_namespace"); value != "" {
		cfg.Infra.Temporal.Namespace = value
	}
	if value := pickString(payload, "infra.temporal.task_queue", "temporal_task_queue"); value != "" {
		cfg.Infra.Temporal.TaskQueue = value
	}
	if value := pickString(payload, "worker.broker_group_id"); value != "" {
		cfg.Worker.BrokerGroupID = value
	}
	if value := pickString(payload, "worker.broker_command_topic"); value != "" {
		cfg.Worker.BrokerCommandTopic = value
	}
	if value := pickString(payload, "worker.broker_event_topic"); value != "" {
		cfg.Worker.BrokerEventTopic = value
	}
	if value := pickString(payload, "integration.okx.rest_base_url", "okx_rest_base_url"); value != "" {
		cfg.Integration.OKX.RESTBaseURL = value
	}
	if value := pickString(payload, "integration.okx.ws_public_url", "okx_ws_public_url"); value != "" {
		cfg.Integration.OKX.WSPublicURL = value
	}
	if value := pickString(payload, "integration.okx.ws_business_url", "okx_ws_business_url"); value != "" {
		cfg.Integration.OKX.WSBusinessURL = value
	}
	if value := pickString(payload, "integration.okx.inst_types", "okx_inst_types"); value != "" {
		cfg.Integration.OKX.InstTypes = value
	}
}

func pickString(payload map[string]any, paths ...string) string {
	for _, path := range paths {
		if strings.TrimSpace(path) == "" {
			continue
		}
		value := lookupPath(payload, path)
		if text := asString(value); text != "" {
			return text
		}
	}
	return ""
}

func lookupPath(payload map[string]any, path string) any {
	parts := strings.Split(path, ".")
	current := any(payload)
	for _, part := range parts {
		node, ok := current.(map[string]any)
		if !ok {
			return nil
		}
		value, exists := node[part]
		if !exists {
			return nil
		}
		current = value
	}
	return current
}

func asString(value any) string {
	switch typed := value.(type) {
	case string:
		return typed
	default:
		return ""
	}
}
