<script>
  import Object from "./object.svelte";
  let text = "Text placeholder"
</script>

<Object>
  <textarea bind:value={text}></textarea>
</Object>

<style>
  textarea {
    font-size: x-large;
    /* color: whitesmoke;
    background-color: black; */
  }
</style>