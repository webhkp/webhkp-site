---
title: Stratus Ledger
tagline: An event-sourced payments ledger for a fintech client.
description: A double-entry ledger handling millions of transactions a day with full auditability and exactly-once processing.
year: 2025
status: Live
role: Consulting architect
category: Client work
tags: [Fintech, Event sourcing, High throughput]
stack: [Java, Spring Boot, Kafka, PostgreSQL, AWS, Kubernetes]
accent: '#3fa7a0'
pattern: bars
order: 4
metrics:
  - { value: '3M+', label: 'transactions / day' }
  - { value: '0', label: 'reconciliation gaps' }
  - { value: '-38%', label: 'infra cost' }
---

> Demo content: placeholder client case study.

## Overview

A fintech client outgrew a ledger built on mutable balance rows. I designed and helped build an event-sourced, double-entry ledger that treats every money movement as an immutable fact.

## Approach

- Event-sourced aggregates with Kafka as the durable log.
- Idempotent consumers and transactional outbox for exactly-once effects.
- Read models optimized separately for balances, statements and reporting.
- Load-tested to 5× peak before cut-over, with a parallel-run reconciliation phase.

## Outcome

A ledger that auditors love, product teams can extend safely and finance can reconcile to the cent.
