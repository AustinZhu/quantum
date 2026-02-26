plugins {
    kotlin("jvm") version "2.3.10"
    application
    id("org.flywaydb.flyway") version "12.0.2"
    id("com.gradleup.shadow") version "9.3.1"
}

repositories {
    mavenCentral()
    maven("https://jitpack.io")
}

dependencies {
    implementation("io.ktor:ktor-server-core-jvm:3.4.0")
    implementation("io.ktor:ktor-server-netty-jvm:3.4.0")
    implementation("io.ktor:ktor-server-content-negotiation-jvm:3.4.0")
    implementation("io.ktor:ktor-serialization-jackson-jvm:3.4.0")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.21.1")
    implementation("io.github.ichizero:connect-ktor:0.1.9")

    implementation("org.postgresql:postgresql:42.7.10")
    implementation("org.jooq:jooq:3.20.11")
    implementation("org.flywaydb:flyway-core:12.0.2")

    implementation("org.drools:drools-core:10.1.0")
    implementation("org.drools:drools-compiler:10.1.0")
    implementation("org.kie:kie-api:10.1.0")
    implementation("org.kie:kie-ci:10.1.0")

    implementation("io.lettuce:lettuce-core:7.4.0.RELEASE")
    implementation("io.temporal:temporal-sdk:1.33.0")

    implementation("ch.qos.logback:logback-classic:1.5.32")
    testImplementation(kotlin("test"))
}

application {
    mainClass.set("com.quantum.doordash.MainKt")
}

tasks.test {
    useJUnitPlatform()
}
