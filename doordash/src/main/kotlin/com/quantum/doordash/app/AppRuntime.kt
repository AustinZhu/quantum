package com.quantum.doordash.app

import com.quantum.doordash.adapters.MockBroker
import com.quantum.doordash.config.loadConfig
import com.quantum.doordash.connect.installRoutes
import com.quantum.doordash.events.RedisPublisher
import com.quantum.doordash.risk.RuleEngine
import com.quantum.doordash.storage.OrderRepository
import com.quantum.doordash.storage.newDsl
import com.quantum.doordash.temporal.Worker
import org.flywaydb.core.Flyway
import io.ktor.serialization.jackson.jackson
import io.ktor.server.application.install
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation

class AppRuntime private constructor(
    private val repository: OrderRepository,
    private val broker: MockBroker,
    private val ruleEngine: RuleEngine,
    private val publisher: RedisPublisher,
    private val config: com.quantum.doordash.config.AppConfig,
) {
    fun runApi() {
        embeddedServer(Netty, port = config.httpPort, host = "0.0.0.0") {
            install(ContentNegotiation) { jackson() }
            installRoutes(repository, broker, ruleEngine, publisher, config.apiKey)
        }.start(wait = true)
    }

    fun runWorker() {
        Worker().run()
    }

    companion object {
        fun build(): AppRuntime {
            val config = loadConfig()
            Flyway.configure()
                .dataSource(config.dbUrl, config.dbUser, config.dbPassword)
                .schemas(config.dbSchema)
                .load()
                .migrate()
            val dsl = newDsl(config.dbUrl, config.dbUser, config.dbPassword)
            val repository = OrderRepository(dsl)
            val broker = MockBroker()
            val ruleEngine = RuleEngine()
            val publisher = RedisPublisher(config.redisUrl)
            return AppRuntime(repository, broker, ruleEngine, publisher, config)
        }
    }
}
