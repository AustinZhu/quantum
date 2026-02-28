package conf

func defaultMap() map[string]any {
	return map[string]any{
		"server": map[string]any{
			"http_addr":         ":8081",
			"mode":              "development",
			"pprof_enabled":     true,
			"api_key":           "",
			"openapi_spec_path": "/app/openapi/quantum.openapi.json",
			"auth": map[string]any{
				"enabled":            false,
				"casdoor_issuer_url": "",
				"casdoor_audience":   "",
				"casbin_model_path":  "",
				"casbin_policy_path": "",
			},
		},
		"storage": map[string]any{
			"postgres_url":    "postgres://quantum:quantum@localhost:5432/quantum?sslmode=disable",
			"postgres_schema": "datafeed",
			"migrations_path": "./db/migrations",
		},
		"infra": map[string]any{
			"redis_url": "redis://localhost:6379/0",
			"broker": map[string]any{
				"brokers":    "",
				"tick_topic": "datafeed.ticks",
			},
			"temporal": map[string]any{
				"address":    "temporal:7233",
				"namespace":  "default",
				"task_queue": "datafeed-jobs",
			},
		},
		"worker": map[string]any{
			"broker_group_id":      "datafeed-worker",
			"broker_command_topic": "datafeed.command.ingest_ticks.v1",
			"broker_event_topic":   "datafeed.event.ticks_ingested.v1",
		},
		"jobs": map[string]any{
			"sync_symbols_interval_sec":       300,
			"outbox_recovery_interval_sec":    2,
			"projection_rebuild_interval_sec": 900,
			"market_backfill_interval_sec":    3600,
		},
		"integration": map[string]any{
			"okx": map[string]any{
				"rest_base_url":    "https://www.okx.com",
				"ws_public_url":    "wss://ws.okx.com:8443/ws/v5/public",
				"ws_business_url":  "wss://ws.okx.com:8443/ws/v5/business",
				"inst_types":       "SPOT",
				"http_timeout_sec": 10,
				"symbol_cache_sec": 30,
			},
		},
		"config": map[string]any{
			"consul": map[string]any{
				"enabled":   false,
				"http_addr": "http://localhost:8500",
				"kv_path":   "quantum/datafeed/config",
			},
			"vault": map[string]any{
				"enabled":       false,
				"addr":          "http://localhost:8200",
				"token":         "",
				"kv_mount":      "secret",
				"secret_path":   "quantum/datafeed",
				"api_key_field": "api_key",
			},
		},
	}
}
