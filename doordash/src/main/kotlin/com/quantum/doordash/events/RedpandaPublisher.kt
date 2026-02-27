package com.quantum.doordash.events

import org.apache.kafka.clients.producer.KafkaProducer
import org.apache.kafka.clients.producer.ProducerConfig
import org.apache.kafka.clients.producer.ProducerRecord
import org.apache.kafka.common.serialization.StringSerializer

class RedpandaPublisher(
    brokers: String,
    private val orderTopic: String,
    private val riskTopic: String,
) {
    private val producer: KafkaProducer<String, String>? = if (brokers.isBlank()) {
        null
    } else {
        val props = mapOf(
            ProducerConfig.BOOTSTRAP_SERVERS_CONFIG to brokers,
            ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG to StringSerializer::class.java.name,
            ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG to StringSerializer::class.java.name,
            ProducerConfig.ACKS_CONFIG to "0",
            ProducerConfig.CLIENT_ID_CONFIG to "doordash",
        )
        KafkaProducer<String, String>(props)
    }

    fun publishOrder(orderId: String, status: String) {
        val value = "{\"order_id\":\"$orderId\",\"status\":\"$status\"}"
        publish(orderTopic, orderId, value)
    }

    fun publishRisk(orderId: String, verdict: String) {
        val value = "{\"order_id\":\"$orderId\",\"verdict\":\"$verdict\"}"
        publish(riskTopic, orderId, value)
    }

    private fun publish(topic: String, key: String, value: String) {
        val p = producer ?: return
        try {
            p.send(ProducerRecord(topic, key, value))
        } catch (_: Exception) {
            return
        }
    }

    fun close() {
        producer?.close()
    }
}
