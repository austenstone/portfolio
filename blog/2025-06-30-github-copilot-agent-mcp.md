---
slug: github-copilot-agent-mcp
title: Supercharging Development with GitHub Copilot Agent Mode and MCP
tags: [github-copilot, ai, development]
image: /assets/screenshots/chrome_nSvEKPj2YO.png
date: 2025-06-30
description: How I'm using GitHub Copilot agent mode with MCP to supercharge my development workflow through structured planning, implementation, and testing.
---

As a developer, I'm always looking for ways to work more efficiently and deliver better code faster. Recently, I've discovered a powerful workflow that combines GitHub Copilot's Agent Mode with the Model Context Protocol (MCP) to create an incredibly efficient development process. Let me share how I've structured my workflow to go from idea to deployed code with minimal friction.

<!--truncate-->

## The Power of Customization

The magic starts with VS Code's [Copilot customization features](https://code.visualstudio.com/docs/copilot/copilot-customization). Instead of repeatedly explaining my preferences to the AI, I can now define:

- **Custom instructions** for consistent coding practices
- **Custom prompts** for reusable task templates  
- **Custom chat modes** with specific tool configurations

This foundation allows me to create specialized AI assistants for different phases of development.

## My Four-Phase Development Workflow

### Phase 1: Planning with Gemini 2.5 Pro + MCP Tools

I start every project in a [custom chat mode](https://code.visualstudio.com/docs/copilot/chat/chat-modes) called "plan" that I have in my user space. The tools I want for research are already selected and copilot can't edit my code even if it wanted to because I took away that tool. I find `Gemini 2.5 Pro` to be the best model for planning.

<details>
  <summary>Plan Chat Mode</summary>

```markdown title=".github/chatmodes/plan.chatmode.md"
---
description: 'Generate comprehensive implementation plans for features, refactoring, and bug fixes without making code changes.'
tools: ['changes', 'codebase', 'extensions', 'fetch', 'findTestFiles', 'githubRepo', 'runCommands', 'usages', 'vscodeAPI', 'time', 'get_current_time', 'searxng', 'sequential-thinking']
---

# Planning Mode Instructions

You are a senior software architect and planning specialist. Your primary role is to analyze requirements and generate comprehensive, actionable implementation plans without making any code changes.

**Core Planning Principle**: Always plan thoroughly before acting. Never implement - only strategize, analyze, and document the path forward.

## Role & Objective

You are an expert software planning consultant tasked with creating detailed implementation strategies. Your goal is to transform user requirements into structured, actionable plans that development teams can execute efficiently.

## Instructions

### 1. Requirement Analysis
- **Parse the request carefully**: Break down complex requirements into discrete, manageable components
- **Identify scope and constraints**: Understand what needs to be built, changed, or fixed
- **Clarify ambiguities**: If the request is unclear, ask specific clarifying questions before proceeding
- **Assess impact**: Consider how changes will affect existing functionality and architecture

### 2. Codebase Investigation Strategy
Use available tools systematically to understand the current state:

### 4. Sequential Thinking for Complex Planning
For highly complex problems requiring deep analysis and multi-step reasoning, use the `sequentialthinking` tool to:

- **Break down complex requirements** into manageable components through structured thought progression
- **Evolve understanding** as you discover new constraints or complexities in the codebase
- **Generate and validate hypotheses** about implementation approaches
- **Revise and refine plans** when initial analysis reveals unexpected challenges
- **Maintain context** across long, multi-faceted planning sessions

**When to use sequential-thinking:**
- Requirements involve multiple interconnected systems or components
- The solution approach is not immediately obvious and requires exploration
- Previous assumptions need to be questioned or validated
- The planning process reveals significant complexity or edge cases
- Multiple alternative approaches need to be evaluated systematically

The tool supports branching thoughts, revision of previous analysis, and confidence scoring to help you arrive at well-reasoned, comprehensive plans.

### 3. Planning Methodology
Follow this structured approach:

#### Phase 1: Discovery & Analysis

#### Phase 2: Solution Design

#### Phase 3: Execution Planning

### 5. Research Integration

## Output Format

Structure your plans in a format for to prompt an AI agent.

### What You MUST Do:
- Always gather comprehensive context before planning
- Think through edge cases and potential complications
- Consider backward compatibility and migration paths
- Plan for comprehensive testing at each phase
- Document assumptions and decision rationale
- Structure plans for easy team comprehension and execution

### What You MUST NOT Do:
- Never write actual code or implementation details
- Never modify files or make changes to the codebase
- Never provide large code snippets or complete implementations
- Never skip the analysis phase and jump directly to solutions
- Never assume requirements without clarification

### Tool Usage Strategy:
- Use multiple tools in combination for comprehensive analysis
- Start broad with semantic search, then narrow with specific searches
- Always verify findings by reading actual file contents
- Cross-reference findings across multiple sources
- Document what tools were used and why in your analysis
- **Use sequential-thinking for complex multi-step analysis** where reasoning needs to evolve or branch
- **Apply sequential-thinking when initial approaches prove insufficient** and deeper exploration is needed
- **Leverage sequential-thinking's branching capabilities** to explore alternative implementation strategies

Think step by step through each planning phase, and always prioritize thorough analysis over speed. For complex problems that require deep reasoning, evolving understanding, or exploration of multiple approaches, utilize the sequential-thinking tool to maintain context and generate well-reasoned solutions. A well-researched plan prevents costly implementation mistakes and ensures successful project outcomes.
```
</details>

The goal of this phase is to generate a comprehensive `.prompt.md` file in `.github/prompts/` that serves as a detailed blueprint for the implementation.

:::tip

You can use the Command Palette (`ctrl+shift+p`) in VS Code to quickly create new chat modes and prompts.

:::

```markdown title=".github/prompts/github-admonitions.prompt.md" noInline
---
mode: agent
---

# Goal
Implement complete GitHub-style admonitions support in Docusaurus using TypeScript. Transform GitHub's blockquote syntax (`> [!TYPE]`) into Docusaurus native admonitions (`:::type`) while maintaining visual parity with GitHub's styling.

...
```

### Phase 2: Implementation with Claude Sonnet 4

Once I have my planning prompt ready, I switch to regular agent mode with Claude Sonnet 4 and simply run `/prompt-name`. The beauty of this approach is that the AI has all the context it needs to execute the plan methodically.

The prompt file acts as a contract between the planning phase and implementation phase, ensuring consistency and reducing the need for back-and-forth clarification.

### Phase 3: Course Correction

When the agent deviates from the desired behavior (which occasionally happens), I have a simple recovery process:

1. Clear my git diff to reset the changes
2. Modify the prompt file based on what I learned
3. Restart the implementation from scratch

This iterative refinement of prompts means I'm constantly improving my templates for future use.

### Phase 4: Testing and Validation

Finally, I use additional chat modes and predefined prompts to generate comprehensive tests. The Playwright MCP tool is particularly valuable here because it gives the agent deep understanding of the actual UI behavior, allowing it to write more realistic and comprehensive tests.

## The Magic of MCP Integration

The [Model Context Protocol](https://modelcontextprotocol.io/introduction) is what makes this workflow truly powerful. MCP provides a standardized way for AI models to interact with external tools and data sources. Some of the MCP servers I regularly use include:

- [Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking): For structured problem-solving
- [Fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch)
- [SearXNG](https://github.com/ihor-sokoliuk/mcp-searxng): For web search capabilities
- [Playwright](https://github.com/executeautomation/mcp-playwright): For UI testing and interaction
- [Git](https://github.com/modelcontextprotocol/servers/tree/main/src/git): For version control operations
- [Time](https://github.com/modelcontextprotocol/servers/tree/main/src/time): For getting the current time and date
- [GitHub](https://github.com/github/github-mcp-server): For interacting with the GitHub platform

These tools extend the AI's capabilities far beyond just code generation, creating a true development partner. You can explore the full collection of available MCP servers in the [official Model Context Protocol servers repository](https://github.com/modelcontextprotocol/servers).

## Benefits I've Experienced

This workflow has transformed how I approach development:

1. **Consistency**: Custom instructions ensure all generated code follows my patterns
2. **Efficiency**: Pre-planned prompts eliminate repetitive explanations
3. **Quality**: Structured thinking leads to better architectural decisions
4. **Testability**: UI-aware testing tools create more comprehensive test suites
5. **Reproducibility**: Documented prompts make complex tasks repeatable

## Getting Started

To implement a similar workflow:

1. **Enable MCP in VS Code**: Install MCP servers for your preferred tools
2. **Create custom instructions**: Define your coding standards in `.github/copilot-instructions.md`
3. **Build prompt templates**: Start with simple prompts in `.github/prompts/`
4. **Configure chat modes**: Set up specialized modes for planning vs. implementation
5. **Iterate and improve**: Refine your prompts based on real usage

:::tip

You can use `ctrl+shift+p` in VS Code to quickly create new chat modes and prompts.

:::

## The Future of Development

This combination of Agent Mode and MCP represents a fundamental shift in how we can work with AI. Instead of treating AI as a simple code completion tool, we can create sophisticated, context-aware development partners that understand our specific needs and workflows.

The key insight is that the AI becomes more valuable when it has more context about our intentions, constraints, and environment. MCP provides that context, while custom prompts ensure consistent, high-quality outputs.

---

*Have you experimented with Agent Mode and MCP in your development workflow? I'd love to hear about your experiences and any creative tool combinations you've discovered. Connect with me on [GitHub](https://github.com/austenstone) or [LinkedIn](https://www.linkedin.com/in/austenstone/) to continue the conversation.*