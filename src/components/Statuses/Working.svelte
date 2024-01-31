<script>
  import Shelf from "../Shelf.svelte";
  import { getRepos } from "../../apis/github";
</script>

<Shelf
  get={getRepos}
  title="code"
  icon="noto-v1:keyboard"
/>
