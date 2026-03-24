---
slug: prompt-design-for-headless-agents
title: Prompt Design for Headless AI Agents
tags: [github, github-copilot, ai, dev]
image: https://images.ctfassets.net/8aevphvgewt8/KiQBgcnMQg6dALaS6erGk/f8d49c0cc5a461b903e52d08c3c3b8f6/actions-hero.webp
description: "When you take an agent out of your IDE and put it on a cron job, everything changes. Here's the prompt architecture that separates 'agents are unreliable' from '15 agents running on a schedule that just work.'"
authors: [austen]
---

When you take an agent out of your IDE and put it on a cron job or a GitHub event trigger, everything changes. This is the prompt architecture that separates "I tried agents and they were unreliable" from "I have 15 agents running on a schedule and they just work."

<!--truncate-->

*This is part 4 of a series on AI-native CI/CD. See also: [Automation is The Obvious Choice](/blog/automation-is-the-obvious-choice), [Actions Is the Platform](/blog/actions-is-the-platform), [Agentic Workflows on GitHub Events](/blog/agentic-workflows-on-github-events), [The Most AI-Friendly CI](/blog/most-ai-friendly-ci), and [The Future of Developer Compute](/blog/future-of-developer-compute).*


## The Aha Moment

> You don't have to build the engine. You just have to build the guardrails.

When you write prompts for built-in orchestrators like Copilot CLI, you're not writing a traditional "prompt." You're writing a **configuration file for an execution engine**.

These agents already have a programmatic `while` loop running under the hood: Reason → Act → Observe → Repeat. If your prompt tries to manually dictate "do this, then loop back," you'll clash with the agent's native programming.

## Interactive Agents: 5 Strategies

### 1. Stop Micromanaging the Loop

Don't tell the agent *how* to loop. Tell it *what tools it has* and *what the finish line looks like*. Let the agent's native backend handle execution cycles.

### 2. Define Strict Exit Criteria, and Enforce Them with Hooks

Autonomous agents either give up too early or loop forever. Give it an undeniable, physical checklist:

> "You may not consider this task complete until `output.md` is written to disk AND the YAML frontmatter contains the required fields."

**But prompts are suggestions. Hooks are enforcement.**

[Agent hooks](https://code.visualstudio.com/docs/copilot/customization/hooks) let you gate the agent's lifecycle with deterministic code. The `Stop` hook is the killer feature. It fires when the agent tries to stop, and you can **block it** with a script that runs a real check:

```json
{
  "hooks": {
    "Stop": [
      {
        "type": "command",
        "command": "./scripts/validate-output.sh"
      }
    ]
  }
}
```

Your script checks the actual deliverables and returns:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "Stop",
    "decision": "block",
    "reason": "output.md is missing the enterprise_slug field. Add it before finishing."
  }
}
```

The prompt says "don't stop until X is done." The hook **enforces** it. The script runs a deterministic check: does the file exist? Does it pass validation? If it fails, the agent gets a new prompt injected telling it exactly what's still missing.

**This is the bridge between non-deterministic AI and deterministic automation.**

#### All 8 Hook Lifecycle Events

| Hook | What It Does |
|------|-------------|
| `SessionStart` | Inject project context (branch, version, env vars) |
| `UserPromptSubmit` | Transform or validate user input before the agent sees it |
| `PreToolUse` | Block dangerous commands (`rm -rf`, `DROP TABLE`) before execution |
| `PostToolUse` | Auto-run linters/formatters after every file edit |
| `PreCompact` | Control context window management |
| `SubagentStart` | Gate or configure sub-agent spawning |
| `SubagentStop` | Validate sub-agent outputs |
| `Stop` | Enforce exit criteria with deterministic checks |

**Powerful patterns:**
- **`PreToolUse`**, block dangerous commands regardless of what the agent was prompted to do
- **`PostToolUse`**, auto-run linters after every file edit, inject "you have lint errors, fix them" back into the conversation
- **`SessionStart`**, inject project context so the agent starts informed

### 3. Externalize Memory to the File System

Context windows get bloated. Agents forget what step they're on. Force the agent to write state to a file (`.agent-state.md`, `sync-plan.json`). If it crashes, it reads the file to resume.

### 4. Constrain the Blast Radius

Agents are curious. If they can't find data, they start running grep across your entire workspace, wasting time and tokens.

Explicit whitelist:

> "You may ONLY use the `copilot-cli` action and the GitHub MCP tools. DO NOT use system grep or workspace-wide searches."

### 5. Establish Yield Protocols

When a tool breaks, agents hallucinate workarounds or bash the same broken command repeatedly. Define exactly when to stop:

> "If the API returns a 401, move on."


## Going Headless: What Changes When There's No Human

Taking an agent out of your IDE and putting it on a background cron job is the final boss of agentic workflows. If you just schedule your interactive prompt to run every hour, it will eventually hang, wait for input that never comes, and silently burn through your compute budget.

### 1. Do not Yield

Replace "ask the user" with "log the error and terminate."

> "Under NO circumstances should you ask for clarification. If you lack data after 2 retries, write to `logs/failed_runs.log` and terminate immediately."

### 2. Design for Idempotency

If the script runs every hour, the first task is checking: "Did I already do this?"

> "Read `notes/YYYY-MM-DD/`. If output already exists for this run, output 'previously completed' and terminate."

### 3. Pre-Authenticate Everything

No `az login --use-device-code`. No browser SSO. None of that works headlessly. Your infrastructure must inject pre-authenticated tokens or managed identities as environment variables BEFORE the agent spins up.

> "Assume all tools are pre-authenticated. If you get a 401, log 'Auth Pipeline Broken' and terminate."

### 4. Hardcode Loop Limits

In your IDE, you can Ctrl+C a rogue agent. On a server at 3 AM, it can loop 200 times and cost $50 before you wake up.

> "Maximum 10 tool calls per execution. If the task isn't complete, compile what you have, write the output, and terminate."

### 5. Shift to Audit Logging

No one is watching the terminal. The agent's reasoning must be written to a permanent file.

> "Append your reasoning, tool choices, and errors in JSON to `audit.jsonl` before each action."


## The Prompt Templates

### Headless Agent Prompt (No Human)

```
1. <objective>              The specific, narrow task for this run
2. <idempotency_check>      Check if work was already done
3. <authorized_tools>       Restricted tool whitelist
4. <headless_constraints>   No questions, no interactive auth, max N loops
5. <failure_protocol>       Where to log errors, then terminate
6. <exit_criteria>          Definition of "done" → save and shutdown
```

### Example: Headless Daily Audit Agent

```yaml
- uses: austenstone/copilot-cli@v3
  with:
    autopilot: true
    no-ask-user: true
    prompt: |
      <objective>
      Audit open issues labeled "needs-triage" and add priority labels.
      </objective>

      <idempotency_check>
      Check if today's audit log exists at logs/audit-YYYY-MM-DD.jsonl.
      If it does, output "previously completed" and terminate.
      </idempotency_check>

      <authorized_tools>
      GitHub CLI (gh issue list, gh issue edit). Nothing else.
      </authorized_tools>

      <headless_constraints>
      - Do NOT ask for clarification. Ever.
      - Maximum 20 tool calls.
      - No interactive authentication.
      </headless_constraints>

      <failure_protocol>
      On any error after 2 retries: log to logs/failed_runs.log and terminate.
      </failure_protocol>

      <exit_criteria>
      All "needs-triage" issues have been labeled. Write results to
      logs/audit-YYYY-MM-DD.jsonl with issue numbers and assigned labels.
      </exit_criteria>
```

The prompt IS the configuration. Get it right and the engine runs itself.

📊 **[View the visual presentation →](/slides/ai-native-cicd-series.html#part4)**

*Next up: [Why GitHub Actions Is the Most AI-Friendly CI](/blog/most-ai-friendly-ci). There's a misconception that AI will replace CI/CD. The opposite is true.*
