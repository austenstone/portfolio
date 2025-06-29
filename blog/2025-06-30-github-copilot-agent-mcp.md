---
slug: github-copilot-agent-mcp
title: Supercharging Development with GitHub Copilot Agent Mode and MCP
authors: austen
tags: [github-copilot, mcp, agent-mode, workflow, productivity]
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

I start every project with a custom chat mode I call "plan" that uses Gemini 2.5 Pro in agent mode. This planning phase is supercharged with several MCP tools:

- **Sequential Thinking**: Breaks down complex problems into structured thought processes
- **Web Search**: Gathers current information about technologies and best practices
- **Fetch**: Retrieves specific documentation or examples from URLs
- **Playwright**: Understands existing UI context for feature additions

The goal of this phase is to generate a comprehensive `.prompt.md` file in `.github/prompts/` that serves as a detailed blueprint for the implementation.

Here's what a typical planning session looks like:

```markdown
# Feature: User Authentication System

## Context
Building a secure authentication system for our React/TypeScript application...

## Implementation Steps
1. Set up JWT token handling
2. Create login/logout components
3. Implement protected routes
4. Add user session management
5. Write comprehensive tests

## Technical Requirements
- Use React Hook Form for form validation
- Implement proper error handling
- Follow our existing TypeScript patterns
- Ensure accessibility compliance
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

The Model Context Protocol is what makes this workflow truly powerful. MCP provides a standardized way for AI models to interact with external tools and data sources. Some of the MCP servers I regularly use include:

- **Sequential Thinking**: For structured problem-solving
- **Web Search & Fetch**: For real-time information gathering
- **Playwright**: For UI testing and interaction
- **File System**: For project structure understanding
- **Git**: For version control operations

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

## The Future of Development

This combination of Agent Mode and MCP represents a fundamental shift in how we can work with AI. Instead of treating AI as a simple code completion tool, we can create sophisticated, context-aware development partners that understand our specific needs and workflows.

The key insight is that the AI becomes more valuable when it has more context about our intentions, constraints, and environment. MCP provides that context, while custom prompts ensure consistent, high-quality outputs.

---

*Have you experimented with Agent Mode and MCP in your development workflow? I'd love to hear about your experiences and any creative tool combinations you've discovered. Connect with me on [GitHub](https://github.com/austenstone) or [LinkedIn](https://www.linkedin.com/in/austenstone/) to continue the conversation.*