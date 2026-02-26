package com.quantum.doordash.adapters

import com.quantum.doordash.domain.Order

class MockBroker {
    fun place(order: Order): String = "ACCEPTED"
}
