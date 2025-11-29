---
slug: the-future-of-sdlc-automation
title: The Future of SDLC Automation
tags: [github, github-actions, ai, dev]
image: https://images.ctfassets.net/8aevphvgewt8/KiQBgcnMQg6dALaS6erGk/f8d49c0cc5a461b903e52d08c3c3b8f6/actions-hero.webp
description: How to use AI to enhance your development workflows
---

Discussions around AI frequently revolve around this end goal of automation. Where AI is an autonomous software engineer, a note taker, or even your personal chauffeur.

In reality most people are using AI as a tool to improve aspects of our workflows rather than building full blown automated solutions.

<!--truncate-->

* AI tooling can help us **build** traditional automations **faster**. Writing scripts has never been easier with the help of AI powered development tools.  
* Developers can incorporate AI directly into their software to perform **inference.** This unlocks new use cases by giving us probabilistic functions instead of just deterministic ones.  
* An **Agent** equipped with tools can act as a probabilistic runtime **loop** for any task.

All of these automations need to run somewhere, and many of them related to software will live on a CI/CD platform.

## CI/CD History

The advancements in CI solutions over the last couple decades didn’t just make developers more efficient but they also perfectly support AI developer tools.

### The First Wave (2007)

Tools like **Jenkins** introduced CI servers, solving the problem of manual builds but eventually leading to "maintenance hell" due to the manual creation and management of hundreds of jobs.

It’s critical that AI automation happens in a safe and isolated environment.

### The Second Wave (2013–2019)

Platforms like **TravisCI** and eventually **GitLab CI** popularized **"Pipeline-as-Code."** This allowed developers to define pipelines in code repositories. While GitLab improved reusability with templates, pipelines still often required writing repetitive boilerplate code.

AI needs a language to describe structured pipelines.

### The Third Wave (Late 2019+)

**GitHub Actions** sets itself apart by moving beyond just defining pipelines in code. The "Actions" themselves serve as **modular, reusable building blocks**. Actions also made CI more **event-driven** by exposing more events to trigger these automations.

AI improves with lots of training data and it can leverage modular reusable blocks well.

### Why GitHub Actions?

With this modular reusable building blocks story you can now create robust automations quicker than ever before.

GitHub’s community is massive. It’s the home for open source. The Actions marketplace will only continue to grow with new and improved building blocks. AI will continue to leverage these building blocks and there will be a large amount of training data available.

GitHub has the infrastructure to scale with the backing of Microsoft Azure. They give away enormous amounts of compute for free to the open source community.

## What does the future of automation look like?

AI developer tools have accelerated development, allowing us to build automations we never previously had time for. With Copilot you can asynchronously vibe script just about any automation task with great accuracy and small time investment.

### What is “hard” to automate?

We will eventually hit a wall with automation. A limit on what we can script with traditional methods because we cannot "grep ambiguity".

* **The Cost of Determinism:** The old way of automation required predicting every possible failure state. It starts to take more time writing handling for our scripts than writing the scripts themselves.  
* **The Unknowns:** Those tasks left over require intelligence or human intervention. AI allows us to finally handle these "unknown unknowns".

## AI Unlocks new automation capabilities

The shift from traditional script automation to AI inference is moving from deterministic execution (if X, then Y) to probabilistic reasoning (X is 99% likely to cause Y). The shift makes automations possible that previously required human intuition or were simply too complex to script.

### Level 1: The LLM as a Function

Using basic Inference allows the user to implement the most basic version of LLMs in CI. This is great for things like:

* Instead of a regex to validate a PR title, use a model to ask "Does this PR title adhere to X?"  
* Validating a PR description or commit message  
* Choosing the label for an issue  
* Generating release notes  
* Summarizing content  
* Mock data generation

### Level 2: Agentic

We are entering a world where AI performs tasks using tools. Unlike simple inference, agents are multi-turn and loop: they try, fail, read the error, correct, and try again. The AI isn't just chatting; it is running the terminal, fetching webpages, and reading or writing files.

#### Agentic Tools

Agents typically get their tooling through the Model Context Protocol. This is the USB-C for Agents.

GitHub Actions is ready for this agentic world:

* GitHub’s MCP Server has actions tools  
* The GH CLI is easy for AI to use  
* GitHub has an enormous amount of APIs. REST, GraphQL

#### How do you run Agents in GitHub Actions?

The GitHub CLI is a great tool for AI use, and the Copilot CLI allows us to programmatically invoke GitHub Copilot’s agent mode directly from a shell environment. This means you can call the Copilot CLI from within GitHub Actions. This will act as our runtime that can be triggered off of just about anything that happens in GitHub.

## Why run Agents in GitHub Actions?

Running autonomous agents on a developer's machine is dangerous; we must consider the worst-case scenario where an agent injects malicious code, steals secrets, or deletes assets. We need to isolate the agent.

GitHub Actions is the perfect runtime for this because:

* **Ephemeral & Secure:** The environment is 100% ephemeral and secure by default, using OIDC tokens that are short-lived.  
* **Human in the Loop:** To solve the problem of agents hallucinating, we can use GitHub Actions "Environments" and "Approvals". We can treat an AI Agent like a junior developer: it can do the work, but it cannot merge to production without a human clicking "Approve" in the interface.  
* **Deep Context & Integration:** The event context contains tons of useful structured information for agents.

We also need to consider the scalability and maintainability of these agents as they become more complex and integral to our development workflows.

