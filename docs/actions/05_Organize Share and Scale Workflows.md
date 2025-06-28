# How to Organize, Share, and Scale Workflows

One of the most powerful features of GitHub Actions is the ability to share workflows across repositories. This is useful if you have a common workflow that you want to use in multiple repositories.

## Reusable Workflows

These are reusable jobs. They are a great way to share common logic across multiple workflows or just to organize your workflow into smaller, more manageable pieces.

### Why?

* Easier to maintain
* Create workflows more quickly
* Avoid duplication. DRY(don't repeat yourself).
* Build consistently across multiple, dozens, or even hundreds of repositories
* Require specific workflows for specific deployments
* Promotes best practices
* Abstract away complexity

### What can they do

* Can have inputs and outputs
* Can be nested 4 levels deep
* Only 20 unique reusable workflows can be in a single workflow
* Environment variables are not propagated to the reusable workflow
* Secrets are scoped to the caller workflow
* Secrets need to be passed to the reusable workflow

<details>
  <summary>Example of a reusable workflow</summary>

#### Defining the workflow (reusable-called.yml)

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

#### Using the workflow (caller.yml)

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

## Composite Actions

These are reusable steps. Use a composite action to combine(re-use) multiple steps.

> [!TIP]
> These are far less limited than reusable workflows. Consider using composite actions over reusable workflows to start.

<details>
  <summary>Example of a composite action</summary>

#### Defining the action (hello-world-composite-action.yml)

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

#### Using the action (caller.yml)

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

## Rulesets (Required workflows & Required checks)

A new version of branch protection rules called rulesets allows you to require specific workflows to run before a pull request can be merged. These can be defined at the org level or the repo level.

> [!IMPORTANT]
> This means you can now create `pull_request` workflows at the organization level and apply them to some or all of your repos!

* [Rulesets](https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)
* [Require workflows to pass before merging](https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-workflows-to-pass-before-merging)
* [Require status checks to pass before merging](https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-status-checks-to-pass-before-merging)

## Starter Workflows

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

## Managing Updates to Workflows/Actions

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

## Monorepo vs Polyrepo

GitHub Actions is obvious when dealing with a single repository, but what about when you have multiple repositories that depend on each other?

### Monorepo

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

### Polyrepo

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
