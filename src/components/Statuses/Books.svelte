<script>
    import { getBooks } from "../../apis/omnivore";
    import Shelf from "../Shelf.svelte";
  </script>
  
  <Shelf
    get={getBooks}
    icon={"streamline-emojis:open-book"}
    title="books"
  />
  