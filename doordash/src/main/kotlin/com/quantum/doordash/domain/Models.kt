package com.quantum.doordash.domain

data class PlaceOrderRequest(
    val accountId: String,
    val symbol: String,
    val side: String,
    val quantity: Double,
    val orderType: String,
    val limitPrice: Double?,
)

data class Order(
    val orderId: String,
    val accountId: String,
    val symbol: String,
    val side: String,
    val quantity: Double,
    val orderType: String,
    val limitPrice: Double?,
    val status: String,
)

data class RiskFact(
    val accountId: String,
    val symbol: String,
    val side: String,
    val quantity: Double,
    val notional: Double,
)

data class RiskDecision(
    val decisionId: String,
    val orderId: String,
    val verdict: String,
    val reasons: List<String>,
)

data class RuleVersion(
    val ruleId: String,
    val version: String,
    val drl: String,
    val enabled: Boolean,
)
