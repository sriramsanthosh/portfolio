import { Octokit } from "octokit";

const username = "sriramsanthosh";
let UserData = null;

const octokit = new Octokit({
  auth: process.env.REACT_APP_GIT_KEY
});

try {
  UserData = await octokit.request("GET /users/{username}", {
    username: username
  });

  let Repos = await octokit.request("GET /users/{username}/repos", {
    username: username
  });
  console.log("Repos", Repos);
} catch (error) {
  console.error(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
}

export { UserData };