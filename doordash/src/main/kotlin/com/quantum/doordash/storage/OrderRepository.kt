package com.quantum.doordash.storage

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.quantum.doordash.domain.Order
import com.quantum.doordash.domain.RiskDecision
import com.quantum.doordash.domain.RuleVersion
import org.jooq.DSLContext
import org.jooq.impl.DSL

class OrderRepository(private val dsl: DSLContext) {
    private val mapper = jacksonObjectMapper()

    fun saveOrder(order: Order) {
        dsl.execute(
            """
            INSERT INTO doordash.orders (order_id, account_id, symbol, side, quantity, order_type, limit_price, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT (order_id) DO UPDATE SET status = EXCLUDED.status
            """.trimIndent(),
            order.orderId,
            order.accountId,
            order.symbol,
            order.side,
            order.quantity,
            order.orderType,
            order.limitPrice,
            order.status,
        )
    }

    fun getOrder(orderId: String): Order? {
        val row = dsl.fetchOne(
            """
            SELECT order_id, account_id, symbol, side, quantity, order_type, limit_price, status
            FROM doordash.orders
            WHERE order_id = ?
            """.trimIndent(),
            orderId,
        ) ?: return null

        return Order(
            orderId = row.get("order_id", String::class.java),
            accountId = row.get("account_id", String::class.java),
            symbol = row.get("symbol", String::class.java),
            side = row.get("side", String::class.java),
            quantity = row.get("quantity", Double::class.java),
            orderType = row.get("order_type", String::class.java),
            limitPrice = row.get("limit_price", Double::class.java),
            status = row.get("status", String::class.java),
        )
    }

    fun listOrders(accountId: String, limit: Int = 100): List<Order> {
        return dsl.fetch(
            """
            SELECT order_id, account_id, symbol, side, quantity, order_type, limit_price, status
            FROM doordash.orders
            WHERE account_id = ?
            ORDER BY created_at DESC
            LIMIT ?
            """.trimIndent(),
            accountId,
            limit,
        ).map { row ->
            Order(
                orderId = row.get("order_id", String::class.java),
                accountId = row.get("account_id", String::class.java),
                symbol = row.get("symbol", String::class.java),
                side = row.get("side", String::class.java),
                quantity = row.get("quantity", Double::class.java),
                orderType = row.get("order_type", String::class.java),
                limitPrice = row.get("limit_price", Double::class.java),
                status = row.get("status", String::class.java),
            )
        }
    }

    fun saveRiskDecision(decision: RiskDecision) {
        dsl.execute(
            """
            INSERT INTO doordash.risk_decisions (decision_id, order_id, verdict, reasons)
            VALUES (?, ?, ?, ?::jsonb)
            ON CONFLICT (decision_id) DO NOTHING
            """.trimIndent(),
            decision.decisionId,
            decision.orderId,
            decision.verdict,
            mapper.writeValueAsString(decision.reasons),
        )
    }

    fun upsertRule(rule: RuleVersion) {
        dsl.execute(
            """
            INSERT INTO doordash.rule_versions (rule_id, version, drl, enabled)
            VALUES (?, ?, ?, ?)
            ON CONFLICT (rule_id, version) DO UPDATE
            SET drl = EXCLUDED.drl, enabled = EXCLUDED.enabled, updated_at = NOW()
            """.trimIndent(),
            rule.ruleId,
            rule.version,
            rule.drl,
            rule.enabled,
        )
    }

    fun listRules(): List<RuleVersion> {
        return dsl.fetch(
            """
            SELECT rule_id, version, drl, enabled
            FROM doordash.rule_versions
            ORDER BY updated_at DESC
            """.trimIndent(),
        ).map { row ->
            RuleVersion(
                ruleId = row.get("rule_id", String::class.java),
                version = row.get("version", String::class.java),
                drl = row.get("drl", String::class.java),
                enabled = row.get("enabled", Boolean::class.java),
            )
        }
    }
}

fun newDsl(dbUrl: String, dbUser: String, dbPassword: String): DSLContext {
    val connection = java.sql.DriverManager.getConnection(dbUrl, dbUser, dbPassword)
    return DSL.using(connection)
}
