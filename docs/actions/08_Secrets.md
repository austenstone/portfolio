# Secrets

Secrets are variables that you create in an organization, repository, or repository environment. The secrets that you create are available to use in a GitHub Actions workflows. GitHub Actions can only read a secret if you explicitly include the secret in a workflow.

GitHub redacts secrets from logs, but you should still be careful about what you log.

Sensitive secrets should leverage environments because environments have protection rules that can be used to gate access to the secrets. This includes which branch the secret can be accessed from. If you combine this with branch protection rules you can create a very secure system.

* [Using secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions#using-secrets)

## Reusable Workflows and Secrets

You must explicitly pass secrets to a reusable workflow. This is because secrets are scoped to the caller workflow.

## OIDC Access to Cloud Environments

GitHub Actions can now use OIDC tokens to authenticate to cloud environments. This is a more secure way to authenticate to cloud environments than using a PAT.

* [About security hardening with OpenID Connect](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect)

## Integrating with 3rd Party Key Vaults/HSMs

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
