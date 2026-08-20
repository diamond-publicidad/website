# GitHub MCP local setup

This repository does not require a permanent GitHub MCP configuration in source control. The setup below is intentionally local and safe for a developer machine.

## What to do locally

1. Open VS Code settings and make sure the GitHub MCP server is configured for your environment.
2. Use a personal access token only in the local environment, never commit it to the repository.
3. If you use this workspace in a shared environment, keep the token out of git history and prefer environment variables or a local secret manager.

## Local workspace configuration

The repository includes a starter configuration at `.vscode/mcp.json`.

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "github_token",
      "description": "GitHub personal access token with repo and pull request permissions. This token is not committed to the repository."
    }
  ],
  "servers": {
    "github": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GITHUB_PERSONAL_ACCESS_TOKEN",
        "ghcr.io/github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}"
      }
    }
  }
}
```

## Delivery behavior

When the GitHub MCP is available and authenticated, the delivery flow should do the following:

- validate that the current branch is already prepared for delivery;
- confirm that the branch is not `main` unless the user explicitly chooses it;
- ask which base branch should receive the Pull Request;
- create the PR from the current branch toward the chosen base branch;
- avoid pushing directly to `main`.

If the MCP is not configured or authentication is missing, stop and report the blockage instead of creating a PR.
