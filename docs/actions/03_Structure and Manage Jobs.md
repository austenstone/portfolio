# How to Structure/Manage Jobs in the Workflow

## Parallelization of Jobs

By default all jobs in a workflow run in parallel. You can control the order of jobs by specifying dependencies.

## Matrices

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

## Ordering Jobs

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

## Job Timeouts

You can define a timeout for a job, and if the job takes longer than the timeout to run, the job will be cancelled.

The default timeout for a job is 6 hours or 360 minutes.

> [!NOTE]
> The `GITHUB_TOKEN` expires after the job finishes or 24 hours. This is a limiting factor for SHRs.

* [`jobs.<job_id>.steps[*].timeout-minutes`](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#jobsjob_idstepstimeout-minutes)
* [`jobs.<job_id>.timeout-minutes`](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes)

## Running Jobs in Containers / Service Containers

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

## Environments: Controls How/When a Job is Run Based on Protection Rules Set, Limits Branches, Scopes Secrets

You can create environments and secure those environments with deployment protection rules. A job that references an environment must follow any protection rules for the environment before running or accessing the environment's secrets.

Scoping secrets to an environment is very powerful because of the controls it gives you. You can limit which branches can access the secrets, and you can leverage the environment protection rules to control when a job can access the secrets.

### Environment Protection Rules

Deployment protection rules require specific conditions to pass before a job referencing the environment can proceed.

#### Required Reviewers

You can require that specific individuals or teams review a pull request before a job can proceed.

#### Wait timer

You can delay a job for a specific amount of time before it can proceed.

#### Branch restrictions

You can restrict which branches or tags can access the environment.

#### Admin bypass

You can allow or disallow repository administrators to bypass the protection rules.

#### Custom deployment protection rules

You can create custom deployment protection rules to gate deployments with third-party services.

* [Deployment Protection Rules](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment#deployment-protection-rules)
* [Configuring custom deployment protection rules](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/configuring-custom-deployment-protection-rules)
* [Environment Secrets](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment#environment-secrets)

## Conditional Jobs/Steps

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

## Permissions for Jobs

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

### GitHub Apps

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
