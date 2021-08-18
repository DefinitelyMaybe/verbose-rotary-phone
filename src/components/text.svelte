<script>
  import Object from "./object.svelte";
  // export let bobj;
  export let text = "Text placeholder";
  export let width = 200;
  export let height = 200;
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

  async function handleResize(event) {
    console.log(event);
  }
</script>

<Object bind:x bind:y bind:width bind:height>
  <textarea bind:value={text} slot="content" on:keyup="{handleResize}"></textarea>
</Object>

<style>
  textarea {
    font-size: 1em;
    /* border-style: hidden; */
  }
</style>