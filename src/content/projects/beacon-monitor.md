---
title: Beacon Monitor
tagline: Lightweight uptime and status-page monitoring.
description: A self-hostable monitor that checks HTTP, TCP and cron jobs from multiple regions and publishes a clean public status page.
year: 2025
status: In progress
role: Author · Maintainer
category: Open source
tags: [Monitoring, Open source, SRE]
stack: [Go, PostgreSQL, HTMX, Docker, Fly.io]
accent: '#7c83db'
pattern: bars
repo: '#'
order: 8
metrics:
  - { value: '30s', label: 'check interval' }
  - { value: '5', label: 'probe regions' }
  - { value: '1', label: 'binary to deploy' }
---

> Placeholder content: demo project.

## Overview

Beacon Monitor watches your endpoints and background jobs, alerts the right people when something breaks and keeps customers informed with a public status page.

## Approach

- Single Go binary with an embedded web UI.
- Multi-region probes to avoid false positives.
- Alerts via email, Slack and webhooks with escalation rules.

## Outcome

Simple, dependable monitoring that a small team can run in minutes.
