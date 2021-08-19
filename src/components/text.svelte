<script>
import { createEventDispatcher } from "svelte";

export let id;
export let text = "Text placeholder";
export let width = 200;
export let height = 100;
export let x;
export let y;
export let showOptions = false;
export let selected = false;

let el;
let moving = false;
const dispatch = createEventDispatcher()

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

async function handleMove(event) {
  if (moving) {
    x = x + event.movementX
    y = y + event.movementY 
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

<textarea bind:this="{el}"
  bind:value="{text}"
  class="box"
  style="width:{width}px;height:{height}px;transform:translate({x}px,{y}px);"
  on:keyup="{handleResize}"
  on:pointerup="{handleResize}"
  on:pointerover="{() => showOptions = true}"
  on:pointerleave="{() => showOptions = false}"></textarea>

<style>
  textarea {
    font-size: 1em;
    /* border-style: hidden; */
    overflow: hidden;
    resize: horizontal;
  }
  .box {
		position: absolute;
		left: calc(50%);
		top: calc(50%);
  }
</style>