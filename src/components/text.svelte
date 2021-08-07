<script>
  import Object from "./object.svelte";
  export let text = "Text placeholder";
  export let x;
  export let y;
</script>

<Object {x} {y}>
  <textarea bind:value={text}></textarea>
</Object>

<style>
  textarea {
    font-size: x-large;
    width: 80px;
    height: 80px;
    overflow: hidden;
  }
</style>