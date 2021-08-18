<script>
  import Object from "./object.svelte";
  // export let bobj;
  export let text = "Text placeholder";
  export let width = 100;
  export let height = 100;
  export let x;
  export let y;

  export function toJSON() {
    return {
      type: "Text",
      props: {
        x,
        y,
        width,
        height,
        text
      },
      component:undefined,
    }
  }
</script>

<Object bind:x bind:y >
  <textarea bind:value={text} slot="content"></textarea>
</Object>

<style>
  textarea {
    font-size: 1em;
    /* border-style: hidden; */
  }
</style>