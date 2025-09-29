---
slug: github-actions-ai
title: AI Agents in GitHub Actions
tags: [github, github-actions, ai, dev]
image: https://images.ctfassets.net/8aevphvgewt8/KiQBgcnMQg6dALaS6erGk/f8d49c0cc5a461b903e52d08c3c3b8f6/actions-hero.webp
description: Learn how to use GitHub Actions AI to automate workflows, generate code, and enhance your development process with AI-powered tools.
onUntruncatedBlogPosts: ignore
---

I've been experimenting using AI coding agents in GitHub Actions to automate workflows, generate code, and enhance my development process.

<!--truncate-->

All the major AI companies now have agents as CLI tools:

* [Gemini CLI](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)
* [Claude Code](https://www.anthropic.com/claude-code)
* [OpenAI Codex](https://openai.com/codex/)

And of course, [GitHub Copilot](https://github.blog/news-insights/product-news/github-copilot-meet-the-new-coding-agent/) is taking the more native approach.

We need a place to run these agents, and GitHub Actions is a great fit.

There are a handful of use cases for AI agents in GitHub Actions:
* **Code Review** - Use AI to review pull requests, suggest improvements, and catch bugs.
* **Create Code** - Generate boilerplate code, documentation, or even entire functions based on your specifications.
* **Review Code** - Analyze existing code for quality, security, and performance issues.
* **Generate Tests** - Automatically create unit tests or integration tests for your code.

Check out some example workflows, issues, prs:

[Example Workflows](https://github.com/austenstone/github-actions-ai/tree/main/.github/workflows)

[GitHub Repository](https://github.com/austenstone/github-actions-ai)
