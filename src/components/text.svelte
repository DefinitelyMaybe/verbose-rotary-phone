<script>
  import Object from "./object.svelte";
  // export let bobj;
  export let text = "Text placeholder";
  export let x;
  export let y;
</script>

<Object {x} {y} >
  <textarea bind:value={text} slot="content"></textarea>
</Object>

<style>
  textarea {
    font-size: 2em;
    width: 5em;
    height: 5em;
    /* border-style: hidden; */
  }
</style>