package com.quantum.doordash.risk

import com.quantum.doordash.domain.RiskDecision
import com.quantum.doordash.domain.RiskFact
import java.util.UUID
import org.kie.api.KieServices

class RuleEngine {
    fun evaluate(orderId: String, fact: RiskFact): RiskDecision {
        val kieServices = KieServices.Factory.get()
        val classPathContainer = kieServices.kieClasspathContainer
        val session = classPathContainer.newKieSession()
        val reasons = mutableListOf<String>()
        session.setGlobal("reasons", reasons)
        session.insert(fact)
        session.fireAllRules()
        session.dispose()

        val verdict = if (reasons.isEmpty()) "APPROVED" else "REJECTED"
        return RiskDecision(
            decisionId = UUID.randomUUID().toString(),
            orderId = orderId,
            verdict = verdict,
            reasons = reasons,
        )
    }
}
