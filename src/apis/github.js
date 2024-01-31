import { Octokit } from "octokit";
import env from "../../env.json";
import { DateTime } from "luxon";

const github = new Octokit({
  auth: env.github
});

export async function getRepos() {
  return await github.rest.users
    .getByUsername({ username: "elhudson" })
    .then(async (d) => await github.request(d.data.repos_url))
    .then(({ data }) =>
      data
        .filter((f) => !f.fork)
        .map((f) => ({
          ...f,
          title: f.name,
          pushed_at: DateTime.fromISO(f.pushed_at),
          url: f.html_url
        }))
    );
}
