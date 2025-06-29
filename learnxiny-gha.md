# Learn GitHub Actions in Y Minutes
# Based on learnxinyminutes.com docs
# MIT License

# Prereqs: you already know programming basics—this is just syntax.
# ## 1. Hello World - Basic Workflow
name: Learn GitHub Actions                    # workflow name
run-name: Run by ${{ github.actor }}         # custom run display name

on: push                                      # trigger on any push

jobs:
  hello:
    runs-on: ubuntu-latest                    # runner environment
    steps:
      - run: echo "Hello, GitHub Actions!"    # simple command

# ## 2. Triggers & Events
on:
  push:                                       # git push
    branches: [main, develop]                 # specific branches
    paths: ['src/**', '!docs/**']            # path filters
  pull_request:                              # PRs
    branches: [main]
  workflow_dispatch:                         # manual trigger
    inputs:
      environment:
        description: 'Environment to deploy'
        required: true
        default: 'staging'
        type: choice
        options: [staging, production]
  schedule:
    - cron: '0 9 * * 1'                      # mondays at 9am UTC

# ## 3. Environment & Variables
env:
  NODE_VERSION: 18                           # workflow-level env vars
  API_URL: https://api.example.com

jobs:
  variables:
    runs-on: ubuntu-latest
    env:
      JOB_ENV: development                   # job-level env vars
    steps:
      - run: |
          echo "NODE_VERSION: $NODE_VERSION"
          echo "Branch: ${{ github.ref_name }}"
          echo "Actor: ${{ github.actor }}"
        env:
          STEP_ENV: local                    # step-level env vars

# ## 4. Job Dependencies & Outputs
jobs:
  setup:
    runs-on: ubuntu-latest
    outputs:
      version: ${{ steps.get-version.outputs.version }}
    steps:
      - id: get-version
        run: echo "version=1.2.3" >> $GITHUB_OUTPUT

  build:
    needs: setup                             # wait for setup
    runs-on: ubuntu-latest
    steps:
      - run: echo "Building version ${{ needs.setup.outputs.version }}"

  deploy:
    needs: [setup, build]                    # wait for multiple jobs
    if: github.ref == 'refs/heads/main'     # conditional execution
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production"

# ## 5. Matrix Strategy
jobs:
  test:
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node: [16, 18, 20]
        exclude:
          - os: windows-latest
            node: 16
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
      - run: npm test

# ## 6. Actions & Marketplace
jobs:
  actions:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4            # checkout code
      - uses: actions/setup-node@v4          # setup runtime
        with:
          node-version: 18
          cache: npm
      - uses: actions/cache@v3               # cache dependencies
        with:
          path: ~/.npm
          key: ${{ runner.os }}-npm-${{ hashFiles('package-lock.json') }}
      - run: npm ci
      - run: npm test

# ## 7. Artifacts & Sharing
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: |
          mkdir dist
          echo "Built app" > dist/app.js
      - uses: actions/upload-artifact@v4     # upload artifacts
        with:
          name: build-files
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/download-artifact@v4   # download artifacts
        with:
          name: build-files
          path: dist/
      - run: ls -la dist/

# ## 8. Secrets & Security
jobs:
  secure:
    runs-on: ubuntu-latest
    permissions:                             # minimal permissions
      contents: read
      issues: write
    steps:
      - run: |
          curl -H "Authorization: Bearer $API_TOKEN" api.example.com
        env:
          API_TOKEN: ${{ secrets.API_TOKEN }} # use secrets

# ## 9. Services & Containers
jobs:
  test-with-db:
    runs-on: ubuntu-latest
    services:
      postgres:                              # service container
        image: postgres:13
        env:
          POSTGRES_PASSWORD: postgres
        ports:
          - 5432:5432
        options: --health-cmd pg_isready --health-interval 10s
    steps:
      - run: |
          sudo apt-get install -y postgresql-client
          PGPASSWORD=postgres psql -h localhost -U postgres -c 'SELECT 1'

  container-job:
    runs-on: ubuntu-latest
    container:                               # job in container
      image: node:18
      env:
        NODE_ENV: production
    steps:
      - run: node --version

# ## 10. Workflow Commands
jobs:
  commands:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "MY_VAR=hello" >> $GITHUB_ENV          # set env var
          echo "result=success" >> $GITHUB_OUTPUT     # set output
          echo "$HOME/bin" >> $GITHUB_PATH            # add to PATH
          echo "::notice::Build completed"            # annotations
          echo "::warning::Deprecated feature used"
          echo "::error::Build failed"
          echo "::group::Installing deps"             # group logs
          echo "Installing..."
          echo "::endgroup::"
          echo "## Summary" >> $GITHUB_STEP_SUMMARY   # job summary
          echo "Build successful! 🎉" >> $GITHUB_STEP_SUMMARY

# ## 11. Advanced Patterns
concurrency:                                # prevent concurrent runs
  group: ci-${{ github.ref }}
  cancel-in-progress: true

defaults:                                   # default settings
  run:
    shell: bash
    working-directory: ./src

jobs:
  advanced:
    runs-on: ubuntu-latest
    timeout-minutes: 30                     # job timeout
    environment:                            # deployment environment
      name: production
      url: https://myapp.com
    steps:
      - uses: actions/checkout@v4
      - run: echo "Building..."
        timeout-minutes: 5                  # step timeout
        continue-on-error: true             # don't fail job
      - if: failure()                       # conditional on failure
        run: echo "Build failed, but continuing"

# ## 12. Reusable Workflows
# .github/workflows/reusable.yml
on:
  workflow_call:                            # callable workflow
    inputs:
      environment:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to ${{ inputs.environment }}"

# Call reusable workflow
jobs:
  call-workflow:
    uses: ./.github/workflows/reusable.yml
    with:
      environment: production
    secrets:
      token: ${{ secrets.DEPLOY_TOKEN }}

# ## 13. Expressions & Functions
jobs:
  expressions:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "${{ github.event_name }}"              # context access
          echo "${{ toJSON(github) }}"                 # convert to JSON
          echo "${{ fromJSON('{"key":"value"}').key }}" # parse JSON
          echo "${{ format('Hello {0}!', 'world') }}"   # format string
          echo "${{ contains('hello world', 'hello') }}" # string functions
          echo "${{ startsWith(github.ref, 'refs/heads/') }}"
          echo "${{ hashFiles('package*.json') }}"      # file hashing

# ## 14. Common Contexts
# ${{ github.actor }}          - user who triggered
# ${{ github.event_name }}     - push, pull_request, etc
# ${{ github.ref }}            - refs/heads/main
# ${{ github.ref_name }}       - main
# ${{ github.sha }}            - commit SHA
# ${{ github.repository }}     - owner/repo
# ${{ github.run_number }}     - auto-incrementing number
# ${{ runner.os }}             - Linux, Windows, macOS
# ${{ env.VAR_NAME }}          - environment variables
# ${{ secrets.SECRET_NAME }}   - repository secrets
# ${{ steps.step-id.outputs.name }} - step outputs
# ${{ needs.job-id.outputs.name }}  - job outputs

# ## 15. Gotchas & Best Practices
# - Use specific action versions: @v4, not @main
# - Set minimal permissions for GITHUB_TOKEN
# - Use environments for production deployments
# - Cache dependencies to speed up builds
# - Use matrix strategy for multi-platform testing
# - Pin runner versions: ubuntu-22.04 vs ubuntu-latest
# - Secrets are automatically masked in logs
# - Steps run in the same runner but jobs run in parallel
# - Use continue-on-error sparingly
# - workflow_dispatch enables manual triggers

# End of file – you just learned GitHub Actions in Y minutes!
