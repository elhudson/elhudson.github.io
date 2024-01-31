<script>
  import { DateTime } from "luxon";
  export let get,
    icon,
    title,
    content = null;
  const items = get();
</script>

<details>
  <summary>
    <h3>
      <iconify-icon {icon} />
      {title}
    </h3>
  </summary>

  <ul>
    {#await items then items}
      {#each items as item}
        <li>
          {#if item.image}
            <div class="thumbnail">
              <img src={item.image} />
            </div>
          {/if}
          <div class="content">
            <h4>
              <a href={item.url}>
                {item.title}
              </a>
            </h4>
            <div class="metadata">
              {#if item.creator}
                <div class="author">
                  <label>by: </label>
                  <span>{item.creator}</span>
                </div>
              {/if}
              {#if item.pushed_at}
                <div class="updated">
                  <label>last commit: </label>
                  <span
                    >{item.pushed_at.toLocaleString(DateTime.DATE_FULL)}</span
                  >
                </div>
              {/if}
              {#if item.source}
                <div class="source">
                  <label>from: </label>
                  <span>
                    {item.source}
                  </span>
                </div>
              {/if}
            </div>
          </div>
        </li>
      {/each}
    {/await}
  </ul>
</details>

<style lang="scss">
  @use "sass:color";
  @import "../styles/vars.scss";

  details summary ~ * {
    animation: sweep 0.5s ease-in-out;
  }

  summary h3 {
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
      font-style: italic;
      text-decoration: underline;
      text-underline-offset: 3px;
      cursor: pointer;
    }
  }
  summary::marker {
    content: none;
  }

  ul {
    margin-left: 15px;
    padding-left: 15px;
    border-left: 1px solid var(--accent);
  }
  h4 a {
    font-family: monospace;
    font-weight: bold;
    color: var(--text);
    &:hover {
      font-style: italic;
    }
  }
  li {
    list-style: none;
    position: relative;
    padding: 5px;
    margin-bottom: 5px;
    display: flex;
    div.thumbnail {
      display: inline-flex;
      height: 100px;
      flex-shrink: 0;
      width: 100px;
      border: 1px dashed var(--accent-dark);
      background-color: transparentize($accent-dark, 0.85);
      img {
        object-fit: cover;
        border-radius: 0%;
        margin: 5px;
      }
    }
    div.content {
      margin-left: 10px;
      width: 100%;
    }
    div.metadata {
      width: 100%;
      > div {
        border-bottom: 1px solid var(--accent);
        width: inherit;
        label {
          font-family: monospace;
          font-weight: 700;
        }
        span {
          font-style: italic;
        }
      }
    }
  }
</style>
