package config

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"
	"time"
)

func applyExternalConfig(cfg Config) Config {
	result := cfg

	if cfg.ConfigFromConsul {
		consulData, err := fetchConsulConfig(cfg)
		if err != nil {
			log.Printf("consul config fetch failed: %v", err)
		} else {
			mergeConfigMap(&result, consulData)
		}
	}

	if cfg.SecretsFromVault {
		secretData, err := fetchVaultSecrets(cfg)
		if err != nil {
			log.Printf("vault secret fetch failed: %v", err)
		} else {
			if value := asString(secretData[cfg.VaultAPIKeyField]); value != "" {
				result.APIKey = value
			}
		}
	}

	return result
}

func fetchConsulConfig(cfg Config) (map[string]any, error) {
	keyPath := strings.TrimLeft(cfg.ConsulKVPath, "/")
	url := fmt.Sprintf("%s/v1/kv/%s?raw", strings.TrimRight(cfg.ConsulHTTPAddr, "/"), keyPath)

	client := &http.Client{Timeout: 5 * time.Second}
	resp, err := client.Get(url)
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

func fetchVaultSecrets(cfg Config) (map[string]any, error) {
	path := strings.TrimLeft(cfg.VaultSecretPath, "/")
	url := fmt.Sprintf("%s/v1/%s/data/%s", strings.TrimRight(cfg.VaultAddr, "/"), cfg.VaultKVMount, path)

	client := &http.Client{Timeout: 5 * time.Second}
	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("X-Vault-Token", cfg.VaultToken)

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

func mergeConfigMap(cfg *Config, payload map[string]any) {
	if value := asString(payload["http_addr"]); value != "" {
		cfg.HTTPAddr = value
	}
	if value := asString(payload["database_url"]); value != "" {
		cfg.DatabaseURL = value
	}
	if value := asString(payload["schema"]); value != "" {
		cfg.Schema = value
	}
	if value := asString(payload["migrations_path"]); value != "" {
		cfg.MigrationsPath = value
	}
	if value := asString(payload["redis_url"]); value != "" {
		cfg.RedisURL = value
	}
	if value := asString(payload["redpanda_brokers"]); value != "" {
		cfg.RedpandaBrokers = value
	}
	if value := asString(payload["redpanda_tick_topic"]); value != "" {
		cfg.RedpandaTickTopic = value
	}
	if value := asString(payload["temporal_address"]); value != "" {
		cfg.TemporalAddress = value
	}
	if value := asString(payload["temporal_namespace"]); value != "" {
		cfg.TemporalNamespace = value
	}
	if value := asString(payload["task_queue"]); value != "" {
		cfg.TaskQueue = value
	}
	if value := asString(payload["api_key"]); value != "" {
		cfg.APIKey = value
	}
	if value := asString(payload["openapi_spec_path"]); value != "" {
		cfg.OpenAPISpecPath = value
	}
}

func asString(value any) string {
	str, _ := value.(string)
	return str
}
