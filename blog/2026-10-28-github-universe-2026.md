---
slug: github-universe-2026
title: "GitHub Universe 2026"
tags: [github-actions, dev]
description: "A work-in-progress collection of things learned at GitHub Universe 2026 and launches worth remembering."
authors: [austen]
---

Another GitHub Universe, and this one's all about AI and GitHub Copilot. I'm starting with the Actions changes and will add things I learn and launches I like as the event goes on.

<!--truncate-->

## Four changes to Actions

### One budget for more compute

Your monthly included compute can now cover larger runners on Team and Enterprise Cloud, not just standard runners. Enterprise Cloud’s allowance is $300 per month; other plans get different amounts. This changes what the allowance covers, not how much you get. Cloud Sandbox billing starts in November and draws from the same pool. AI credits stay separate. ([Announcement](https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience/), [allowances by plan](https://docs.github.com/en/billing/reference/product-usage-included))

### Pin workflow dependencies

Workflow dependency lockfiles are generally available. Use `gh actions-lock` to generate `.github/workflows/actions.lock`, pinning direct and transitive dependencies while keeping readable references in YAML. You can adopt locking one workflow at a time, keep entries updated with Dependabot, and require lockfiles through an admin policy. Locking a dependency doesn't make it safe; review what you're locking. ([Announcement](https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available/))

### Add AWS-backed runner capacity

GitHub is rolling out AWS capacity for eligible 2- and 4-core Linux jobs without changing runner labels. Free, Pro, and Team use it automatically; Enterprise Cloud admins opt in. It is not AWS region selection or private-network access. If your workflows use network allowlists, include all published Actions IP ranges, not just Azure's. ([Announcement](https://github.blog/changelog/2026-10-28-github-actions-adds-multi-cloud-compute-to-improve-reliability/))

### Take Agentic Workflows to GA

Agentic Workflows are now generally available. This builds on the public preview with ARC and Docker-in-Docker support, improved credit forecasting, model options and routing, templates, and isolation choices. Workflows remain Markdown compiled into Actions YAML, using existing runner groups and policies. ([Announcement](https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/), [documentation](https://github.github.com/gh-aw/))

## Related, but separate

**Cloud Sandboxes** give Copilot sessions remote, resumable compute. The connected cloud experience is generally available on paid Copilot plans and is rolling out starting October 28. Start on your phone, continue on the web, and pick up the same session in the app, CLI, or VS Code. This does not make Sandboxes an Actions workflow backend. ([Announcement](https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience/))

**Copilot Automations** are another separate product, configured with prompts, tools, and triggers rather than compiled into Actions YAML. They support shared automations, automation groups, MCP tools, AI credit limits, VS Code management, and API triggers. They can also use outcomes to propose improvements to their own configuration, with your review before changes apply. Repository automations are currently limited to private and internal repositories. ([Documentation](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations), [self-improvement announcement](https://github.blog/changelog/2026-10-28-copilot-automations-now-learn-from-outcomes-and-self-improve/))

One related Actions feature is already live: [Workflow Execution Protections](https://github.blog/changelog/2026-09-17-workflow-execution-protections-in-github-actions-generally-available) controls who or what can trigger a workflow. Lockfiles control which dependency commits run.
