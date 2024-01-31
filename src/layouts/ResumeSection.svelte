<script>
  import "iconify-icon";
  export let title, icon;
</script>

<details
  id={title.toLowerCase()}
  open
>
  <summary>
    <h2>
      <iconify-icon icon={icon} />{title}
    </h2>
  </summary>
  <div class="contents"><slot /></div>
</details>

<style lang="scss">
  summary {
    &::marker {
      content: none;
    }
    &:hover {
      cursor: pointer;
    }
    h2 {
      display: inline;
    }
  }
  details summary ~ * {
    animation: sweep 0.5s ease-in-out;
  }

  @keyframes sweep {
    0% {
      opacity: 0;
      margin-top: -10px;
    }
    100% {
      opacity: 1;
      margin-top: 0px;
    }
  }
  h2 {
    text-transform: uppercase;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  div.contents {
    border-left: 1px solid var(--accent-dark);
    margin-left: 10px;
    padding-left: 20px;
  }
</style>
