---
title: Orbit Platform
tagline: An internal developer platform on Kubernetes.
description: Golden-path templates, GitOps delivery and self-service environments that took a 60-engineer org from ticket-driven ops to self-service.
year: 2024
status: Live
role: Platform engineering lead (consulting)
category: Client work
tags: [Platform engineering, GitOps, Kubernetes]
stack: [Kubernetes, Argo CD, Terraform, Backstage, Go, AWS]
accent: '#5b8def'
pattern: rings
order: 5
metrics:
  - { value: '15 min', label: 'new service to prod' }
  - { value: '10×', label: 'deploy frequency' }
  - { value: '60', label: 'engineers onboarded' }
---

> Demo content: placeholder client case study.

## Overview

Engineering teams were waiting days for infrastructure tickets. Orbit gives them a paved road: pick a template, get a repo, pipelines, environments and dashboards wired up automatically.

## Approach

- Multi-tenant EKS clusters with namespaces, quotas and network policies per team.
- Argo CD app-of-apps for GitOps delivery across environments.
- Backstage portal with software templates written in Go and Terraform.
- Policy as code to enforce security baselines without blocking teams.

## Outcome

New services reach production in about 15 minutes, and the platform team spends its time improving the road instead of answering tickets.
