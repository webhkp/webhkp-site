---
title: Lumen Ops
tagline: An open-source observability starter kit.
description: One Helm chart for metrics, logs and traces, with opinionated dashboards and alerts that work on day one.
year: 2024
status: Archived
role: Author · Maintainer
category: Open source
tags: [Observability, Helm, Open source]
stack: [Prometheus, Grafana, Loki, Tempo, OpenTelemetry, Helm]
accent: '#ffd23f'
pattern: dots
repo: '#'
order: 6
metrics:
  - { value: '1', label: 'helm install' }
  - { value: '40+', label: 'ready dashboards' }
  - { value: '25', label: 'alert rules' }
---

> Demo content: replace with a real open-source project.

## Overview

Setting up observability from scratch eats weeks. Lumen Ops packages a proven Prometheus, Grafana, Loki and Tempo setup into a single chart with sensible defaults.

## Approach

- OpenTelemetry Collector as the single ingestion point.
- Pre-built dashboards for Kubernetes, JVM, Node.js and PostgreSQL workloads.
- SLO-based alerting rules instead of noisy threshold alerts.

## Outcome

Teams go from zero to useful dashboards and alerts in an afternoon.
