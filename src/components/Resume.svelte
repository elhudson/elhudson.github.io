<script>
  import ResumeSection from "../layouts/ResumeSection.svelte";
  import { Octokit } from "octokit";
  import env from "../../env.json";
  import { DateTime } from "luxon";
  import _ from "lodash";

  const github = new Octokit({
    auth: env.github
  });

  let resume = github.rest.repos
    .getContent({
      repo: "resume",
      owner: "elhudson",
      path: "resume.json"
    })
    .then((res) => JSON.parse(atob(res.data.content)))
    .then((res) => {
      Object.keys(res)
        .filter(
          (f) =>
            Array.isArray(res[f]) &&
            res[f][0] &&
            Object.keys(res[f][0])
              .join(" , ")
              .search(/[d|D]ate/) != -1
        )
        .forEach((cat) => {
          const params = Object.keys(res[cat][0]).filter(
            (f) => f.search(/[d|D]ate/) != -1
          );
          params.forEach((param) => {
            res[cat] = res[cat].map((p) => ({
              ...p,
              [param]:
                p[param] == ""
                  ? ""
                  : DateTime.fromISO(p[param]).toLocaleString({
                      month: "short",
                      year: "numeric"
                    })
            }));
          });
        });
      const categories = [
        ...new Set(_.flatten(res.skills.map((f) => f.keywords)))
      ];
      res.skills = categories.map((c) => ({
        category: c,
        skills: res.skills.filter((s) => s.keywords.includes(c))
      }));
      res.languages.forEach((l) => {
        l.fluency = l.fluency
          .toLowerCase()
          .split("_")
          .map((f) => f[0].toUpperCase() + f.slice(1))
          .join(" ");
      });
      return res;
    });
</script>

{#await resume then resume}
  <ResumeSection title={"Skills"} icon="streamline-emojis:woman-mechanic-2">
    <ul>
      {#each resume.skills as category}
        <li id={category.category.toLowerCase().replace(" ", "_")}>
          <h3>{category.category}</h3>
          <ul class="inline">
            {#each category.skills as skill}
              <li>{skill.name}</li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </ResumeSection>
  <ResumeSection title={"Experience"} icon="streamline-emojis:briefcase">
    <ul>
      {#each resume.work as w}
        <li>
          <h3>{w.company}</h3>
          <h4 class="role">{w.position}</h4>
          <div class="time">
            <time>{w.startDate}</time>
            <time>{w.endDate}</time>
          </div>
          {#if w.highlights.length > 1}
            <ul class="desc">
              {#each w.highlights as h}
                <li>{h}</li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </ResumeSection>
  <ResumeSection title={"Education"} icon="streamline-emojis:graduation-cap">
    <ul>
      {#each resume.education as w}
        <li>
          <h3>{w.institution}</h3>
          <h4 class="degree">{w.studyType} in {w.area}</h4>
          <div class="time">
            <time>{w.startDate}</time>
            <time>{w.endDate}</time>
          </div>
        </li>
      {/each}
    </ul>
  </ResumeSection>

  <ResumeSection title={"Volunteering"} icon="streamline-emojis:rainbow">
    <ul>
      {#each resume.volunteer as w}
        <li>
          <h3>{w.organization}</h3>
          <h4 class="role">{w.position}</h4>
          <div class="time">
            <time>{w.startDate}</time>
            <time>{w.endDate}</time>
          </div>
        </li>
      {/each}
    </ul>
  </ResumeSection>
  <ResumeSection title={"Awards"} icon="openmoji:trophy">
    <ul>
      {#each resume.awards as w}
        <li>
          <h3>{w.title}</h3>
          <h4>{w.awarder}</h4>
          <div class="time">
            <time>{w.date}</time>
          </div>
        </li>
      {/each}
    </ul>
  </ResumeSection>
  <ResumeSection title={"Publications"} icon="streamline-emojis:scroll">
    <ul>
      {#each resume.publications as w}
        <li>
          <h3>{w.name}</h3>
          <h4>{w.publisher}</h4>
          <div class="time">
            <span>{w.releaseDate}</span>
          </div>
        </li>
      {/each}
    </ul>
  </ResumeSection>
  <ResumeSection title={"Languages"} icon="streamline-emojis:globe-showing-americas">
    <ul>
      {#each resume.languages as w}
        <li>
          <h3>{w.language}</h3>
          <h4>{w.fluency}</h4>
        </li>
      {/each}
    </ul>
  </ResumeSection>
{/await}

<style lang="scss">
  ul {
    list-style-type: none;
    padding: unset;
    &.inline {
      display: inline-flex;
      li {
        margin-right: 5px;
        &:not(li:last-child)::after {
          content: ",";
        }
      }
    }
  }

  li {
    position: relative;

  }
 
  div.time {
    position: absolute;
    text-align: right;
    right: 0;
    top: 0;
    time:first-child:not(time:only-child)::after {
      content: " →";
    }
  }
</style>
