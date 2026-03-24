---
slug: ai-changed-the-automation-calculus
title: Automation is The Obvious Choice
tags: [github, github-actions, ai, dev]
image: https://images.ctfassets.net/8aevphvgewt8/KiQBgcnMQg6dALaS6erGk/f8d49c0cc5a461b903e52d08c3c3b8f6/actions-hero.webp
description: The ROI bar for automation just hit the floor. AI didn't just make coding faster, it made building automations so cheap that NOT automating is the expensive choice.
authors: [austen]
---

The ROI bar for automation just hit the floor. AI didn't just make coding faster, it made building automations so cheap that NOT automating is the expensive choice.

<!--truncate-->

*This is part 1 of a series on AI-native CI/CD. See also: [Actions Is the Platform](/blog/actions-is-the-platform), [Agentic Workflows on GitHub Events](/blog/agentic-workflows-on-github-events), [Prompt Design for Headless Agents](/blog/prompt-design-for-headless-agents), [The Most AI-Friendly CI](/blog/most-ai-friendly-ci), and [The Future of Developer Compute](/blog/future-of-developer-compute).*


## The Trap: Doing the Same Work Faster

If you're using Copilot or a coding agent today, you've probably noticed you're crushing Jira tickets in a fraction of the time. That feels great. But here's the thing: being able to write code faster doesn't mean you can ship 10x faster. The bottleneck was almost never your programming abilities or typing speed.

## Where Is Your Time Actually Going?

Writing code? Maybe 20% of your day. The rest:

- Code reviews
- Debugging CI failures
- Triaging issues
- Updating docs
- Fixing flaky tests
- Provisioning infrastructure
- Responding to alerts
- Context-switching between repos

Everyone should constantly be asking: **"What am I spending my time on, and can this be automated?"**

That's what we do. We're engineers. We solve problems and we automate.

## The Old Automation Math

Automation was always valuable, but the ROI bar was high. Building an automation had to be worth the time investment. It needed large scale and a long lifetime to justify the cost.

So most teams... didn't automate. It was easier to just do the task manually. This becomes the norm. Organizations sink into it. Manual processes calcify. "That's just how we do it."

GitHub Actions was built to change this:

- Remove as much friction as possible, making automation easy by default
- Build a DRY, reusable story that leans on open source and encourages innersource for private enterprises
- Building blocks (Actions) that are composable, traceable, and version-pinned
- Extremely easy to do most things, possible to do almost anything
- The philosophy: if automation is frictionless enough, people will actually do it

But even with Actions, there were limits. It wasn't feasible to automate every task for every repo. Some automations were too bespoke, too context-dependent, too expensive to build. There were always plenty of automations we wished existed but couldn't justify building.

## Just Automate it

We've entered a new world. **If a task can be automated, then choosing to automate it is almost always the better choice.** The cost of building automations has collapsed. AI can generate the workflow, write the action, compose the pipeline. The ROI bar that used to filter out 80% of automation ideas? It's basically on the floor.

## The Compounding Factor

This is where it gets exponential, not linear:

1. **Use AI to build "traditional" tools** like tests, linters, deployment pipelines, and monitoring
2. Those tools **continue to propel you faster**, even when the AI isn't running
3. Every automation you build runs thousands of times across dozens of repos
4. **The AI builds the automation, the automation keeps compounding**

```
AI writes automation → automation runs 1000x → saves 1000x manual effort
                       ↑
                       └── this keeps running even when AI is idle
```

Stop using AI just to write features faster. Start using AI to build the automations that make your entire team faster. That's where the real leverage is.

## The Mental Shift

The question is no longer "is this worth automating?" It almost always is now. The new questions are:

- **What should I automate first?** (highest frequency × highest toil)
- **How do I make this automation trustworthy?** (testing, guardrails, monitoring)
- **How do I scale this across my org?** (reusable workflows, templates, innersource)

AI productivity becomes exponential when you stop using it for linear speedups and start using it to build the automation infrastructure that compounds over time.


*Next up: [GitHub Actions Is the Platform](/blog/actions-is-the-platform). You'd be surprised what's already running on Actions under the hood.*
