<script>
  import { getPods } from "../../apis/spotify";
  import Shelf from "../Shelf.svelte";

  const fetchPods = async () =>
    await getPods().then((res) =>
      res.map((pod) => ({
        ...pod,
        title: pod.show.name,
        source: pod.show.publisher,
        creator: "",
        url: pod.show.external_urls.spotify,
        image: pod.show.images[0].url
      }))
    );
</script>

<Shelf
  get={fetchPods}
  icon={"streamline-emojis:microphone"}
  title="pods"
/>
