# Caching

GitHub Actions has a 10Gb rotating cache that you can leverage for any use case. This is usually used to speed up workflows.

> [!NOTE]
> GitHub will remove any cache entries that have not been accessed in over 7 days. There is no limit on the number of caches you can store, but the total size of all caches in a repository is limited to 10 GB. Once a repository has reached its maximum cache storage, the cache eviction policy will create space by deleting the oldest caches in the repository.

<details>
  <summary>Example of caching dependencies to speed up workflows</summary>

## Gradle

```yml
- name: Cache Gradle packages
  uses: actions/cache@v3
  with:
    path: |
      ~/.gradle/caches
      ~/.gradle/wrapper
```

## NPM Cache
  
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
