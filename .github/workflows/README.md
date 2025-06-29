# GitHub Actions Cheat Sheet

This comprehensive GitHub Actions workflow serves as a "Learn X in Y Minutes" style tutorial demonstrating all the key concepts of GitHub Actions in a single, executable file.

## What This Demonstrates

### Basic Concepts
- **Workflow Structure**: Events, jobs, steps, and their relationships
- **Triggers**: Push, pull request, manual dispatch, and scheduled events
- **Path and Branch Filtering**: Complex patterns for selective execution
- **Environment Variables**: Workflow, job, and step-level variables

### Advanced Features
- **Matrix Strategies**: Running jobs across multiple configurations
- **Job Dependencies**: Sequential and conditional job execution
- **Services**: Database and cache services (PostgreSQL, Redis)
- **Containers**: Running jobs in custom Docker containers
- **Artifacts**: Uploading and downloading build outputs

### Expressions and Functions
- **Context Objects**: `github`, `env`, `vars`, `secrets`, `steps`, `needs`, etc.
- **String Functions**: `contains()`, `startsWith()`, `endsWith()`, `format()`
- **JSON Functions**: `toJSON()`, `fromJSON()`, `join()`
- **Status Functions**: `success()`, `failure()`, `always()`, `cancelled()`
- **File Functions**: `hashFiles()` for caching strategies

### Workflow Commands
- **Environment Variables**: Setting and using environment variables
- **Step Outputs**: Passing data between steps
- **Path Modification**: Adding directories to system PATH
- **Annotations**: Debug, notice, warning, and error messages
- **Log Grouping**: Organizing output with collapsible groups
- **Job Summaries**: Adding Markdown summaries to workflow runs
- **Masking**: Hiding sensitive data in logs

### Custom Actions
- **Composite Actions**: Creating reusable action components
- **Action Inputs/Outputs**: Parameterizing actions

## File Structure

The cheat sheet is organized into several jobs:

1. **basic-job**: Fundamental workflow concepts
2. **build-matrix**: Matrix strategies and job dependencies
3. **container-job**: Container execution
4. **services-job**: Service containers (databases, caches)
5. **deploy**: Deployment patterns with environments
6. **expressions-job**: GitHub contexts and expression functions
7. **workflow-commands-job**: Workflow commands and logging
8. **secrets-and-vars-job**: Secrets and variables usage
9. **caching-job**: Caching with hashFiles
10. **custom-action-example**: Using custom actions
11. **comprehensive-example**: Advanced patterns and debugging

## Running the Workflow

This workflow can be triggered by:
- **Push** to main branch (with path filters)
- **Pull Request** to main branch  
- **Manual dispatch** with optional inputs
- **Schedule** (daily at midnight UTC)

## Learning Path

1. Start with the basic concepts in `basic-job`
2. Explore matrix strategies in `build-matrix`
3. Learn about services and containers
4. Dive into expressions and functions
5. Master workflow commands for advanced logging
6. Create your own custom actions

## Best Practices Demonstrated

- ✅ Using specific action versions (e.g., `@v4`)
- ✅ Proper error handling with `continue-on-error`
- ✅ Security with least-privilege permissions
- ✅ Conditional execution with `if` statements
- ✅ Environment isolation and job dependencies
- ✅ Artifact management for build outputs
- ✅ Comprehensive logging and debugging

## Related Documentation

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [Expressions](https://docs.github.com/en/actions/reference/evaluate-expressions-in-workflows-and-actions)
- [Contexts](https://docs.github.com/en/actions/reference/accessing-contextual-information-about-workflow-runs)
- [Workflow Commands](https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions)
