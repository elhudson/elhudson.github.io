<script>
  import "iconify-icon";
  import { getSongs } from "../../apis/spotify";
  import Shelf from "../Shelf.svelte";

  const listTracks=async ()=> {
    return await getSongs().then((songs)=> songs.map(s=> ({
        title: s.name,
        creator: s.artists.map(s=> s.name).join(", "),
        source: s.album.name,
        image: s.album.images[0].url
      }))
    )
  }

</script>

<Shelf get={listTracks} title="tunes" icon="streamline-emojis:radio" />