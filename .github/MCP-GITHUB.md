# GitHub MCP local setup

This repository does not keep a permanent GitHub MCP configuration in source control. The real setup lives in the local editor runtime and must be activated in the developer machine where Copilot is running.

## What was required in practice

The working flow for this repository was:

1. Open Copilot Chat in VS Code.
2. Open the tool or server configuration that exposes MCP servers.
3. Look for the GitHub MCP server in the list of available MCP servers.
4. Start or enable the GitHub server.
5. Complete the browser login to GitHub when Copilot requests it.
6. Confirm that the GitHub MCP server is now connected before trying to open a pull request.

This step is mandatory for PR creation. If the MCP is not enabled, authenticated, or reachable, the agent can still push the feature branch, but it must not attempt to open a PR.

## Local secrets policy

- Use a personal access token only in the local environment.
- Never commit the token or a file containing it.
- Keep the token in a local secret store, environment variable, or editor session, not in the repo.
- If the repository is shared or the token belongs to an organization, ensure the account is authorized for that organization before using the MCP.

## Expected behavior for Git Delivery

When the GitHub MCP is available and authenticated, the delivery flow should do the following:

- validate that the current branch is already prepared for delivery;
- confirm that the branch is not `main` unless the user explicitly chooses it;
- ask which base branch should receive the Pull Request;
- create the PR from the current branch toward the chosen base branch;
- avoid pushing directly to `main`.

If the MCP is absent, unavailable, or not authenticated, the agent must stop after the branch is pushed or after preparing the branch and report the blockage clearly. It must not fabricate a PR or assume `main` as the target branch.

## Blockers to report

The agent should stop and report the blocker when any of these happens:

- the GitHub MCP server is not available in the editor;
- the browser login is not completed;
- the account does not have access to the target repository;
- the token or GitHub session is missing or expired;
- the user has not specified the base branch for the PR.

## Practical reminder

For this repository, the correct sequence is:

1. enable GitHub MCP in the editor UI;
2. complete browser authentication;
3. verify the server is connected;
4. create or update the branch;
5. push the branch;
6. only then open the PR when the MCP is active.
