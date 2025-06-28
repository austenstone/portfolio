# GitHub Actions Overview

This document is a high-level overview of GitHub Actions. It is not intended to be a comprehensive guide to the platform, but rather a starting point for understanding the basics.

- [GitHub Actions Overview](#github-actions-overview)
  - [Intro to Concepts](#intro-to-concepts)
  - [How to Trigger/Initiate Workflow Runs](#how-to-triggerinitiate-workflow-runs)
  - [How to Structure/Manage Jobs in the Workflow](#how-to-structuremanage-jobs-in-the-workflow)
  - [How to Use and Create Actions (Marketplace)](#how-to-use-and-create-actions-marketplace)
  - [How to Organize, Share, and Scale Workflows](#how-to-organize-share-and-scale-workflows)
  - [Artifacts](#artifacts)
  - [Caching](#caching)
  - [Secrets](#secrets)
  - [How to Create and Manage Runners](#how-to-create-and-manage-runners)
  - [How to Govern Usage](#how-to-govern-usage)
  - [How to Observe What’s Going on with CI/CD](#how-to-observe-whats-going-on-with-cicd)
  - [How to Manage Cost and Billing](#how-to-manage-cost-and-billing)
  - [How to Migrate](#how-to-migrate)
  - [Understanding Platform Limits](#understanding-platform-limits)

## Intro to Concepts

There are a few concepts that are important to understand when working with GitHub Actions.

### Definitions

Some basic definitions to get us started...

![overview-actions-simple](/assets/screenshots/overview-actions-simple.png)

#### [Workflow](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions#workflows)

A workflow is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository in the `.github/workflows` directory. A repository can have multiple workflows, each of which can perform a different set of tasks.

#### [Events](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions#events)

An event is a specific activity in a repository that triggers a workflow run. It could be triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.

#### [Jobs](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions#jobs)

A job is a set of steps in a workflow that is executed on the same runner. Each step is either a shell script that will be executed, or an action that will be run. Steps are executed in order and are dependent on each other. Since each step is executed on the same runner, you can share data from one step to another.

#### [Steps / Actions](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions#actions)

A step can be a script that will be executed or a GitHub action.

#### [Runners](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions#runners)

A runner is a server that runs your workflows when they're triggered. Each runner can run a single job at a time.

* GHR: GitHub-Hosted Runner
* SHR: Self-Hosted Runner

### Action: Marketplace Action, Custom Actions (Composite Action)

An action is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task. Use an action to help reduce the amount of repetitive code that you write in your workflow files. 

An action can pull your git repository from GitHub, set up the correct toolchain for your build environment, or set up the authentication to your cloud provider.

You can write your own actions, or you can find actions to use in your workflows in the [GitHub Marketplace](https://github.com/marketplace?type=actions).

For more information, see [Creating actions](https://docs.github.com/en/actions/creating-actions).

### Runner: GitHub-Hosted Runner vs. Self-Hosted Runner

You can run your jobs on GitHub Hosted compute or you can host your own Self Hosted runners.

The standard runners GitHub offers are:
* `ubuntu-latest`
* `windows-latest`
* `macos-latest`

There are also [Larger runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-larger-runners/about-larger-runners#specifications-for-general-larger-runners) for more demanding use cases.

* [About Larger Runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-larger-runners)

![Actions _ Overview   Tech Requirements Check](https://github.com/user-attachments/assets/89eb287f-e840-4ea6-8f0c-d3277fd5c941)

#### Cost

Actions running on standard GitHub-hosted runners are free for public repositories and self-hosted runners are free for all repositories.

For private repositories, GitHub charges based on a [per-minute rate](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates). The cost is simply the number of minutes your job runs multiplied by the per-minute rate.

> [!TIP]
> GitHub always rounds up the time that a job runs to the nearest minute. For example, if your job runs for 61 seconds, GitHub will charge you for 2 minutes.

You are entitled to a certain amount of free minutes and storage based on your plan. If you exceed these limits, you will be charged for additional usage.

| Plan | Storage | Minutes (per month) |
|------|---------|-------------------|
| GitHub Team | 2 GB | 3,000 |
| GitHub Enterprise Cloud | 50 GB | 50,000 |

> [!NOTE]
> These minutes are ONLY applicable to standard runners (not larger runners).
> The above values are for `ubuntu-latest` runners.
> `windows-latest` are 2x the cost (25k free)
> `macos-latest` are 10x the cost (5k free).
> Logs and job summaries do not count towards storage usage.

![alt text](/assets/screenshots/Screenshot%202024-08-12%20at%2010.33.53 AM.png)

### Autoscaling with self-hosted runners (ARC)

You can automatically increase or decrease the number of self-hosted runners in your environment in response to the webhook events you receive with a particular label.

* [Autoscaling with self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners)
* [actions-runner-controller](https://github.com/actions/actions-runner-controller)

<!-- ## GitHub Actions Ethos

### Essence/Opinionation

### Traceability

### Reusability (DRY)

### Ephemerality

### Extensibility: Do Anything You Want

### Easy to Get Started

## How to Author Workflow Files -->

### The Developer Loop: Writing, Testing, Debugging

Writing a workflow file is as simple as creating a `.yml` file in the `.github/workflows` directory of your repository.

To test your workflow file you will push it to your repository and navigate to the Actions tab to see the status of your workflow run.

When the workflow run is complete you can view the logs of each step to see what happened.

### GitHub CLI

The GitHub CLI brings GitHub to the terminal. It's also preinstalled on all GitHub runners!

If you need to quickly perform a GitHub task this is the easiest way to do it!

<details>
  <summary>Comment on an issue</summary>

```yml
on:
  issues:
    types:
      - opened
jobs:
  comment:
    runs-on: ubuntu-latest
    steps:
      - run: gh issue comment $ISSUE --body "Thank you for opening this issue!"
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          ISSUE: ${{ github.event.issue.html_url }}
```
</details>

For the list of available extensions for the gh cli, see the topic [`gh-extension`](https://github.com/topics/gh-extension).

[Install](https://cli.github.com/)
[Manual](https://cli.github.com/manual/)
[Using GitHub CLI in workflows](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-github-cli-in-workflows)

### VS Code extension

There is a VS Code extension that provides syntax highlighting, intellisense, and more! This is a must have when authoring workflows.

[GitHub Actions Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions)

![alt text](/assets/screenshots/vscode-extension-1.png)

### Copilot

GitHub Copilot is an AI pair programmer that helps you write code faster and with less effort. It can be incredibly useful when writing GitHub Actions workflows. Leverage the completion or chat feature to get help with writing your workflows.

[GitHub Copilot](https://copilot.github.com/)

### Actions Loves JavaScript

One of the most popular languages for writing actions is JavaScript. This is because it is easy to get started with and has a lot of community support.

#### GitHub Actions ToolKit

The GitHub Actions ToolKit provides a set of packages to make creating actions easier.

* [Actions Toolkit](https://github.com/actions/toolkit?tab=readme-ov-file#readme)
* [Creating a JavaScript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)

### Github-script

This action makes it easy to quickly write a script in your workflow that uses the GitHub API and the workflow run context. The GitHub Actions Toolkit is pre-installed and available for use in the script you write.

<details>
  <summary>Welcome a first-time contributor</summary>

```yml
on: pull_request_target

jobs:
  welcome:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v7
        with:
          script: |
            // Get a list of all issues created by the PR opener
            // See: https://octokit.github.io/rest.js/#pagination
            const creator = context.payload.sender.login
            const opts = github.rest.issues.listForRepo.endpoint.merge({
              ...context.issue,
              creator,
              state: 'all'
            })
            const issues = await github.paginate(opts)

            for (const issue of issues) {
              if (issue.number === context.issue.number) {
                continue
              }

              if (issue.pull_request) {
                return // Creator is already a contributor.
              }
            }

            await github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `**Welcome**, new contributor!

                Please make sure you've read our [contributing guide](CONTRIBUTING.md) and we look forward to reviewing your Pull request shortly ✨`
            })
```
</details>

<details>
  <summary>Download data from a URL</summary>

```yml
on: pull_request

jobs:
  diff:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v7
        with:
          script: |
            const diff_url = context.payload.pull_request.diff_url
            const result = await github.request(diff_url)
            console.log(result)
```
</details>

### Expressions

You can use expressions to programmatically set environment variables in workflow files and access contexts. An expression can be any combination of literal values, references to a context, or functions. You can combine literals, context references, and functions using operators. For more information about contexts, see "Contexts."

#### Literals

You can use boolean, null, number, or string data types.

<details>
  <summary>Example of literals</summary>

```yml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99e-2 }}
  myString: Mona the Octocat
  myStringInBraces: ${{ 'It''s open source!' }}
```
</details>

#### Operators

<details>
  <summary>Example of operators</summary>

```
Operator	Description
( )	Logical grouping
[ ]	Index
.	Property de-reference
!	Not
<	Less than
<=	Less than or equal
>	Greater than
>=	Greater than or equal
==	Equal
!=	Not equal
&&	And
||	Or
```
</details>

> [!TIP]
> You can use a ternary operator `condition ? true : false` as `${{ condition && true || false }}`.

[Expressions](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions)

#### Functions

You can use functions to transform data or to perform operations.

* [contains](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#contains)
* [startswith](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#startswith)
* [endsWith](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#endswith)
* [format](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#format)
* [join](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#join)
* [toJson](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#tojson)
* [fromJson](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#fromjson)
* [hashFiles](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#hashfiles)

#### Status Check functions

* [success](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#success)
* [always](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#always)
* [cancelled](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#cancelled)
* [failure](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#failure)

## How to Trigger/Initiate Workflow Runs

You can configure your workflows to run when specific activity on GitHub happens, at a scheduled time, or when an event outside of GitHub occurs.

* [Events that trigger workflows](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows)

<!-- ### Summary of Event Grid That Triggers Workflows -->

<!-- ### Configuring Input (Activity Types): Conditionally Trigger -->

### Event: Workflow Dispatch

Workflows triggered by `workflow_dispatch` and `workflow_call` access their inputs using the inputs context.

For workflows triggered by `workflow_dispatch` inputs are available in the `github.event.inputs`. 

<details>
  <summary>Example of on.workflow_dispatch.inputs</summary>

```yml
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

### Event: Workflow Call
Workflows triggered by `workflow_call` access their inputs using the `inputs` context.

<details>
  <summary>Example of on.workflow_call.outputs</summary>

```yml
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

### Event: Workflow Run

The `workflow_run` event allows you to execute a workflow based on execution or completion of another workflow.

<details>
  <summary>Running a workflow based on the conclusion of another workflow</summary>

```yml
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

### Event: Schedule

The `schedule` event allows you to trigger a workflow at a scheduled time.

<details>
  <summary>Running a workflow on a schedule</summary>

```yml
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

### Non-Core CI/CD Use Cases

Understand that there are many ways to use GitHub Actions beyond CI/CD. For example, you can use GitHub Actions to:
* 

### Concurrency: Order of Workflow Runs Based on When Trigger Happened

GitHub Actions also allows you to control the concurrency of workflow runs, so that you can ensure that only one run, one job, or one step runs at a time in a specific context.

> [!NOTE]
> This is NOT a queueing system. If you have a lot of workflow runs that are waiting to run, they will be run in the order that they were triggered.

<details>
  <summary>Example: Concurrency groups</summary>

```yml
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

```yml
concurrency:
  group: ${{ github.ref }}
  cancel-in-progress: true
```
</details>

You can make the concurrency group as specific as you want. For example, you could use the branch name, the branch name and the event type, or the branch name and the event type and the workflow name.

### Re-running Workflows / Retries

You can re-run a workflow run from the Actions UI. This is useful if you want to re-run a failed workflow run, or if you want to re-run a successful workflow run.

Retrying a job programmatically is not officially supported but can be achieved using something like a [marketplace action](https://github.com/marketplace?query=retry)

## How to Structure/Manage Jobs in the Workflow

### Parallelization of Jobs

By default all jobs in a workflow run in parallel. You can control the order of jobs by specifying dependencies.

### Matrices

A matrix strategy is a great way to run the same job multiple times with different inputs. This is useful if you want to run your tests on multiple versions of a language, or if you want to run your tests on multiple operating systems.

> [!NOTE]
> The maximum number of jobs that can be used in a matrix strategy is 256.

<details>
  <summary>Example of a matrix strategy</summary>

```yml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
</details>

* [Using a matrix for your jobs](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-a-matrix-for-your-jobs)

### Ordering Jobs

You can define the order of the jobs using the `needs` keyword. This is useful if you want to run a job that depends on the output of another job.

<details>
  <summary>Example of linking jobs</summary>

```yml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
    steps:
      - run: echo ${{ needs.job1.outputs.myOutput }}
```
</details>

* [Defining prerequisite jobs](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-jobs-in-a-workflow#defining-prerequisite-jobs)

### Job Timeouts

You can define a timeout for a job, and if the job takes longer than the timeout to run, the job will be cancelled.

The default timeout for a job is 6 hours or 360 minutes.

> [!NOTE]
> The `GITHUB_TOKEN` expires after the job finishes or 24 hours. This is a limiting factor for SHRs.

* [`jobs.<job_id>.steps[*].timeout-minutes`](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#jobsjob_idstepstimeout-minutes)
* [`jobs.<job_id>.timeout-minutes`](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes)

### Running Jobs in Containers / Service Containers

Running in a container will not always be faster than running on a GHR. The time it takes to download the container image and start the container can be longer than the time it takes to start a job on a GHR.

### Containers

Use `jobs.<job_id>.container` to create a container to run any steps in a job that don't already specify a container.

<details>
  <summary>Example of running a job within a container</summary>

```yml
name: CI
on:
  push:
    branches: [ main ]
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container: 
      image: node:18
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
    steps:
      - name: Check for dockerenv file
        run: (ls /.dockerenv && echo Found dockerenv) || (echo No dockerenv)
```
</details>

> [!TIP]
> You can omit the `image` keyword and use the short version `container: node:18` if you don't need to specify parameters.

* [Running jobs in a container](https://docs.github.com/en/actions/writing-workflows/choosing-where-your-workflow-runs/running-jobs-in-a-container)

#### Service Containers

Service containers let you run a container parallel to your job. This can be helpful if your job needs to talk to a database, for example.

* [About service containers](https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/about-service-containers)

<details>
  <summary>Example of using a service container</summary>

```yml
name: Redis container example
on: push

jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:16-bullseye

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
```
</details>

#### Authenticating with a Container Registry

Sometimes you will need to authenticate with a container registry to pull an image. You can use the `credentials` keyword to do this.

<details>
  <summary>Example of authenticating with a container registry</summary>

```yml
jobs:
  build:
    services:
      redis:
        # Docker Hub image
        image: redis
        ports:
          - 6379:6379
        credentials:
          username: ${{ secrets.dockerhub_username }}
          password: ${{ secrets.dockerhub_password }}
      db:
        # Private registry image
        image:  ghcr.io/octocat/testdb:latest
        credentials:
          username: ${{ github.repository_owner }}
          password: ${{ secrets.ghcr_password }}
```
</details>

* [Authenticating with image registries](https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/about-service-containers#authenticating-with-image-registries)

### Environments: Controls How/When a Job is Run Based on Protection Rules Set, Limits Branches, Scopes Secrets

You can create environments and secure those environments with deployment protection rules. A job that references an environment must follow any protection rules for the environment before running or accessing the environment's secrets.

Scoping secrets to an environment is very powerful because of the controls it gives you. You can limit which branches can access the secrets, and you can leverage the environment protection rules to control when a job can access the secrets.

#### Environment Protection Rules

Deployment protection rules require specific conditions to pass before a job referencing the environment can proceed.

##### Required Reviewers

You can require that specific individuals or teams review a pull request before a job can proceed.

##### Wait timer

You can delay a job for a specific amount of time before it can proceed.

##### Branch restrictions

You can restrict which branches or tags can access the environment.

##### Admin bypass

You can allow or disallow repository administrators to bypass the protection rules.

##### Custom deployment protection rules

You can create custom deployment protection rules to gate deployments with third-party services.

* [Deployment Protection Rules](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment#deployment-protection-rules)
* [Configuring custom deployment protection rules](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/configuring-custom-deployment-protection-rules)
* [Environment Secrets](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment#environment-secrets)

### Conditional Jobs/Steps

You can use the `if` keyword to conditionally run a job or step.

```yml
if: ${{ ! startsWith(github.ref, 'refs/tags/') }}
```

<details>
  <summary>Example of conditional jobs</summary>

```yml
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: github.repository == 'octo-org/octo-repo-prod'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '14'
      - run: npm install -g bats
```
</details>

* [Using conditions to control job execution](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/using-conditions-to-control-job-execution)

### Permissions for Jobs

There is a default token called `GITHUB_TOKEN` which by default has the permissions defined in your repositories Actions settings.

It's a good idea to limit permissions as much as possible by being explicit.

<details>
  <summary>Example of limiting permissions</summary>

```yml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: actions/stale@v5
```
</details>

#### GitHub Apps

Using [actions/create-github-app-token](https://github.com/actions/create-github-app-token) you can get a token for a GitHub App. This is better than using a PAT because you get more control and you don't need to consume a license.

<details>
  <summary>Example of using a GitHub App token</summary>

```yml
name: Run tests on staging
on:
  push:
    branches:
      - main

jobs:
  hello-world:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/create-github-app-token@v1
        id: app-token
        with:
          app-id: ${{ vars.APP_ID }}
          private-key: ${{ secrets.PRIVATE_KEY }}
      - uses: ./actions/staging-tests
        with:
          token: ${{ steps.app-token.outputs.token }}
```
</details>

* [Assigning permissions to jobs](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/assigning-permissions-to-jobs)
* [Automatic token authentication](https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication)

## How to Use and Create Actions (Marketplace)

### What is an Action?

Actions are the building blocks that power your workflow. A workflow can contain one or more actions, either as individual steps or as part of an action group. An action is a reusable unit of code that can be used in multiple workflows. You can create your own actions, use actions created by the GitHub community, or use a combination of both.

* [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)

### Types of Actions

Javascript actions are the most popular and easiest to get started with, Docker containers package the environment with the GitHub Actions code, and Composite actions are a way to reuse actions in a more modular way.

There are three types of custom actions:
* [JavaScript](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
* [Docker](https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action) (Not available on macOS or Windows runners)
* [Composite](https://docs.github.com/en/actions/creating-actions/creating-a-composite-run-steps-action)
* [About custom actions](https://docs.github.com/en/actions/creating-actions/about-custom-actions)

### Securing Usage of Actions

* [Security hardening for GitHub Actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions)

### Creating Your Own Actions

You can create your own actions to use in your workflows. This is a great way to encapsulate logic that you want to reuse across multiple workflows.

* [Creating actions](https://docs.github.com/en/actions/creating-actions)

### Cool Actions to Look Out For: github-script, Anything by GitHub, Major Cloud Providers, Terraform, Docker

Here are some popular actions to get you started:

* [GitHub Script](https://github.com/actions/github-script)
* [Awesome Actions](https://github.com/sdras/awesome-actions#readme)
* [GitHub Authored Actions](https://github.com/marketplace?query=publisher%3Aactions)
* [Azure Actions](https://github.com/marketplace?query=publisher%3Aazure)
* [AWS Actions](https://github.com/marketplace?query=publisher%3Aaws-actions)
* [GCP Actions](https://github.com/marketplace?query=publisher%3Agoogle-github-actions)
* [Build and Push Docker Images](https://github.com/marketplace/actions/build-and-push-docker-images)

## How to Organize, Share, and Scale Workflows

One of the most powerful features of GitHub Actions is the ability to share workflows across repositories. This is useful if you have a common workflow that you want to use in multiple repositories.

### Reusable Workflows

These are reusable jobs. They are a great way to share common logic across multiple workflows or just to organize your workflow into smaller, more manageable pieces.

#### Why?

* Easier to maintain
* Create workflows more quickly
* Avoid duplication. DRY(don't repeat yourself).
* Build consistently across multiple, dozens, or even hundreds of repositories
* Require specific workflows for specific deployments
* Promotes best practices
* Abstract away complexity

#### What can they do

* Can have inputs and outputs
* Can be nested 4 levels deep
* Only 20 unique reusable workflows can be in a single workflow
* Environment variables are not propagated to the reusable workflow
* Secrets are scoped to the caller workflow
* Secrets need to be passed to the reusable workflow

<details>
  <summary>Example of a reusable workflow</summary>

##### Defining the workflow (reusable-called.yml)

```yml
on:
  workflow_call:
    inputs:
      username:
        default: ${{ github.actor }}
        required: false
        type: string

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Run a one-line script
        run: echo Hello, ${{ inputs.username }}!
```

##### Using the workflow (caller.yml)

```yml
jobs:
  build:
    uses: ./.github/workflows/reusable-called.yml
    with:
      username: ${{ github.actor }}
```

</details>

* [Reusing workflows](https://docs.github.com/en/actions/sharing-automations/reusing-workflows)
* [Limitations](https://docs.github.com/en/actions/sharing-automations/reusing-workflows#limitations)

### Composite Actions

These are reusable steps. Use a composite action to combine(re-use) multiple steps.

> [!TIP]
> These are far less limited than reusable workflows. Consider using composite actions over reusable workflows to start.

<details>
  <summary>Example of a composite action</summary>

##### Defining the action (hello-world-composite-action.yml)

```yml
name: 'Hello World'
description: 'Greet someone'
inputs:
  who-to-greet:  # id of input
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-number }}
runs:
  using: "composite"
  steps:
    - name: Set Greeting
      run: echo "Hello $INPUT_WHO_TO_GREET."
      shell: bash
      env:
        INPUT_WHO_TO_GREET: ${{ inputs.who-to-greet }}

    - name: Random Number Generator
      id: random-number-generator
      run: echo "random-number=$(echo $RANDOM)" >> $GITHUB_OUTPUT
      shell: bash

    - name: Set GitHub Path
      run: echo "$GITHUB_ACTION_PATH" >> $GITHUB_PATH
      shell: bash
      env:
        GITHUB_ACTION_PATH: ${{ github.action_path }}

    - name: Run goodbye.sh
      run: goodbye.sh
      shell: bash
```

##### Using the action (caller.yml)

```yml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: actions/checkout@v4
      - id: foo
        uses: OWNER/hello-world-composite-action@TAG
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number "$RANDOM_NUMBER"
        shell: bash
        env:
          RANDOM_NUMBER: ${{ steps.foo.outputs.random-number }}
```

</details>

* [Creating a composite action](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-composite-action)

### Rulesets (Required workflows & Required checks)

A new version of branch protection rules called rulesets allows you to require specific workflows to run before a pull request can be merged. These can be defined at the org level or the repo level.

> [!IMPORTANT]
> This means you can now create `pull_request` workflows at the organization level and apply them to some or all of your repos!

* [Rulesets](https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)
* [Require workflows to pass before merging](https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-workflows-to-pass-before-merging)
* [Require status checks to pass before merging](https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-status-checks-to-pass-before-merging)

### Starter Workflows

Workflow templates allow everyone in your organization who has permission to create workflows to do so more quickly and easily. 

You can create a workflow template by adding a `.github/workflow-templates` directory to your repository. Inside this directory, you can add one or more workflow templates. Each workflow template is a directory that contains a workflow file and a metadata file.

> [!NOTE]
> Because workflow templates require a public .github repository, they can not be private are not available for Enterprise Managed Users.

<details>
  <summary>Example of a workflow template</summary>

`.github/workflow-templates/octo-organization-ci/octo-organization-ci.yml`

```yml
name: Octo Organization CI

on:
  push:
    branches: [ $default-branch ]
  pull_request:
    branches: [ $default-branch ]
...
```

`.github/workflow-templates/octo-organization-ci/octo-organization-ci.properties.json`

```yml
{
    "name": "Octo Organization Workflow",
    "description": "Octo Organization CI workflow template.",
    "iconName": "example-icon",
    "categories": [
        "Go"
    ],
    "filePatterns": [
        "package.json$",
        "^Dockerfile",
        ".*\\.md$"
    ]
}
```
</details>

### Managing Updates to Workflows/Actions

Keeping your workflows and actions up to date is important. 

* The best practice is to use a commit sha to pin your actions to a specific commit because the sha is immutable (Ex: `mxschmitt/action-tmate@43767ec126ce819b2c3e6ac57a8951a7833e4ad7`)
* You could also use a tag (Ex: `mxschmitt/action-tmate@v3`), but tags can be changed.
* You could also use a branch (Ex: `mxschmitt/action-tmate@main`), but branches constantly change.

A great way to manage updates to your workflows and actions is to use Dependabot. Dependabot will automatically create pull requests to update your workflows and actions when new versions are released. A big benefit of doing things this way is you can test changes before they are merged.

<details>
  <summary>Example of using Dependabot to manage updates to your workflows and actions</summary>

`.github/dependabot.yml`
```yml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every week
      interval: "weekly"
```
</details>

* [Keeping your actions up to date with Dependabot](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/keeping-your-actions-up-to-date-with-dependabot)
* [Configuration options for the dependabot.yml file](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)

### Monorepo vs Polyrepo

GitHub Actions is obvious when dealing with a single repository, but what about when you have multiple repositories that depend on each other?

#### Monorepo

For a monorepo you may not want to checkout, build, test, and deploy everything on every push. You may want to only build and test the things that have changed.

You can use [`on.<push|pull_request|pull_request_target>.<paths|paths-ignore>`](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) to trigger a workflow based on the files changed in a push or pull request.

<details>
  <summary>Example of using paths to trigger a workflow based on the files changed</summary>

```yml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```
</details>

There are actions that let you check which files have changed so that you can conditionally run jobs.

<details>
  <summary>dorny/paths-filter</summary>

```yml
jobs:
  tests:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: dorny/paths-filter@v3
      id: filter
      with:
        filters: |
          backend:
            - 'backend/**'
          frontend:
            - 'frontend/**'

    # run only if 'backend' files were changed
    - name: backend tests
      if: steps.filter.outputs.backend == 'true'
      run: ...

    # run only if 'frontend' files were changed
    - name: frontend tests
      if: steps.filter.outputs.frontend == 'true'
      run: ...

    # run if 'backend' or 'frontend' files were changed
    - name: e2e tests
      if: steps.filter.outputs.backend == 'true' || steps.filter.outputs.frontend == 'true'
      run: ...
```
</details>

<details>
  <summary>tj-actions/changed-files</summary>

```yml
name: CI

on:
  pull_request:
    branches:
      - main

jobs:
  # ------------------------------------------------------------------------------------------------------------------------------------------------
  # Event `pull_request`: Compare the last commit of the main branch or last remote commit of the PR branch -> to the current commit of a PR branch.
  # ------------------------------------------------------------------------------------------------------------------------------------------------
  changed_files:
    runs-on: ubuntu-latest  # windows-latest || macos-latest
    name: Test changed-files
    steps:
      - uses: actions/checkout@v4

      # -----------------------------------------------------------------------------------------------------------
      # Example 1
      # -----------------------------------------------------------------------------------------------------------
      - name: Get changed files
        id: changed-files
        uses: tj-actions/changed-files@v44
        # To compare changes between the current commit and the last pushed remote commit set `since_last_remote_commit: true`. e.g
        # with:
        #   since_last_remote_commit: true 

      - name: List all changed files
        env:
          ALL_CHANGED_FILES: ${{ steps.changed-files.outputs.all_changed_files }}
        run: |
          for file in ${ALL_CHANGED_FILES}; do
            echo "$file was changed"
          done

      # -----------------------------------------------------------------------------------------------------------
      # Example 2
      # -----------------------------------------------------------------------------------------------------------
      - name: Get all changed markdown files
        id: changed-markdown-files
        uses: tj-actions/changed-files@v44
        with:
          # Avoid using single or double quotes for multiline patterns
          files: |
             **.md

      - name: List all changed files markdown files
        if: steps.changed-markdown-files.outputs.any_changed == 'true'
        env:
          ALL_CHANGED_FILES: ${{ steps.changed-markdown-files.outputs.all_changed_files }}
        run: |
          for file in ${ALL_CHANGED_FILES}; do
            echo "$file was changed"
          done

      # -----------------------------------------------------------------------------------------------------------
      # Example 3
      # -----------------------------------------------------------------------------------------------------------
      - name: Get all test, doc and src files that have changed
        id: changed-files-yaml
        uses: tj-actions/changed-files@v44
        with:
          files_yaml: |
            doc:
              - '**.md'
              - docs/**
            test:
              - test/**
              - '!test/**.md'
            src:
              - src/**
          # Optionally set `files_yaml_from_source_file` to read the YAML from a file. e.g `files_yaml_from_source_file: .github/changed-files.yml`

      - name: Run step if test file(s) change
        # NOTE: Ensure all outputs are prefixed by the same key used above e.g. `test_(...)` | `doc_(...)` | `src_(...)` when trying to access the `any_changed` output.
        if: steps.changed-files-yaml.outputs.test_any_changed == 'true'  
        env:
          TEST_ALL_CHANGED_FILES: ${{ steps.changed-files-yaml.outputs.test_all_changed_files }}
        run: |
          echo "One or more test file(s) has changed."
          echo "List all the files that have changed: $TEST_ALL_CHANGED_FILES"
      
      - name: Run step if doc file(s) change
        if: steps.changed-files-yaml.outputs.doc_any_changed == 'true'
        env:
          DOC_ALL_CHANGED_FILES: ${{ steps.changed-files-yaml.outputs.doc_all_changed_files }}
        run: |
          echo "One or more doc file(s) has changed."
          echo "List all the files that have changed: $DOC_ALL_CHANGED_FILES"

      # -----------------------------------------------------------------------------------------------------------
      # Example 4
      # -----------------------------------------------------------------------------------------------------------
      - name: Get changed files in the docs folder
        id: changed-files-specific
        uses: tj-actions/changed-files@v44
        with:
          files: docs/*.{js,html}  # Alternatively using: `docs/**`
          files_ignore: docs/static.js

      - name: Run step if any file(s) in the docs folder change
        if: steps.changed-files-specific.outputs.any_changed == 'true'
        env:
          ALL_CHANGED_FILES: ${{ steps.changed-files-specific.outputs.all_changed_files }}
        run: |
          echo "One or more files in the docs folder has changed."
          echo "List all the files that have changed: $ALL_CHANGED_FILES"
```
</details>

You may also leverage sparse checkout to only checkout the directories that have changed.

<details>
  <summary>Example of using sparse checkout to only checkout the directories that have changed</summary>

```yml
- uses: actions/checkout@v4
  with:
    sparse-checkout: |
      .github
      src
```
</details>


* [Using conditions to control job execution](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/using-conditions-to-control-job-execution)

#### Polyrepo

For a polyrepo you have the opposite problem and may need to pull in code or artifacts from other repositories.

<details>
  <summary>Example of checkout multiple repos</summary>

```yml
- name: Checkout
  uses: actions/checkout@v4
  with:
    path: main

- name: Checkout private tools
  uses: actions/checkout@v4
  with:
    repository: my-org/my-private-tools
    token: ${{ secrets.GH_PAT }} # `GH_PAT` is a secret that contains your PAT
    path: my-tools
```
</details>

## Artifacts

The [actions/upload-artifact](https://github.com/actions/upload-artifact) and [download-artifact](https://github.com/actions/download-artifact) actions enable you to save output from a job. The artifact will also be visible in the Actions UI under the job summary, at the bottom.

### Retention Periods
Artifacts have a retention period which determines when they will expire and be deleted. You can specify this retention period at the organization, repository, or workflow level.

<details>
  <summary>Example of a custom retention period</summary>

```yml
  - name: 'Upload Artifact'
    uses: actions/upload-artifact@v4
    with:
      name: my-artifact
      path: my_file.txt
      retention-days: 5
```
</details>

### Sharing Artifacts Between Jobs

You might want to use artifacts to share data between jobs. For example you could build your project and save it as an artifact, and then deploy the artifact in a separate job.

<details>
  <summary>Example of sharing artifacts between jobs</summary>

```yml
name: Share data between jobs

on: [push]

jobs:
  job_1:
    name: Add 3 and 7
    runs-on: ubuntu-latest
    steps:
      - shell: bash
        run: |
          expr 3 + 7 > math-homework.txt
      - name: Upload math result for job 1
        uses: actions/upload-artifact@v4
        with:
          name: homework_pre
          path: math-homework.txt

  job_2:
    name: Multiply by 9
    needs: job_1
    runs-on: windows-latest
    steps:
      - name: Download math result for job 1
        uses: actions/download-artifact@v4
        with:
          name: homework_pre
      - shell: bash
        run: |
          value=`cat math-homework.txt`
          expr $value \* 9 > math-homework.txt
      - name: Upload math result for job 2
        uses: actions/upload-artifact@v4
        with:
          name: homework_final
          path: math-homework.txt

  job_3:
    name: Display results
    needs: job_2
    runs-on: macOS-latest
    steps:
      - name: Download math result for job 2
        uses: actions/download-artifact@v4
        with:
          name: homework_final
      - name: Print the final result
        shell: bash
        run: |
          value=`cat math-homework.txt`
          echo The result is $value
```
</details>

* [Storing and sharing data from a workflow](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/storing-and-sharing-data-from-a-workflow)
* [Passing data between jobs in a workflow](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/storing-workflow-data-as-artifacts#passing-data-between-jobs-in-a-workflow)

### Artifact Attestations

Leverage artifact attestations to create unfalsifiable provenance and integrity guarantees for the software you build.

* [Using artifact attestations to establish provenance for builds](https://docs.github.com/en/actions/security-for-github-actions/using-artifact-attestations/using-artifact-attestations-to-establish-provenance-for-builds)

## Caching

GitHub Actions has a 10Gb rotating cache that you can leverage for any use case. This is usually used to speed up workflows.

> [!NOTE]
> GitHub will remove any cache entries that have not been accessed in over 7 days. There is no limit on the number of caches you can store, but the total size of all caches in a repository is limited to 10 GB. Once a repository has reached its maximum cache storage, the cache eviction policy will create space by deleting the oldest caches in the repository.

<details>
  <summary>Example of caching dependencies to speed up workflows</summary>

#### Gradle

```yml
- name: Cache Gradle packages
  uses: actions/cache@v3
  with:
    path: |
      ~/.gradle/caches
      ~/.gradle/wrapper
```

#### NPM Cache
  
```yml
name: NPM Cache Install
description: NPM clean install with caching

runs:
  using: "composite"

  steps:
    - uses: actions/cache@v4
      id: cache-nodemodules
      env:
        cache-name: cache-node-modules
      with:
        path: node_modules
        key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-build-${{ env.cache-name }}-
          ${{ runner.os }}-build-
          ${{ runner.os }}-
    - run: npm ci
      if: steps.cache-nodemodules.outputs.cache-hit != 'true'
      shell: bash
```
</details>

* [Caching dependencies to speed up workflows](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows)

## Secrets

Secrets are variables that you create in an organization, repository, or repository environment. The secrets that you create are available to use in a GitHub Actions workflows. GitHub Actions can only read a secret if you explicitly include the secret in a workflow.

GitHub redacts secrets from logs, but you should still be careful about what you log.

Sensitive secrets should leverage environments because environments have protection rules that can be used to gate access to the secrets. This includes which branch the secret can be accessed from. If you combine this with branch protection rules you can create a very secure system.

* [Using secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions#using-secrets)

### Reusable Workflows and Secrets

You must explicitly pass secrets to a reusable workflow. This is because secrets are scoped to the caller workflow.

### OIDC Access to Cloud Environments

GitHub Actions can now use OIDC tokens to authenticate to cloud environments. This is a more secure way to authenticate to cloud environments than using a PAT.

* [About security hardening with OpenID Connect](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect)

### Integrating with 3rd Party Key Vaults/HSMs

There are third-party actions on the marketplace that will allow you to integrate with key vaults and HSMs.

<details>
  <summary>hashicorp/hashicorp-vault</summary>

```yml
jobs:
    build:
        # ...
        steps:
            # ...
            - name: Import Secrets
              id: import-secrets
              uses: hashicorp/vault-action@v2
              with:
                url: https://vault.mycompany.com:8200
                token: ${{ secrets.VAULT_TOKEN }}
                caCertificate: ${{ secrets.VAULT_CA_CERT }}
                secrets: |
                    secret/data/ci/aws accessKey | AWS_ACCESS_KEY_ID ;
                    secret/data/ci/aws secretKey | AWS_SECRET_ACCESS_KEY ;
                    secret/data/ci npm_token
            # ...
```
</details>

<details>
  <summary>Azure/cli</summary>

[Quickstart: Set and retrieve a secret from Azure Key Vault using Azure CLI](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-cli)
```yml
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Azure Login
      uses: azure/login@v2
      with:
        creds: ${{ secrets.AZURE_CREDENTIALS }}

    - name: Azure CLI script
      uses: azure/cli@v2
      with:
        azcliversion: latest
        inlineScript: |
          az keyvault secret show --name "ExamplePassword" --vault-name "<your-unique-keyvault-name>" --query "value"
```
</details>

## How to Create and Manage Runners

There are two types of runners: self-hosted and GitHub-hosted. GitHub has standardized runners for you, but you can also create larger runners with more resources.

### Ephemeral

GitHub runners are ephemeral meaning they are created on the fly and destroyed when the job is complete. This is the default behavior for GitHub-hosted runners.

<!-- ### Based on Azure -->

### Types and Sizes of Runners

| CPU | Memory (RAM) | Storage (SSD) | Architecture | Operating system (OS) |
|-----|--------------|---------------|--------------|------------------------|
| 6   | 14 GB        | 14 GB         | arm64        | macOS                  |
| 12  | 30 GB        | 14 GB         | x64          | macOS                  |
| 2   | 8 GB         | 75 GB         | x64, arm64   | Ubuntu                 |
| 4   | 16 GB        | 150 GB        | x64, arm64   | Ubuntu, Windows        |
| 8   | 32 GB        | 300 GB        | x64, arm64   | Ubuntu, Windows        |
| 16  | 64 GB        | 600 GB        | x64, arm64   | Ubuntu, Windows        |
| 32  | 128 GB       | 1200 GB       | x64, arm64   | Ubuntu, Windows        |
| 64  | 208 GB       | 2040 GB       | arm64        | Ubuntu, Windows        |
| 64  | 256 GB       | 2040 GB       | x64          | Ubuntu, Windows        |

> [!NOTE]
> The 4-vCPU Windows runner only works with the Windows 11 Desktop image.

> [!NOTE]
> Note: arm64 runners are currently in beta and subject to change.

GPU runners are also available.

| CPU | GPU | GPU card | Memory (RAM) | GPU memory (VRAM) | Storage (SSD) | Operating system (OS) |
|-----|-----|----------|--------------|-------------------|---------------|------------------------|
| 4   | 1   | Tesla T4 | 28 GB        | 16 GB             | 176 GB        | Ubuntu, Windows        |

### Auto-scaling and Scale Limits

If you hit scaling limits you can ask your AM or support to increase your concurrency limit.

* [Usage Limits](https://docs.github.com/en/actions/administering-github-actions/usage-limits-billing-and-administration#usage-limits)

### ARC: Actions Runtime Configuration

You can automatically scale your self-hosted runners in response to webhook events.

* [Autoscaling with self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners)

### Runner Groups

Runner groups simply allow you to manage which runners are available to which repositories. This is useful if you have a runner that is only available to a specific team.

* [Managing access to self-hosted runners using groups](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups)

<!-- ### Managed Runner GHR Images and Custom GHR Images -->

### GHR Networking

By default, GitHub-hosted runners have access to the public internet. However, you may also want these runners to access resources on your private network, such as a package registry, a secret manager, or other on-premise services.

* [Connecting to a private network with GitHub-hosted runners](https://docs.github.com/en/actions/using-github-hosted-runners/connecting-to-a-private-network)

#### API Gateways

You could run an API gateway on the edge of your private network that authenticates incoming requests with the OIDC token and then makes API requests on behalf of your workflow in your private network.

* [Using an API gateway with OIDC](https://docs.github.com/en/actions/using-github-hosted-runners/connecting-to-a-private-network/using-an-api-gateway-with-oidc)

#### Wireguard

* [Using WireGuard to create a network overlay](https://docs.github.com/en/actions/using-github-hosted-runners/connecting-to-a-private-network/using-wireguard-to-create-a-network-overlay)

#### Static IPs

You have the option to create static IP addresses for your GitHub-hosted runners. This is useful if you need to whitelist the IP address of your runner in a firewall rule, for example.

* [Creating static IP addresses for larger runners](https://docs.github.com/en/actions/using-github-hosted-runners/using-larger-runners/managing-larger-runners#creating-static-ip-addresses-for-larger-runners)

#### VNET Injection (Azure Private Networking)

You can use VNET injection to connect your GitHub-hosted runners to your Azure virtual network.

* [Configuring private networking for GitHub-hosted runners in your enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise)

### Runner Labels

You label your runners to make it easier to target them in your workflows.

<details>
  <summary>Example of using multiple runner labels</summary>

```yml
runs-on: [self-hosted, linux, x64, gpu]
```
</details>

* [Choosing the runner for a job](https://docs.github.com/en/enterprise-cloud@latest/actions/writing-workflows/choosing-where-your-workflow-runs/choosing-the-runner-for-a-job)
* [Using labels with self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners)

## How to Govern Usage

* [Enforcing policies for GitHub Actions in your enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)

### Rulesets

Rulesets are the new and improved branch protection rules, and configurable at the organization level! Rulesets help you to control how people can interact with branches and tags in a repository.

You can grant bypass permission for individuals, teams, apps, or roles.

You can evaluate rulesets before you make them active and monitor the impact of the ruleset on your organization.

* [Available rules for rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)

### Branch & Tag Rulesets

Branch rulesets allow you to control how people interact with branches.

One of the most powerful features of branch rulesets is the ability to require a workflow to pass before a pull request can be merged. This gives you the ability to enforce policies at the organization level.

### Push Rulesets

You can create push rulesets to block pushes to private or internal repositories and those repository's entire fork network.

Some common use cases include:
1. Preventing anyone except from CI/CD admins from pushing to the `.github/**/*` directory.
2. Restricting the accidental push of files like .env or .pem. Similar to a gitignore file, you can use a push ruleset to block pushes of files with specific names or extensions but at the server level.
3. Prevent large files from being pushed to your repositories.
4. Restrict file path length.

* [Push rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#push-rulesets)

### Environment Protection Rules: Custom Gating

Environment protection rules allow you to protect a job from running. This is useful if you have a sensitive job that you'd like to put controls around.

#### Required reviewers

You can require a specific number of reviewers to approve a job before it can run.

#### Wait timer

You can delay a job for a specified amount of time. This is useful if you want to give people a chance to cancel a job.

#### Custom gating

There are existing deployment protection rules via GitHub Apps. You can also create your own custom deployment protection rules.

* [Deployment protection rules](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment#deployment-protection-rules)
* [Configuring custom deployment protection rules](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/configuring-custom-deployment-protection-rules)
* [Creating custom deployment protection rules](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/creating-custom-deployment-protection-rules)

### Spending Limits and Budgets/Cost Centers

It's always a good idea to set spending limits to avoid accidents.

* [Managing your spending limit for GitHub Actions](https://docs.github.com/en/enterprise-cloud@latest/billing/managing-billing-for-your-products/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)

### Actions Policies

### Allow List for Marketplace Actions

You can allow only a specific list of actions to be used in your organization. This is useful if you want to prevent people from using actions that are not approved.

Wildcards are available and there are convenient toggles for github authored actions as well as actions created by verified creators.

* [Allowing select actions and reusable workflows to run](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#allowing-select-actions-and-reusable-workflows-to-runn)

### Enable/Disable Actions

You can choose to disable GitHub Actions or limit it to actions and reusable workflows in your organization.

* [Disabling or limiting GitHub Actions for your organization](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)

### Audit Log

Because of the enormous amount of events that can be generated by GitHub Actions, it is not always feasible to query the API for all events. Instead, you can stream the audit log to a SIEM or other log management solution.

* [Streaming the audit log for your enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)
* [Audit log events for your enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)

### Status Checks

Status checks let you know if your commits meet the conditions set for the repository you're contributing to.

You can see the pending, passing, or failing state of status checks next to individual commits in your pull request. 

A job that is skipped will report its status as "Success". It will not prevent a pull request from merging, even if it is a required check.

* [About status checks](https://docs.github.com/en/enterprise-cloud@latest/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)

## How to Observe What’s Going on with CI/CD

There are many ways to monitor and observe your GitHub Actions workflows. GitHub has minimal native functionality for this, but there are many third-party tools that can help you monitor your workflows. Everything is available via APIs and webhooks, so you can build your own monitoring solution.

* [Monitoring workflows](https://docs.github.com/en/enterprise-cloud@latest/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows)

### Actions Usage Metrics & Performance Metrics

Organization level metrics to help you identify usage and performance issues with GitHub Actions.

Under your organization insights you will find two tabs for GitHub Actions metrics: usage and performance.

[Actions usage metrics](https://docs.github.com/en/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/viewing-github-actions-metrics-for-your-organization#about-github-actions-usage-metrics) help you analyze actions minutes usage.

[Actions performance metrics](https://docs.github.com/en/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/viewing-github-actions-metrics-for-your-organization#about-github-actions-performance-metrics) enables you to analyze the efficiency and reliability of your workflows.

* [Viewing GitHub Actions metrics for your organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/viewing-github-actions-metrics-for-your-organization)

### Job Summaries

Job summaries are custom markdown associated with a job. This is a great place to provide a summary of the job such as test results, code coverage, or any other information that is relevant to the job.

<details>
  <summary>Example of adding a job summary</summary>

```bash
echo "### Hello world! :rocket:" >> $GITHUB_STEP_SUMMARY
```
</details>

If you're using JS the [Actions Toolkit](https://github.com/actions/toolkit#readme) provides a way to create job summaries using the `@actions/core` package.

<details>
  <summary>Example of adding a job using actions toolkit</summary>

```js
// Write raw text, optionally add an EOL after the content, defaults to false
core.summary.addRaw('Some content here :speech_balloon:', true)
// Output: Some content here :speech_balloon:\n

// Add an operating system-specific end-of-line marker
core.summary.addEOL()
// Output (POSIX): \n
// Output (Windows): \r\n

// Add a codeblock with an optional language for syntax highlighting
core.summary.addCodeBlock('console.log(\'hello world\')', 'javascript')
// Output: <pre lang="javascript"><code>console.log('hello world')</code></pre>

// Add a list, second parameter indicates if list is ordered, defaults to false
core.summary.addList(['item1','item2','item3'], true)
// Output: <ol><li>item1</li><li>item2</li><li>item3</li></ol>

// Add a collapsible HTML details element
core.summary.addDetails('Label', 'Some detail that will be collapsed')
// Output: <details><summary>Label</summary>Some detail that will be collapsed</details>

// Add an image, image options parameter is optional, you can supply one of or both width and height in pixels
core.summary.addImage('example.png', 'alt description of img', {width: '100', height: '100'})
// Output: <img src="example.png" alt="alt description of img" width="100" height="100">

// Add an HTML section heading element, optionally pass a level that translates to 'hX' ie. h2. Defaults to h1
core.summary.addHeading('My Heading', '2')
// Output: <h2>My Heading</h2>

// Add an HTML thematic break <hr>
core.summary.addSeparator()
// Output: <hr>

// Add an HTML line break <br>
core.summary.addBreak()
// Output: <br>

// Add an HTML blockquote with an optional citation
core.summary.addQuote('To be or not to be', 'Shakespeare')
// Output: <blockquote cite="Shakespeare">To be or not to be</blockquote>

// Add an HTML anchor tag
core.summary.addLink('click here', 'https://github.com')
// Output: <a href="https://github.com">click here</a>
```
</details>

* [Adding a job summary](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions#adding-a-job-summary)
* [Populating job summary](https://github.com/actions/toolkit/tree/main/packages/core#populating-job-summary)

### Alerting/Notifications: Finished, Failed

You may want to be notified when a workflow run finishes or fails.

#### GitHub Email & Web Notifications

GitHub sends email and web [notifications for workflow runs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/notifications-for-workflow-runs) you trigger. The notifications are for status (successful, failed, neutral, and canceled runs).

#### GitHub Actions Notifications

You can send the notification in the workflow itself.

<details>
  <summary>Example of notification on workflow failure</summary>

```yml
on:
  workflow_run:
    workflows: [Build]
    types: [completed]

jobs:
  slack:
    runs-on: ubuntu-latest
    steps:
    - name: Post a message in a channel
      uses: slackapi/slack-github-action@v2.1.0
      with:
        webhook: ${{ secrets.SLACK_WEBHOOK_URL }}
        webhook-type: incoming-webhook
        payload: |
          text: "*GitHub Action build result*: ${{ github.event.workflow_run.conclusion }}\n${{ github.event.pull_request.html_url || github.event.head_commit.url }}"
          blocks:
            - type: "section"
              text:
                type: "mrkdwn"
                text: "GitHub Action build result: ${{ github.event.workflow_run.conclusion }}\n${{ github.event.pull_request.html_url || github.event.head_commit.url }}"
```
</details>

<details>
  <summary>Example of notification on job failure</summary>

```yml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: ${{ always() }}
    needs: [job1, job2]
    steps:
    - name: Post a message in a channel
      uses: slackapi/slack-github-action@v2.1.0
      with:
        webhook: ${{ secrets.SLACK_WEBHOOK_URL }}
        webhook-type: incoming-webhook
        payload: |
          text: "*GitHub Action build result*: ${{ job.status }}\n${{ github.event.pull_request.html_url || github.event.head_commit.url }}"
          blocks:
            - type: "section"
              text:
                type: "mrkdwn"
                text: "GitHub Action build result: ${{ job.status }}\n${{ github.event.pull_request.html_url || github.event.head_commit.url }}"
```

</details>

* [Slack Send GitHub Action](https://github.com/marketplace/actions/slack-send-to-slack)

### GitHub Apps

There are many GitHub Apps that can help you monitor your workflows. Some of these apps can send notifications to Slack, Microsoft Teams, or other chat platforms.

* [Microsoft Teams for GitHub](https://github.com/marketplace/microsoft-teams-for-github)
* [Slack + GitHub](https://github.com/marketplace/slack-github)

#### Webhooks

You can also configure webhooks to send notifications to a third-party service. 

* [Webhooks](https://docs.github.com/en/webhooks)
* [workflow_run](https://docs.github.com/en/webhooks/webhook-events-and-payloads#workflow_run)
* [workflow_job](https://docs.github.com/en/webhooks/webhook-events-and-payloads#workflow_job)
* [workflow_dispatch](https://docs.github.com/en/webhooks/webhook-events-and-payloads#workflow_dispatch)

### 3rd Party Tools: DataDog, Trunk, etc.

There are many third-party tools that provide a richer monitoring experience for GitHub Actions. These tools can provide insights into your workflows, such as run history, performance metrics, and more.

#### [Datadog](https://docs.datadoghq.com/continuous_integration/pipelines/github/)

Datadog provides great CI visibility and monitoring capabilities.

* [Set up CI Visibility on GitHub Actions Workflows](https://docs.datadoghq.com/continuous_integration/pipelines/github/)
* [Blog: Monitor your CI pipelines and tests with Datadog CI Visibility](https://www.datadoghq.com/blog/datadog-ci-visibility/)
* [Blog: Monitor your GitHub Actions workflows with Datadog CI Visibility](https://www.datadoghq.com/blog/datadog-github-actions-ci-visibility/)

#### [Trunk](https://trunk.io/flaky-tests)

Trunk detects, quarantines, and eliminates flaky tests from your code base. Works with any language, any test runner, and any CI provider.

### Stats on Runner Utilization

There is no native solution to monitor CPU, Disk, and Memory usage of your GitHub Actions runners. You can use third-party tools to monitor your runners.

#### Telemetry Action

* [workflow-telemetry Action](https://github.com/marketplace/actions/workflow-telemetry) - This action collects metrics during runtime and produces a job summary report to view.

### Workflow Run History

You can view the history of workflow runs in the Actions tab of your repository.

The organization level [actions usage & performance metrics](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/actions-usage-metrics--performance-metrics) also provides insights into workflow run history.

* [Monitoring workflows](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows)
* [Viewing workflow run history](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/viewing-workflow-run-history)
* [REST API endpoints for workflow runs](https://docs.github.com/en/rest/actions/workflow-runs?apiVersion=2022-11-28)

### Pinning and Searching Workflows

You can pin workflows in the left sidebar of the Actions tab to make them easier to find.

You can search workflow runs by actor, branch, event, status, and workflow name.

Workflows are always sorted by the most recent run.

### Logging

You can view logs for each step in a workflow run.

You can also search logs for specific text in a more performant way than CTRL+F.

#### Retention

Workflow run logs are retained for 90 days by default. You can [configure the retention period for workflow run logs](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) at the organization or repository level up to 90 days for public repos or 400 days for private repos.

#### Formatting

There are numerous ways to format logs such as annotations, grouping, masking, coloring, etc. You can do it manually or use the [actions/toolkit](https://github.com/actions/toolkit/tree/main/packages/core#logging) to help you format your logs.

![image](https://github.com/user-attachments/assets/03231846-05c8-44b2-862a-b264f93b044f)

* [Workflow run logs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/using-workflow-run-logs)
* [Enable debug logging](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/enabling-debug-logging)
* [Workflow commands for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#about-workflow-commands)
* [Configuring the retention period for GitHub Actions artifacts and logs in your organization](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)

## How to Manage Cost and Billing

GitHub Actions is a metered product so we need to be careful about how we use it to avoid unexpected costs.

### Pricing

GitHub Actions is free for public repositories. For private repositories, GitHub offers a range of pricing plans based on usage.

See [Cost](#cost) for more information on pricing.

### Billing Page in GitHub

Budgets and alerts allow you to track spending on metered products for your accounts, organizations, cost centers (enterprise only), and repositories.

* [Using budgets to control spending on metered products](https://docs.github.com/en/enterprise-cloud@latest/billing/managing-your-billing/using-budgets-control-spending)
* [Charging business units](https://docs.github.com/en/enterprise-cloud@latest/billing/managing-your-billing/charging-business-units)

### CSV Usage Download and GitHub Usage Report Viewer

You can download a CSV file of all metered usage for your account, organization, or repository. This is useful for analyzing usage and costs.

* [Viewing your usage of metered products](https://docs.github.com/en/billing/managing-billing-for-your-products/viewing-your-product-usage)
* [About usage reports](https://docs.github.com/en/billing/managing-your-billing/about-usage-reports)

#### [GitHub Usage Report Viewer](https://austenstone.github.io/github-actions-usage-report/)

[austenstone](https://github.com/austenstone) created a usage report viewer to visualize your usage report csv.

### Invoicing

GitHub Actions usage is billed monthly. You can view your invoice in the billing settings of your account or organization.

### Paying Through GitHub vs MSFT Azure

GitHub Actions can be billed through and azure subscription. This also means discounts applied to that Azure subscription will apply to GitHub Actions usage.

If you're not using an Azure subscription, you can pay for GitHub Actions usage monthly through GitHub.

## [How to Migrate](https://docs.github.com/en/actions/migrating-to-github-actions)

There are many ways to migrate to GitHub Actions. The best way to migrate depends on your current CI/CD system and how complex your workflows are.

### [Importer](https://docs.github.com/en/actions/migrating-to-github-actions/using-github-actions-importer-to-automate-migrations)

The GitHub Actions Importer can be a great first step in migrating but it will not cover all use cases.

The importer includes forecasting capabilities to help you understand the cost of migrating to GitHub Actions.

### Copilot

You can leverage [GitHub Copilot](https://github.com/features/copilot/plans) to help you write workflows. Copilot greatly accelerates the process of writing workflows if you can provide it context and your old workflow files.

## Understanding Platform Limits

There are numerous platforms limits in place to ensure the stability and reliability of GitHub Actions.

A majority of the limits can be adjusted by contacting GitHub support or your account manager.

* [Limits in GitHub Actions](https://docs.github.com/en/actions/reference/actions-limits)
* [Concurrency Limits](https://docs.github.com/en/actions/concepts/overview/usage-limits-billing-and-administration#usage-limits)

<!-- ### API Rate Limits

The API is a dependent service and has its own rate limits.

GitHub Apps have higher rate limits than PATs. GitHub can increase rate limits for GitHub Apps on a case-by-case basis.

* [Commonly hit dependent service limits](https://docs.github.com/en/actions/reference/actions-limits#commonly-hit-dependent-service-limits)

### [Reusable Workflow](#reusable-workflows) Limit

[Reusable workflows](#reusable-workflows) have some limitations that you should be aware of. Most notably:
* You can only nest them up to 4 levels deep
* You can call a maximum of 20 unique reusable workflows in a single workflow run
* env is in a different context

* [Reusable workflow limitations](https://docs.github.com/en/actions/sharing-automations/reusing-workflows#limitations)

For this reason consider using [composite actions](#composite-actions) first.

### Workflow Run Time

The maximum workflow execution time is 35 days. If a workflow run reaches this limit, the workflow run is cancelled. This period includes execution duration, and time spent on waiting and approval.

### Job Execution Time

For github-hosted runners each job in a workflow can run for up to 6 hours of execution time. If a job reaches this limit, the job is terminated and fails.

For self-hosted runners, there is no execution time limit.

### Matrix Size

A job matrix can generate a maximum of 256 jobs per workflow run. This limit applies to both GitHub-hosted and self-hosted runners.

Cache Size per Repo

Each repository has a maximum cache size of 10 GB. If a repository exceeds this limit, the oldest cache entries will be removed to make room for new ones.

### Queue Limit

You can have a maximum of 500 workflow runs queued every 10 seconds.

### Artifact and Log Retention

Artifacts and logs are retained for 90 days. After this period, they are automatically deleted. -->

### Exception Process

If you need to increase any of the limits, you can contact GitHub support or your account manager. They will review your request and may grant an exception on a case-by-case basis.