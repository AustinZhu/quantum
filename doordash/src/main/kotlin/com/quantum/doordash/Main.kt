package com.quantum.doordash

import com.quantum.doordash.app.AppRuntime

fun main(args: Array<String>) {
    val runtime = AppRuntime.build()
    if (args.firstOrNull() == "worker") {
        runtime.runWorker()
        return
    }
    runtime.runApi()
}
