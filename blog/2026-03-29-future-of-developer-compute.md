---
slug: future-of-developer-compute
title: The Future of Developer Compute
tags: [github, github-actions, ai, dev]
image: https://images.ctfassets.net/8aevphvgewt8/KiQBgcnMQg6dALaS6erGk/f8d49c0cc5a461b903e52d08c3c3b8f6/actions-hero.webp
description: "Your laptop is about to stop being where work happens. As agents multiply, local compute becomes the bottleneck - and cloud-native agent compute is the answer."
authors: [austen]
---

Your laptop is about to stop being where work happens. As we get more competent with agents, local compute becomes the bottleneck - and the industry is converging on a new kind of cloud-native compute built specifically for autonomous agents.

<!--truncate-->

*This is part 6 of a series on AI-native CI/CD. See also: [AI Changed the Automation Calculus](/blog/ai-changed-the-automation-calculus), [Actions Is the Platform](/blog/actions-is-the-platform), [Agentic Workflows on GitHub Events](/blog/agentic-workflows-on-github-events), [Prompt Design for Headless Agents](/blog/prompt-design-for-headless-agents), and [The Most AI-Friendly CI](/blog/most-ai-friendly-ci).*


## The Local Machine Bottleneck

Right now, you're running one agent in your IDE. Maybe a second one on a coding task. That's about all your local machine can handle.

But where this is going is **many agents**, working in parallel, each on a different task. And that breaks the local machine model:

- Each agent needs its **own isolated workspace** - you can't have 5 agents editing the same files
- Different agents need **different permissions and boundaries** - a security scanning agent shouldn't have the same access as a deployment agent
- **Performance** becomes a real constraint - local CPU, RAM, disk I/O can't scale to 10 concurrent agent sessions
- **Security** - agents running LLM-generated code on your local machine is a risk surface you don't want to manage

> Right now, you fire up Copilot in VS Code and it works great. But what happens when you want to spin up 5 agents, each working on a different issue, each in its own isolated environment, each with scoped permissions? Your laptop will struggle with that.

## Why Not Just Use CI Runners?

Fair question. Actions runners are purpose-built for **async CI/CD jobs** - fire-and-forget pipelines that start clean and end clean. That's perfect for builds and deployments. But agents need fundamentally different compute:

| Dimension | **CI/CD Runners** | **What Agents Need** |
|-----------|-------------------|---------------------|
| **Startup** | ~10s+ to provision a VM | Sub-second - agents need to respond instantly |
| **State** | Stateless - every job starts clean | Stateful - agents need to pause, hand off to humans, resume with full context |
| **Execution** | Fire-and-forget | Interactive - API-driven with human-in-the-loop handoffs |
| **Scale pattern** | Fewer, longer-running jobs | Swarms of short-lived instances (seconds to minutes) |
| **Cost model** | Per-minute metered (CI-oriented) | Optimized for short bursts - microVMs, not full VMs |

CI runners will still be the right answer for CI/CD. But agent compute is a different problem space.

## What Agent Compute Looks Like

The industry is converging on a new compute layer purpose-built for agentic workloads. The core requirements:

### 1. MicroVMs, Not Full VMs

Full VMs are overkill for an agent that needs to run for 30 seconds. MicroVM architectures (think Firecracker, CloudHypervisor) provide:
- Sub-second startup
- Strong isolation (hardware-level, not just containers)
- Dramatically lower cost per invocation
- OCI image support for custom environments

### 2. Snapshot/Resume

Agents aren't purely autonomous - they hit decision points where a human needs to review. The compute needs to support:
- Save full state (memory, disk, execution context)
- Hand off to a human for review
- Resume exactly where it left off

This is the biggest gap in current CI systems. Every CI runner is fire-and-forget. Agent compute needs to be pause-and-resume.

### 3. Scoped Permissions Per Instance

Each agent instance needs its own permission boundary:
- Agent A can read code + write PRs
- Agent B can read issues + write labels
- Agent C can deploy to staging, not production

This goes beyond repo-level GITHUB_TOKEN scoping - it's per-agent identity and access control.

### 4. Enterprise Governance

At scale, you need:
- Auditability - who spawned which agent, what did it do, what resources did it touch
- Network controls - VNET/firewall integration per agent instance
- Policy enforcement - which models can be used, which tools are allowed, cost limits per run
- Identity - tied to the developer who spawned it, not a shared service account

## The Compute Stack Is Converging

What's becoming clear is that the modern development platform needs three distinct compute layers, each purpose-built for its workload:

| Layer | Purpose | Characteristics |
|-------|---------|----------------|
| **CI/CD Compute** | Build, test, deploy | Async, stateless, fire-and-forget |
| **Development Compute** | Full dev environment | Persistent, interactive, human-driven |
| **Agent Compute** | Autonomous AI execution | Stateful, sub-second, swarm-scale, pause/resume |

GitHub already has the first two: **Actions** for CI/CD, **Codespaces** for development. The third layer - agent compute - is where GitHub and the entire industry is heading.

## The Competitive Landscape

Everyone sees this opportunity. Vercel, Docker, Deno, E2B, Daytona - all building sandbox compute for agents. The differentiator will be:

- **Platform integration** - how deeply the compute layer connects to the developer's existing workflow
- **Governance** - enterprise controls, audit trails, compliance
- **Agent-native primitives** - snapshot/resume, scoped permissions, tool allowlisting

The platforms that win will be the ones that make agent compute feel as natural as running a CI job today.

## What You Should Do Now

You don't have to wait for dedicated agent compute to start building agentic workflows. The pieces are already in place:

1. **Start with Actions** - run agents in CI today using [Copilot CLI](https://github.com/marketplace/actions/github-copilot-cli) or [GitHub Agentic Workflows](https://github.github.com/gh-aw/)
2. **Use GitHub-hosted runners** - ephemeral, isolated, zero-maintenance compute that's ready for agentic workloads
3. **Build the prompt architecture** - [design for headless execution](/blog/prompt-design-for-headless-agents) now and you'll be ready when dedicated agent compute arrives
4. **Invest in your CI/CD suites** - the stronger your test/lint/scan pipeline, the more autonomy you can safely give agents

The future of compute is converging. Actions is the foundation everything else builds on. Start there.


*This post is part of a series on AI-native CI/CD. Start from the beginning: [AI Changed the Automation Calculus](/blog/ai-changed-the-automation-calculus).*
