# Repo1

This workflow contains Pull Requests, which can be referenced in tasks from OnnoPeters/Repo2. When a PR merges, it triggers a workflow which calls a JS script, which in turn calls another workflow in Repo2. The Repo2 workflow then also uses a JS script to automatically mark the respective task as completed.

At the moment, this is only possible in one direction, but a copy of each workflow from each repo to the other one should enable both directions.
