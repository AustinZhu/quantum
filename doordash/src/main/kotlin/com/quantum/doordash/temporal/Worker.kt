package com.quantum.doordash.temporal

import kotlin.concurrent.thread

class Worker {
    fun run() {
        thread(isDaemon = false, name = "doordash-worker") {
            while (true) {
                Thread.sleep(5000)
            }
        }.join()
    }
}
