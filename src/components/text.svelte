<script>
  import Object from "./object.svelte";
  export let text = "Text placeholder";
  export let x;
  export let y;
  let opts = {
    move:true
  }
</script>

<Object {x} {y}>
  <textarea bind:value={text} slot="content"></textarea>
</Object>

<style>
  textarea {
    font-size: x-large;
    width: 80px;
    height: 80px;
    border-style: hidden;
  }
</style>