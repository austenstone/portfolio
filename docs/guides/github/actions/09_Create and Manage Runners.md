# How to Create and Manage Runners

There are two types of runners: self-hosted and GitHub-hosted. GitHub has standardized runners for you, but you can also create larger runners with more resources.

## Ephemeral

GitHub runners are ephemeral meaning they are created on the fly and destroyed when the job is complete. This is the default behavior for GitHub-hosted runners.

<!-- ## Types and Sizes of Runners -->

## Auto-scaling and Scale Limits

If you hit scaling limits you can ask your AM or support to increase your concurrency limit.

* [Usage Limits](https://docs.github.com/en/actions/administering-github-actions/usage-limits-billing-and-administration#usage-limits)

## ARC: Actions Runtime Configuration

You can automatically scale your self-hosted runners in response to webhook events.

* [Autoscaling with self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners)

## Runner Groups

Runner groups simply allow you to manage which runners are available to which repositories. This is useful if you have a runner that is only available to a specific team.

* [Managing access to self-hosted runners using groups](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups)

## GHR Networking

By default, GitHub-hosted runners have access to the public internet. However, you may also want these runners to access resources on your private network, such as a package registry, a secret manager, or other on-premise services.

* [Connecting to a private network with GitHub-hosted runners](https://docs.github.com/en/actions/using-github-hosted-runners/connecting-to-a-private-network)

### API Gateways

You could run an API gateway on the edge of your private network that authenticates incoming requests with the OIDC token and then makes API requests on behalf of your workflow in your private network.

* [Using an API gateway with OIDC](https://docs.github.com/en/actions/using-github-hosted-runners/connecting-to-a-private-network/using-an-api-gateway-with-oidc)

### Wireguard

* [Using WireGuard to create a network overlay](https://docs.github.com/en/actions/using-github-hosted-runners/connecting-to-a-private-network/using-wireguard-to-create-a-network-overlay)

### Static IPs

You have the option to create static IP addresses for your GitHub-hosted runners. This is useful if you need to whitelist the IP address of your runner in a firewall rule, for example.

* [Creating static IP addresses for larger runners](https://docs.github.com/en/actions/using-github-hosted-runners/using-larger-runners/managing-larger-runners#creating-static-ip-addresses-for-larger-runners)

### VNET Injection (Azure Private Networking)

You can use VNET injection to connect your GitHub-hosted runners to your Azure virtual network.

* [Configuring private networking for GitHub-hosted runners in your enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise)

## Runner Labels

You label your runners to make it easier to target them in your workflows.

<details>
  <summary>Example of using multiple runner labels</summary>

```yml hljs
runs-on: [self-hosted, linux, x64, gpu]
```
</details>

* [Choosing the runner for a job](https://docs.github.com/en/enterprise-cloud@latest/actions/writing-workflows/choosing-where-your-workflow-runs/choosing-the-runner-for-a-job)
* [Using labels with self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners)
