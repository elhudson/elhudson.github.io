<script>
  const pat = "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";
  import { Octokit } from "octokit";

  const github = new Octokit({
    auth: pat
  });

  let repos = github.rest.users
    .getByUsername({ username: "elhudson" })
    .then(async (d) => await github.request(d.data.repos_url))
    .then((d) => d.data.filter((f) => !f.fork))
    .then(async (d) =>
      d.forEach(async (repo) => {
        repo.readme = await github.rest.repos
          .getReadme({
            owner: "elhudson",
            repo: repo.name
          })
          .catch((reason) => "");
      })
    );
</script>

<ul>
  {#await repos}
    <p>Loading user data...</p>
  {:then data}
    {#each data as repo}
      <li>
        <h4>
          <a href={repo.html_url}>{repo.name}</a>
        </h4>
      </li>
    {/each}
  {/await}
</ul>
