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
    width: 50px;
    height: 50px;
    overflow: hidden;
  }
</style>