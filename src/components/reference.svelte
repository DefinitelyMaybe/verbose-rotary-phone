<script>
  import Object from "../components/object.svelte";
  // import { onMount } from "svelte";
  let ref = ""
  // let thing

  // onMount( () => {
  //   console.log(ref);
  //   // ref = URL.createObjectURL(thing)
  //   console.log(thing);
  // })
</script>

<Object>
  {#if ref}
    <a href="{ref}">{ref}</a>
  {:else}
    <p>Reference-Placeholder</p>
  {/if}
</Object>