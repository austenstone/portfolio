# Intro to Concepts

There are a few concepts that are important to understand when working with GitHub Actions.

## Definitions

Some basic definitions to get us started...

![overview-actions-simple](/assets/screenshots/overview-actions-simple.png)

### [Workflow](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions#workflows)

A workflow is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository in the `.github/workflows` directory. A repository can have multiple workflows, each of which can perform a different set of tasks.

### [Events](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions#events)

An event is a specific activity in a repository that triggers a workflow run. It could be triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.

### [Jobs](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions#jobs)

A job is a set of steps in a workflow that is executed on the same runner. Each step is either a shell script that will be executed, or an action that will be run. Steps are executed in order and are dependent on each other. Since each step is executed on the same runner, you can share data from one step to another.

### [Steps / Actions](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions#actions)

A step can be a script that will be executed or a GitHub action.

### [Runners](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions#runners)

A runner is a server that runs your workflows when they're triggered. Each runner can run a single job at a time.

* GHR: GitHub-Hosted Runner
* SHR: Self-Hosted Runner

## Action: Marketplace Action, Custom Actions (Composite Action)

An action is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task. Use an action to help reduce the amount of repetitive code that you write in your workflow files. 

An action can pull your git repository from GitHub, set up the correct toolchain for your build environment, or set up the authentication to your cloud provider.

You can write your own actions, or you can find actions to use in your workflows in the [GitHub Marketplace](https://github.com/marketplace?type=actions).

For more information, see [Creating actions](https://docs.github.com/en/actions/creating-actions).

## Runner: GitHub-Hosted Runner vs. Self-Hosted Runner

You can run your jobs on GitHub Hosted compute or you can host your own Self Hosted runners.

The standard runners GitHub offers are:
* `ubuntu-latest`
* `windows-latest`
* `macos-latest`

There are also [Larger runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-larger-runners/about-larger-runners#specifications-for-general-larger-runners) for more demanding use cases.

* [About Larger Runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-larger-runners)

![Actions _ Overview   Tech Requirements Check](https://github.com/user-attachments/assets/89eb287f-e840-4ea6-8f0c-d3277fd5c941)

### Cost

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

## Autoscaling with self-hosted runners (ARC)

You can automatically increase or decrease the number of self-hosted runners in your environment in response to the webhook events you receive with a particular label.

* [Autoscaling with self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners)
* [actions-runner-controller](https://github.com/actions/actions-runner-controller)

<!-- ## GitHub Actions Ethos

## Essence/Opinionation

## Traceability

## Reusability (DRY)

## Ephemerality

## Extensibility: Do Anything You Want

## Easy to Get Started

# How to Author Workflow Files -->

## The Developer Loop: Writing, Testing, Debugging

Writing a workflow file is as simple as creating a `.yml` file in the `.github/workflows` directory of your repository.

To test your workflow file you will push it to your repository and navigate to the Actions tab to see the status of your workflow run.

When the workflow run is complete you can view the logs of each step to see what happened.

## GitHub CLI

The GitHub CLI brings GitHub to the terminal. It's also preinstalled on all GitHub runners!

If you need to quickly perform a GitHub task this is the easiest way to do it!

<details>
  <summary>Comment on an issue</summary>

```yml hljs
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

## VS Code extension

There is a VS Code extension that provides syntax highlighting, intellisense, and more! This is a must have when authoring workflows.

[GitHub Actions Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions)

![alt text](/assets/screenshots/vscode-extension-1.png)

## Copilot

GitHub Copilot is an AI pair programmer that helps you write code faster and with less effort. It can be incredibly useful when writing GitHub Actions workflows. Leverage the completion or chat feature to get help with writing your workflows.

[GitHub Copilot](https://copilot.github.com/)

## Actions Loves JavaScript

One of the most popular languages for writing actions is JavaScript. This is because it is easy to get started with and has a lot of community support.

### GitHub Actions ToolKit

The GitHub Actions ToolKit provides a set of packages to make creating actions easier.

* [Actions Toolkit](https://github.com/actions/toolkit?tab=readme-ov-file#readme)
* [Creating a JavaScript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)

## Github-script

This action makes it easy to quickly write a script in your workflow that uses the GitHub API and the workflow run context. The GitHub Actions Toolkit is pre-installed and available for use in the script you write.

<details>
  <summary>Welcome a first-time contributor</summary>

```yml hljs
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

```yml hljs
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

## Expressions

You can use expressions to programmatically set environment variables in workflow files and access contexts. An expression can be any combination of literal values, references to a context, or functions. You can combine literals, context references, and functions using operators. For more information about contexts, see "Contexts."

### Literals

You can use boolean, null, number, or string data types.

<details>
  <summary>Example of literals</summary>

```yml hljs
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

### Operators

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

### Functions

You can use functions to transform data or to perform operations.

* [contains](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#contains)
* [startswith](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#startswith)
* [endsWith](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#endswith)
* [format](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#format)
* [join](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#join)
* [toJson](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#tojson)
* [fromJson](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#fromjson)
* [hashFiles](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#hashfiles)

### Status Check functions

* [success](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#success)
* [always](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#always)
* [cancelled](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#cancelled)
* [failure](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/expressions#failure)
