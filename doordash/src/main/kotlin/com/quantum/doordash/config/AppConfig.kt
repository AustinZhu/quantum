package com.quantum.doordash.config

data class AppConfig(
    val httpPort: Int,
    val dbUrl: String,
    val dbUser: String,
    val dbPassword: String,
    val dbSchema: String,
    val redisUrl: String,
    val temporalAddress: String,
    val temporalNamespace: String,
    val taskQueue: String,
    val apiKey: String,
    val configFromConsul: Boolean,
    val consulHttpAddr: String,
    val consulKvPath: String,
    val secretsFromVault: Boolean,
    val vaultAddr: String,
    val vaultToken: String,
    val vaultKvMount: String,
    val vaultSecretPath: String,
    val vaultApiKeyField: String,
)

fun loadConfig(): AppConfig {
    val config = AppConfig(
        httpPort = System.getenv("DOORDASH_HTTP_PORT")?.toIntOrNull() ?: 8082,
        dbUrl = System.getenv("DOORDASH_DB_URL") ?: "jdbc:postgresql://localhost:5432/quantum",
        dbUser = System.getenv("DOORDASH_DB_USER") ?: "quantum",
        dbPassword = System.getenv("DOORDASH_DB_PASSWORD") ?: "quantum",
        dbSchema = System.getenv("DOORDASH_DB_SCHEMA") ?: "doordash",
        redisUrl = System.getenv("DOORDASH_REDIS_URL") ?: "redis://localhost:6379/0",
        temporalAddress = System.getenv("DOORDASH_TEMPORAL_ADDRESS") ?: "localhost:7233",
        temporalNamespace = System.getenv("DOORDASH_TEMPORAL_NAMESPACE") ?: "default",
        taskQueue = System.getenv("DOORDASH_TASK_QUEUE") ?: "doordash-orders",
        apiKey = System.getenv("DOORDASH_API_KEY") ?: "",
        configFromConsul = (System.getenv("DOORDASH_CONFIG_FROM_CONSUL") ?: "false").toBoolean(),
        consulHttpAddr = System.getenv("DOORDASH_CONSUL_HTTP_ADDR") ?: "http://localhost:8500",
        consulKvPath = System.getenv("DOORDASH_CONSUL_KV_PATH") ?: "quantum/doordash/config",
        secretsFromVault = (System.getenv("DOORDASH_SECRETS_FROM_VAULT") ?: "false").toBoolean(),
        vaultAddr = System.getenv("DOORDASH_VAULT_ADDR") ?: "http://localhost:8200",
        vaultToken = System.getenv("DOORDASH_VAULT_TOKEN") ?: "root",
        vaultKvMount = System.getenv("DOORDASH_VAULT_KV_MOUNT") ?: "secret",
        vaultSecretPath = System.getenv("DOORDASH_VAULT_SECRET_PATH") ?: "quantum/doordash",
        vaultApiKeyField = System.getenv("DOORDASH_VAULT_API_KEY_FIELD") ?: "api_key",
    )
    return applyExternalConfig(config)
}
