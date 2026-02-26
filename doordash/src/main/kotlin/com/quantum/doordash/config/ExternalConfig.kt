package com.quantum.doordash.config

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration

private val mapper = jacksonObjectMapper()
private val httpClient: HttpClient = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()

fun applyExternalConfig(config: AppConfig): AppConfig {
    var resolved = config

    if (config.configFromConsul) {
        try {
            val payload = fetchConsulConfig(config)
            if (payload != null) {
                resolved = resolved.copy(
                    httpPort = payload["http_port"]?.toString()?.toIntOrNull() ?: resolved.httpPort,
                    dbUrl = payload["db_url"]?.toString() ?: resolved.dbUrl,
                    dbUser = payload["db_user"]?.toString() ?: resolved.dbUser,
                    dbPassword = payload["db_password"]?.toString() ?: resolved.dbPassword,
                    dbSchema = payload["db_schema"]?.toString() ?: resolved.dbSchema,
                    redisUrl = payload["redis_url"]?.toString() ?: resolved.redisUrl,
                    temporalAddress = payload["temporal_address"]?.toString() ?: resolved.temporalAddress,
                    temporalNamespace = payload["temporal_namespace"]?.toString() ?: resolved.temporalNamespace,
                    taskQueue = payload["task_queue"]?.toString() ?: resolved.taskQueue,
                    apiKey = payload["api_key"]?.toString() ?: resolved.apiKey,
                )
            }
        } catch (exc: Exception) {
            println("consul config fetch failed: ${exc.message}")
        }
    }

    if (config.secretsFromVault) {
        try {
            val secretData = fetchVaultSecret(config)
            val apiKey = secretData?.get(config.vaultApiKeyField)?.asText()
            if (!apiKey.isNullOrBlank()) {
                resolved = resolved.copy(apiKey = apiKey)
            }
        } catch (exc: Exception) {
            println("vault secret fetch failed: ${exc.message}")
        }
    }

    return resolved
}

private fun fetchConsulConfig(config: AppConfig): Map<String, Any?>? {
    val keyPath = config.consulKvPath.trimStart('/')
    val url = "${config.consulHttpAddr.trimEnd('/')}/v1/kv/$keyPath?raw"

    val request = HttpRequest.newBuilder()
        .uri(URI.create(url))
        .timeout(Duration.ofSeconds(5))
        .GET()
        .build()

    val response = httpClient.send(request, HttpResponse.BodyHandlers.ofString())
    if (response.statusCode() == 404) {
        return null
    }
    if (response.statusCode() >= 400) {
        throw RuntimeException("consul status ${response.statusCode()}: ${response.body()}")
    }
    return mapper.readValue(response.body(), Map::class.java) as Map<String, Any?>
}

private fun fetchVaultSecret(config: AppConfig): com.fasterxml.jackson.databind.JsonNode? {
    val path = config.vaultSecretPath.trimStart('/')
    val url = "${config.vaultAddr.trimEnd('/')}/v1/${config.vaultKvMount}/data/$path"

    val request = HttpRequest.newBuilder()
        .uri(URI.create(url))
        .header("X-Vault-Token", config.vaultToken)
        .timeout(Duration.ofSeconds(5))
        .GET()
        .build()

    val response = httpClient.send(request, HttpResponse.BodyHandlers.ofString())
    if (response.statusCode() == 404) {
        return null
    }
    if (response.statusCode() >= 400) {
        throw RuntimeException("vault status ${response.statusCode()}: ${response.body()}")
    }

    val root = mapper.readTree(response.body())
    return root.path("data").path("data")
}
