# How to Trigger/Initiate Workflow Runs

You can configure your workflows to run when specific activity on GitHub happens, at a scheduled time, or when an event outside of GitHub occurs.

* [Events that trigger workflows](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows)

<!-- ### Summary of Event Grid That Triggers Workflows -->

<!-- ### Configuring Input (Activity Types): Conditionally Trigger -->

## Event: Workflow Dispatch

Workflows triggered by `workflow_dispatch` and `workflow_call` access their inputs using the inputs context.

For workflows triggered by `workflow_dispatch` inputs are available in the `github.event.inputs`. 

<details>
  <summary>Example of on.workflow_dispatch.inputs</summary>

```yml hljs
on:
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'
        required: true
        default: 'warning'
        type: choice
        options:
        - info
        - warning
        - debug
      tags:
        description: 'Test scenario tags'
        required: false
        type: boolean
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true

jobs:
  log-the-inputs:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Log level: $LEVEL"
          echo "Tags: $TAGS"
          echo "Environment: $ENVIRONMENT"
        env:
          LEVEL: ${{ inputs.logLevel }}
          TAGS: ${{ inputs.tags }}
          ENVIRONMENT: ${{ inputs.environment }}
```
</details>

* [`workflow_dispatch` event](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#workflow_dispatch)
* [`inputs` context](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/contexts#inputs-context)

## Event: Workflow Call
Workflows triggered by `workflow_call` access their inputs using the `inputs` context.

<details>
  <summary>Example of on.workflow_call.outputs</summary>

```yml hljs
on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      workflow_output1:
        description: "The first job output"
        value: ${{ jobs.my_job.outputs.job_output1 }}
      workflow_output2:
        description: "The second job output"
        value: ${{ jobs.my_job.outputs.job_output2 }}
```
</details>

* [`workflow_call` event](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#workflow_call)
* [`inputs` context](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/contexts#inputs-context)

## Event: Workflow Run

The `workflow_run` event allows you to execute a workflow based on execution or completion of another workflow.

<details>
  <summary>Running a workflow based on the conclusion of another workflow</summary>

```yml hljs
on:
  workflow_run:
    workflows: [Build]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - run: echo 'The triggering workflow passed'
  on-failure:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    steps:
      - run: echo 'The triggering workflow failed'
```
</details>

## Event: Schedule

The `schedule` event allows you to trigger a workflow at a scheduled time.

<details>
  <summary>Running a workflow on a schedule</summary>

```yml hljs
on:
  schedule:
            ┌───────────── minute (0 - 59)
            │ ┌───────────── hour (0 - 23)
            │ │ ┌───────────── day of the month (1 - 31)
            │ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
            │ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
            │ │ │ │ │
            │ │ │ │ │
            │ │ │ │ │
    - cron: * * * * *
```
</details>

## Non-Core CI/CD Use Cases

Understand that there are many ways to use GitHub Actions beyond CI/CD. For example, you can use GitHub Actions to:
* 

## Concurrency: Order of Workflow Runs Based on When Trigger Happened

GitHub Actions also allows you to control the concurrency of workflow runs, so that you can ensure that only one run, one job, or one step runs at a time in a specific context.

> [!NOTE]
> This is NOT a queueing system. If you have a lot of workflow runs that are waiting to run, they will be run in the order that they were triggered.

<details>
  <summary>Example: Concurrency groups</summary>

```yml hljs
on:
  push:
    branches:
      - main

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true
```
</details>

<details>
  <summary>Example: Using concurrency to cancel any in-progress job or run</summary>

```yml hljs
concurrency:
  group: ${{ github.ref }}
  cancel-in-progress: true
```
</details>

You can make the concurrency group as specific as you want. For example, you could use the branch name, the branch name and the event type, or the branch name and the event type and the workflow name.

## Re-running Workflows / Retries

You can re-run a workflow run from the Actions UI. This is useful if you want to re-run a failed workflow run, or if you want to re-run a successful workflow run.

Retrying a job programmatically is not officially supported but can be achieved using something like a [marketplace action](https://github.com/marketplace?query=retry)
