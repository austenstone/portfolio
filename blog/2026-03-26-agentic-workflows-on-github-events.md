---
slug: agentic-workflows-on-github-events
title: Agentic Workflows on GitHub Events
tags: [github, github-actions, github-copilot, ai, dev]
image: https://images.ctfassets.net/8aevphvgewt8/KiQBgcnMQg6dALaS6erGk/f8d49c0cc5a461b903e52d08c3c3b8f6/actions-hero.webp
description: "Run AI agents triggered on any GitHub event like issues, PRs, schedules, and dispatches. Five approaches from simple inference to full agent frameworks: Copilot Models, Copilot Coding Agent, GitHub Agentic Workflows, Copilot CLI, and the Copilot SDK."
authors: [austen]
---

Just like you use Copilot in VS Code or the Coding Agent from an issue, you can run those same agentic workflows **triggered on GitHub events**, inside Actions. Safe, secure, and ephemeral.

<!--truncate-->

*This is part 3 of a series on AI-native CI/CD. See also: [AI Changed the Automation Calculus](/blog/ai-changed-the-automation-calculus), [Actions Is the Platform](/blog/actions-is-the-platform), [Prompt Design for Headless Agents](/blog/prompt-design-for-headless-agents), [The Most AI-Friendly CI](/blog/most-ai-friendly-ci), and [The Future of Developer Compute](/blog/future-of-developer-compute).*


There are five ways to use AI in Actions, from simple inference to full agent frameworks.

## 1. Copilot Models: Basic Inference

Before you reach for agents, sometimes all you need is a single LLM call. [Copilot Models](https://docs.github.com/en/copilot/using-github-copilot/ai-models/using-ai-models-in-your-workflows) lets you call AI models directly from a workflow step. No agent loop, no tool use, just prompt in → response out.

This is perfect for tasks that don't need autonomy:

- Validate a PR title or description against a convention
- Classify or label an issue
- Generate release notes from a diff
- Summarize a changelog
- Generate mock data for tests

### Example: Auto-Label Issues

```yaml
name: Auto-Label Issue
on:
  issues:
    types: [opened]

permissions:
  issues: write
  copilot-requests: write

jobs:
  label:
    runs-on: ubuntu-latest
    steps:
      - uses: austenstone/copilot-models@v1
        id: classify
        with:
          prompt: |
            Classify this GitHub issue into exactly one category:
            bug, feature, question, documentation

            Title: ${{ github.event.issue.title }}
            Body: ${{ github.event.issue.body }}

            Respond with ONLY the category label, nothing else.
      - run: gh issue edit ${{ github.event.issue.number }} --add-label "${{ steps.classify.outputs.response }}"
        env:
          GH_TOKEN: ${{ github.token }}
```

No agent loop. No tool calling. Just a single inference call that returns a label. Sometimes that's all you need.


## 2. Copilot Coding Agent: Assign and Walk Away

The [Copilot Coding Agent](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent) is the simplest way to get an AI agent working on your code. Assign it to an issue, and it spins up on a GitHub-hosted runner, plans the fix, writes the code, runs tests, and opens a PR, all autonomously.

You can trigger it manually from the GitHub UI, or **chain it from a workflow:**

1. A workflow event fires (e.g., a new issue is labeled `autofix`)
2. A step assigns Copilot Coding Agent to the issue
3. CCA spins up on an ephemeral GHR, plans, codes, tests, opens a PR

Fully automated chain: **event → agent → PR → review.** No human in the loop until it's time to merge.

This is the zero-config option. No prompts to write, no YAML to author. If your task maps to a well-scoped issue, CCA just handles it.


## 3. GitHub Agentic Workflows (`gh aw`): The Paved Path

[GitHub Agentic Workflows](https://github.github.com/gh-aw/) is purpose-built for repository automation, running coding agents with strong guardrails in GitHub Actions.

**Why to do it this way:**

- **Markdown-defined workflows**, write automation in markdown, not complex YAML
- **Event-triggered + scheduled** like `on: schedule: daily`, `on: issues`, `on: pull_request`, etc.
- **Multiple AI engines** including Copilot, Claude, Codex, and custom AI processors
- **Guardrails built-in:**
  - Read-only permissions by default
  - Write operations require explicit approval through sanitized "safe outputs"
  - Sandboxed execution, tool allowlisting, network isolation

### Example: Daily Issues Report

This entire automation is defined in markdown:

```markdown
on:
  schedule: daily
permissions:
  contents: read
  issues: read
  pull-requests: read
safe-outputs:
  create-issue:
    title-prefix: "[team-status] "
    labels: [report, daily-status]
    close-older-issues: true

## Daily Issues Report
Create an upbeat daily status report for the team as a GitHub issue.

## What to include
- Recent repository activity (issues, PRs, discussions, releases)
- Progress tracking and highlights
- Actionable next steps for maintainers
```

### Use Case Gallery

- **Issue & PR Management**, automated triage, labeling, project coordination
- **Continuous Documentation**, automated maintenance and consistency
- **Continuous Improvement**, daily code simplification, refactoring
- **Metrics & Analytics**, daily reports, trend analysis, workflow health
- **Quality & Testing**, CI failure diagnosis, test improvements
- **Multi-Repository**, feature sync and cross-repo tracking

This is the paved path. If you're starting with agentic repo automation, start here.


## 4. Copilot CLI in Actions: The Raw Power

Run Copilot CLI directly in your workflow steps. The same agent you use in VS Code or your terminal, but triggered on any GitHub event.

**Action:** [`austenstone/copilot-cli`](https://github.com/marketplace/actions/github-copilot-cli) (v3)

**Key capabilities:**

- `copilot-requests: write` permission, uses the default `GITHUB_TOKEN`, no PAT required
- Full autopilot mode: `autopilot: true`, `no-ask-user: true` for fully autonomous CI
- MCP server support for extending Copilot with custom tool integrations
- Model selection including Claude, GPT-5, etc.
- Session management to resume, share sessions as markdown or gists

### Example: AI PR Review on Every Pull Request

```yaml
name: 'Copilot Automation'
on: [pull_request]

permissions:
  copilot-requests: write
  pull-requests: write

jobs:
  copilot:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: austenstone/copilot-cli@v3
        with:
          prompt: |
            Review this pull request for:
            1. Code quality and best practices
            2. Security vulnerabilities
            3. Performance implications
            4. Documentation completeness
```


## 5. Copilot SDK: Full Control

If you need the raw model APIs, custom orchestration, or your own agent framework, the [Copilot SDK](https://github.blog/news-insights/company-news/build-an-agent-into-any-app-with-the-github-copilot-sdk/) gives you that. Build your own agents with the same models that power Copilot, running in Actions.

This is the power user escape hatch for teams building custom AI tooling on top of the Copilot models.


## Choosing Your Approach

| | **Copilot Models** | **Coding Agent** | **gh aw** | **Copilot CLI** | **Copilot SDK** |
|---|---|---|---|---|---|
| **Complexity** | Trivial | Zero-config | Low (markdown) | Medium (YAML + prompts) | High (code) |
| **Autonomy** | None (single call) | Full (issue → PR) | Guided (guardrails) | Full (autopilot) | You decide |
| **Guardrails** | N/A | Built-in | Built-in | You configure | You build |
| **Best for** | Classification, summarization | Well-scoped issues | Repo automation | Any CI task | Custom agent frameworks |

Start with **Copilot Models** for single inference calls. Use the **Coding Agent** when the task maps to an issue. Reach for **gh aw** for recurring repo automation. Use **Copilot CLI** when you need full CI integration with custom prompts. Drop to the **SDK** when you need complete control.


*Next up: [Prompt Design for Headless AI Agents](/blog/prompt-design-for-headless-agents), the part nobody talks about. How do you write prompts that work when there's no human at the keyboard?*
