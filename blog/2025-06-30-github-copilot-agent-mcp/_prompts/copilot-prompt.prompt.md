---
mode: agent
description: "Prompt files are standalone prompts that you can run directly in chat. They describe the task to be performed (what should be done)."
---

Create a prompt file in the `.github/prompts` directory that implements all previous conversation and context.

Add as much context and information as possible.

# Information

## Prompt files
Define reusable prompts for common tasks like generating code or performing a code review. Prompt files are standalone prompts that you can run directly in chat. They describe the task to be performed (what should be done). Optionally, you can include tasks-specific guidelines about how the task should be performed, or you can reference custom instructions in the prompt file.

## Prompt file structure

A prompt file is a Markdown file with the .prompt.md file suffix. It has the following two main sections:

- (Optional) Header with metadata (Front Matter syntax)
  - mode: The chat mode to use when running the prompt: ask, edit, or agent (default).
  - description: A short description of the prompt.
- Body with the prompt content
  - Prompt files mimic the format of writing prompts in chat. This allows blending natural language instructions, additional context, and even linking to other prompt files as dependencies. You can use Markdown formatting to structure the prompt content, including headings, lists, and code blocks.

You can reference other workspace files, prompt files, or instructions files by using Markdown links. Use relative paths to reference these files, and ensure that the paths are correct based on the location of the prompt file.

Within a prompt file, you can reference variables by using the ${variableName} syntax. You can reference the following variables:

- Workspace variables - ${workspaceFolder}, ${workspaceFolderBasename}
- Selection variables - ${selection}, ${selectedText}
- File context variables - ${file}, ${fileBasename}, ${fileDirname}, ${fileBasenameNoExtension}
- Input variables - ${input:variableName}, ${input:variableName:placeholder} (pass values to the prompt from the chat input field)

# Example

```
---
mode: 'agent'
description: ''
---
<content goes here>
```
