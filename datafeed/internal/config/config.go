package config

import (
	"os"
	"strconv"
)

type Config struct {
	HTTPAddr          string
	DatabaseURL       string
	Schema            string
	MigrationsPath    string
	RedisURL          string
	RedpandaBrokers   string
	RedpandaTickTopic string
	TemporalAddress   string
	TemporalNamespace string
	TaskQueue         string
	APIKey            string
	OpenAPISpecPath   string
	ConfigFromConsul  bool
	ConsulHTTPAddr    string
	ConsulKVPath      string
	SecretsFromVault  bool
	VaultAddr         string
	VaultToken        string
	VaultKVMount      string
	VaultSecretPath   string
	VaultAPIKeyField  string
	OKXRESTBaseURL    string
	OKXWSPublicURL    string
	OKXWSBusinessURL  string
	OKXInstTypes      string
	OKXHTTPTimeoutSec int
	OKXSymbolCacheSec int
}

func Load() Config {
	cfg := Config{
		HTTPAddr:          getOrDefault("DATAFEED_HTTP_ADDR", ":8081"),
		DatabaseURL:       getOrDefault("DATAFEED_DATABASE_URL", "postgres://quantum:quantum@localhost:5432/quantum?sslmode=disable"),
		Schema:            getOrDefault("DATAFEED_DB_SCHEMA", "datafeed"),
		MigrationsPath:    getOrDefault("DATAFEED_MIGRATIONS_PATH", "./migrations"),
		RedisURL:          getOrDefault("DATAFEED_REDIS_URL", "redis://localhost:6379/0"),
		RedpandaBrokers:   getOrDefault("DATAFEED_REDPANDA_BROKERS", getOrDefault("REDPANDA_BROKERS", "")),
		RedpandaTickTopic: getOrDefault("DATAFEED_REDPANDA_TICKS_TOPIC", "datafeed.ticks"),
		TemporalAddress:   getOrDefault("DATAFEED_TEMPORAL_ADDRESS", "localhost:7233"),
		TemporalNamespace: getOrDefault("DATAFEED_TEMPORAL_NAMESPACE", "default"),
		TaskQueue:         getOrDefault("DATAFEED_TASK_QUEUE", "datafeed-ingest"),
		APIKey:            getOrDefault("DATAFEED_API_KEY", ""),
		OpenAPISpecPath:   getOrDefault("DATAFEED_OPENAPI_SPEC_PATH", "/app/openapi/quantum.openapi.json"),
		ConfigFromConsul:  getBoolOrDefault("DATAFEED_CONFIG_FROM_CONSUL", false),
		ConsulHTTPAddr:    getOrDefault("DATAFEED_CONSUL_HTTP_ADDR", "http://localhost:8500"),
		ConsulKVPath:      getOrDefault("DATAFEED_CONSUL_KV_PATH", "quantum/datafeed/config"),
		SecretsFromVault:  getBoolOrDefault("DATAFEED_SECRETS_FROM_VAULT", false),
		VaultAddr:         getOrDefault("DATAFEED_VAULT_ADDR", "http://localhost:8200"),
		VaultToken:        getOrDefault("DATAFEED_VAULT_TOKEN", "root"),
		VaultKVMount:      getOrDefault("DATAFEED_VAULT_KV_MOUNT", "secret"),
		VaultSecretPath:   getOrDefault("DATAFEED_VAULT_SECRET_PATH", "quantum/datafeed"),
		VaultAPIKeyField:  getOrDefault("DATAFEED_VAULT_API_KEY_FIELD", "api_key"),
		OKXRESTBaseURL:    getOrDefault("DATAFEED_OKX_REST_BASE_URL", "https://www.okx.com"),
		OKXWSPublicURL:    getOrDefault("DATAFEED_OKX_WS_PUBLIC_URL", "wss://ws.okx.com:8443/ws/v5/public"),
		OKXWSBusinessURL:  getOrDefault("DATAFEED_OKX_WS_BUSINESS_URL", "wss://ws.okx.com:8443/ws/v5/business"),
		OKXInstTypes:      getOrDefault("DATAFEED_OKX_INST_TYPES", "SPOT"),
		OKXHTTPTimeoutSec: getIntOrDefault("DATAFEED_OKX_HTTP_TIMEOUT_SEC", 10),
		OKXSymbolCacheSec: getIntOrDefault("DATAFEED_OKX_SYMBOL_CACHE_SEC", 30),
	}
	return applyExternalConfig(cfg)
}

func getOrDefault(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}

func getBoolOrDefault(key string, fallback bool) bool {
	raw := getOrDefault(key, strconv.FormatBool(fallback))
	parsed, err := strconv.ParseBool(raw)
	if err != nil {
		return fallback
	}
	return parsed
}

func getIntOrDefault(key string, fallback int) int {
	raw := getOrDefault(key, strconv.Itoa(fallback))
	parsed, err := strconv.Atoi(raw)
	if err != nil {
		return fallback
	}
	return parsed
}
