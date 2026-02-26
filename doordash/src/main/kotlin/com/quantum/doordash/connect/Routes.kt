package com.quantum.doordash.connect

import com.quantum.doordash.adapters.MockBroker
import com.quantum.doordash.domain.Order
import com.quantum.doordash.domain.PlaceOrderRequest
import com.quantum.doordash.domain.RiskFact
import com.quantum.doordash.domain.RuleVersion
import com.quantum.doordash.events.RedisPublisher
import com.quantum.doordash.risk.RuleEngine
import com.quantum.doordash.storage.OrderRepository
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.Application
import io.ktor.server.application.call
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import java.util.UUID

fun Application.installRoutes(
    repository: OrderRepository,
    broker: MockBroker,
    riskEngine: RuleEngine,
    publisher: RedisPublisher,
    apiKey: String,
) {
    fun isAuthorized(serviceApiKey: String?, providedApiKey: String?): Boolean {
        if (serviceApiKey.isNullOrBlank()) {
            return true
        }
        return serviceApiKey == providedApiKey
    }

    routing {
        get("/healthz") {
            call.respond(mapOf("status" to "ok", "service" to "doordash"))
        }

        get("/readyz") {
            call.respond(mapOf("status" to "ready"))
        }

        get("/metrics") {
            call.respondText("# metrics scaffold\n")
        }

        post("/rpc/quant.doordash.v1.OrderService/PlaceOrder") {
            val providedApiKey = call.request.headers["x-api-key"] ?: call.request.headers["x-service-key"]
            if (!isAuthorized(apiKey, providedApiKey)) {
                call.respond(HttpStatusCode.Unauthorized, mapOf("error" to "unauthorized"))
                return@post
            }
            val request = call.receive<PlaceOrderRequest>()
            val orderId = UUID.randomUUID().toString()
            val fact = RiskFact(
                accountId = request.accountId,
                symbol = request.symbol,
                side = request.side,
                quantity = request.quantity,
                notional = (request.limitPrice ?: 100.0) * request.quantity,
            )
            val decision = riskEngine.evaluate(orderId, fact)
            repository.saveRiskDecision(decision)
            publisher.publishRisk(orderId, decision.verdict)
            if (decision.verdict != "APPROVED") {
                call.respond(HttpStatusCode.Forbidden, mapOf("order_id" to orderId, "status" to "REJECTED", "reasons" to decision.reasons))
                return@post
            }

            val order = Order(
                orderId = orderId,
                accountId = request.accountId,
                symbol = request.symbol,
                side = request.side,
                quantity = request.quantity,
                orderType = request.orderType,
                limitPrice = request.limitPrice,
                status = broker.place(
                    Order(
                        orderId = orderId,
                        accountId = request.accountId,
                        symbol = request.symbol,
                        side = request.side,
                        quantity = request.quantity,
                        orderType = request.orderType,
                        limitPrice = request.limitPrice,
                        status = "NEW",
                    )
                ),
            )
            repository.saveOrder(order)
            publisher.publishOrder(orderId, order.status)
            call.respond(mapOf("order_id" to orderId, "status" to order.status))
        }

        get("/rpc/quant.doordash.v1.OrderService/GetOrder") {
            val providedApiKey = call.request.headers["x-api-key"] ?: call.request.headers["x-service-key"]
            if (!isAuthorized(apiKey, providedApiKey)) {
                call.respond(HttpStatusCode.Unauthorized, mapOf("error" to "unauthorized"))
                return@get
            }
            val orderId = call.request.queryParameters["order_id"] ?: ""
            val order = repository.getOrder(orderId)
            if (order == null) {
                call.respond(HttpStatusCode.NotFound, mapOf("error" to "not_found"))
            } else {
                call.respond(order)
            }
        }

        post("/rpc/quant.doordash.v1.RiskService/UpsertRule") {
            val providedApiKey = call.request.headers["x-api-key"] ?: call.request.headers["x-service-key"]
            if (!isAuthorized(apiKey, providedApiKey)) {
                call.respond(HttpStatusCode.Unauthorized, mapOf("error" to "unauthorized"))
                return@post
            }
            val rule = call.receive<RuleVersion>()
            repository.upsertRule(rule)
            call.respond(mapOf("rule_id" to rule.ruleId, "version" to rule.version))
        }

        get("/rpc/quant.doordash.v1.RiskService/ListRules") {
            val providedApiKey = call.request.headers["x-api-key"] ?: call.request.headers["x-service-key"]
            if (!isAuthorized(apiKey, providedApiKey)) {
                call.respond(HttpStatusCode.Unauthorized, mapOf("error" to "unauthorized"))
                return@get
            }
            call.respond(mapOf("rules" to repository.listRules()))
        }
    }
}
