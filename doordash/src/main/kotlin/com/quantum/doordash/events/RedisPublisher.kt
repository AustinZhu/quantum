package com.quantum.doordash.events

import io.lettuce.core.RedisClient
import io.lettuce.core.api.StatefulRedisConnection

class RedisPublisher(redisUrl: String, private val redpandaPublisher: RedpandaPublisher? = null) {
    private val client = RedisClient.create(redisUrl)
    private val connection: StatefulRedisConnection<String, String> = client.connect()
    private val commands = connection.sync()

    fun publishOrder(orderId: String, status: String) {
        commands.publish("doordash.orders", "$orderId:$status")
        commands.xadd("doordash:order_stream", mapOf("order_id" to orderId, "status" to status))
        redpandaPublisher?.publishOrder(orderId, status)
    }

    fun publishRisk(orderId: String, verdict: String) {
        commands.publish("doordash.risk", "$orderId:$verdict")
        commands.xadd("doordash:risk_stream", mapOf("order_id" to orderId, "verdict" to verdict))
        redpandaPublisher?.publishRisk(orderId, verdict)
    }

    fun close() {
        redpandaPublisher?.close()
        connection.close()
        client.shutdown()
    }
}
