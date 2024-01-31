<script lang="ts">
  import "iconify-icon";
  import Shelf from "../Shelf.svelte";
  import { getArticles } from "../../apis/omnivore";
</script>

<Shelf
  title="reads"
  get={getArticles}
  icon="streamline-emojis:newspaper"
/>
