const { Octokit } = require('@octokit/core');
const octokit = new Octokit({ auth: process.env.TOKEN });

async function callExternal() {

  console.log(process.env.PR_NUMBER);
  console.log(process.env.REPO_NAME);
  
  // Trigger the workflow in the other repository
  const response = await octokit.request('POST /repos/OnnoPeters/Repo2/actions/workflows/checkTasksWhenMerged.yml/dispatches', {
    ref: 'main', // Replace with the branch name if needed
    inputs: {
      prNumber:  process.env.PR_NUMBER,
      repoName:  process.env.REPO_NAME
    },
  });
  
  console.log('Triggered external workflow:', response.status);
}
callExternal();
