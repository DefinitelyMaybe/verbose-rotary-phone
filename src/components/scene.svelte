<script>
  import Text from "./text.svelte";
  import Object from "./object.svelte";
  import Reference from "./reference.svelte";
  import { onMount } from "svelte";


  onMount(() => {
    new Text({
      target: document.body
    });
  })

</script>

<div>
  <Object></Object>
  <Text></Text>
  <Reference></Reference>
</div>

<style></style>