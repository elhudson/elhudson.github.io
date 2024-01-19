<script>
  import { Octokit } from "octokit";
  import env from "../../../env.json";
  import { DateTime } from "luxon";
  const github = new Octokit({
    auth: env.github
  });

  let repos = github.rest.users
    .getByUsername({ username: "elhudson" })
    .then(async (d) => await github.request(d.data.repos_url))
    .then(({ data }) =>
      data
        .filter((f) => !f.fork)
        .map((f) => ({
          ...f,
          pushed_at: DateTime.fromISO(f.pushed_at)
        }))
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
          <div class="meta">
            Last updated at {repo.pushed_at.toLocaleString(
              DateTime.TIME_SIMPLE
            )} on {repo.pushed_at.toLocaleString(
              DateTime.DATE_MED_WITH_WEEKDAY
            )}
          </div>
          <p>
            {repo.description ?? ""}
          </p>
        </h4>
      </li>
    {/each}
  {/await}
</ul>

<style lang="scss">
  ul {
    padding: unset;
    list-style-type: none;
  }
  li {
    position: relative;
    div.meta {
      position: absolute;
      right: 0;
      top:0;
      font-size: 12px;
      color: var(--accent);
    }
  }
</style>
