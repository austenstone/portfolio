# How to Observe What's Going on with CI/CD

There are many ways to monitor and observe your GitHub Actions workflows. GitHub has minimal native functionality for this, but there are many third-party tools that can help you monitor your workflows. Everything is available via APIs and webhooks, so you can build your own monitoring solution.

* [Monitoring workflows](https://docs.github.com/en/enterprise-cloud@latest/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows)

## Actions Usage Metrics & Performance Metrics

Organization level metrics to help you identify usage and performance issues with GitHub Actions.

Under your organization insights you will find two tabs for GitHub Actions metrics: usage and performance.

[Actions usage metrics](https://docs.github.com/en/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/viewing-github-actions-metrics-for-your-organization#about-github-actions-usage-metrics) help you analyze actions minutes usage.

[Actions performance metrics](https://docs.github.com/en/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/viewing-github-actions-metrics-for-your-organization#about-github-actions-performance-metrics) enables you to analyze the efficiency and reliability of your workflows.

* [Viewing GitHub Actions metrics for your organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/viewing-github-actions-metrics-for-your-organization)

## Job Summaries

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

## Alerting/Notifications: Finished, Failed

You may want to be notified when a workflow run finishes or fails.

### GitHub Email & Web Notifications

GitHub sends email and web [notifications for workflow runs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/notifications-for-workflow-runs) you trigger. The notifications are for status (successful, failed, neutral, and canceled runs).

### GitHub Actions Notifications

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

## GitHub Apps

There are many GitHub Apps that can help you monitor your workflows. Some of these apps can send notifications to Slack, Microsoft Teams, or other chat platforms.

* [Microsoft Teams for GitHub](https://github.com/marketplace/microsoft-teams-for-github)
* [Slack + GitHub](https://github.com/marketplace/slack-github)

### Webhooks

You can also configure webhooks to send notifications to a third-party service. 

* [Webhooks](https://docs.github.com/en/webhooks)
* [workflow_run](https://docs.github.com/en/webhooks/webhook-events-and-payloads#workflow_run)
* [workflow_job](https://docs.github.com/en/webhooks/webhook-events-and-payloads#workflow_job)
* [workflow_dispatch](https://docs.github.com/en/webhooks/webhook-events-and-payloads#workflow_dispatch)

## 3rd Party Tools: DataDog, Trunk, etc.

There are many third-party tools that provide a richer monitoring experience for GitHub Actions. These tools can provide insights into your workflows, such as run history, performance metrics, and more.

### [Datadog](https://docs.datadoghq.com/continuous_integration/pipelines/github/)

Datadog provides great CI visibility and monitoring capabilities.

* [Set up CI Visibility on GitHub Actions Workflows](https://docs.datadoghq.com/continuous_integration/pipelines/github/)
* [Blog: Monitor your CI pipelines and tests with Datadog CI Visibility](https://www.datadoghq.com/blog/datadog-ci-visibility/)
* [Blog: Monitor your GitHub Actions workflows with Datadog CI Visibility](https://www.datadoghq.com/blog/datadog-github-actions-ci-visibility/)

### [Trunk](https://trunk.io/flaky-tests)

Trunk detects, quarantines, and eliminates flaky tests from your code base. Works with any language, any test runner, and any CI provider.

## Stats on Runner Utilization

There is no native solution to monitor CPU, Disk, and Memory usage of your GitHub Actions runners. You can use third-party tools to monitor your runners.

### Telemetry Action

* [workflow-telemetry Action](https://github.com/marketplace/actions/workflow-telemetry) - This action collects metrics during runtime and produces a job summary report to view.

## Workflow Run History

You can view the history of workflow runs in the Actions tab of your repository.

The organization level [actions usage & performance metrics](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/actions-usage-metrics--performance-metrics) also provides insights into workflow run history.

* [Monitoring workflows](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows)
* [Viewing workflow run history](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/viewing-workflow-run-history)
* [REST API endpoints for workflow runs](https://docs.github.com/en/rest/actions/workflow-runs?apiVersion=2022-11-28)

## Pinning and Searching Workflows

You can pin workflows in the left sidebar of the Actions tab to make them easier to find.

You can search workflow runs by actor, branch, event, status, and workflow name.

Workflows are always sorted by the most recent run.

## Logging

You can view logs for each step in a workflow run.

You can also search logs for specific text in a more performant way than CTRL+F.

### Retention

Workflow run logs are retained for 90 days by default. You can [configure the retention period for workflow run logs](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) at the organization or repository level up to 90 days for public repos or 400 days for private repos.

### Formatting

There are numerous ways to format logs such as annotations, grouping, masking, coloring, etc. You can do it manually or use the [actions/toolkit](https://github.com/actions/toolkit/tree/main/packages/core#logging) to help you format your logs.

![image](https://github.com/user-attachments/assets/03231846-05c8-44b2-862a-b264f93b044f)

* [Workflow run logs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/using-workflow-run-logs)
* [Enable debug logging](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/enabling-debug-logging)
* [Workflow commands for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#about-workflow-commands)
* [Configuring the retention period for GitHub Actions artifacts and logs in your organization](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
