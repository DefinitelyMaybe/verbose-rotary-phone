<script>
import Object from "./object.svelte";
// export let bobj;
let el;
export let id;
export let text = "Text placeholder";
export let width = 200;
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
  }
}

// ignore height. let the text itself dictate height
function handleResize () {
  // read width and save
  let w = parseInt(el.style.width.split("px")[0]);
  if (w < 100) {
    el.style.width = `100px`
    width = 100
  } else {
    width = w
  }
  // adjust height based on width
  // (basically defaults down to what the scroll height is)
  el.style.height = "0px"
  if (el.scrollHeight > el.clientHeight) {
    el.style.height = el.scrollHeight + "px";
    height = el.scrollHeight
  }
}

</script>

<Object bind:x bind:y bind:id on:delete>
  <textarea bind:this="{el}"
    bind:value={text}
    slot="content"
    style="width:{width}px;height:{height}px"
    on:keyup="{handleResize}"
    on:pointerup="{handleResize}"></textarea>
</Object>

<style>
  textarea {
    font-size: 1em;
    /* border-style: hidden; */
    overflow: hidden;
    resize: horizontal;
  }
</style>