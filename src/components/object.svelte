<script>
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher()

export let id;
export let x = 0;
export let y = 0;
export let moveable = true;
let moving = false;
export let deleteable = true;
export let showOptions = false;
export let selected = false;

async function handleMove(event) {
  if (moving) {
    x = x + event.movementX
    y = y + event.movementY 
  }
}

export function toJSON() {
  return {}
}
  
</script>

<div class="box"
  style="transform:translate({x}px,{y}px);"
  on:pointerover="{() => {showOptions = true}}"
  on:pointerleave="{() => showOptions = false}">
  <slot name="content"></slot>
  {#if showOptions || selected}
    <ul>
      {#if moveable}
        <li><button class="moveable" 
          on:pointerdown="{() => moving = true}"
          on:pointermove="{handleMove}"
          on:pointerup="{() => moving = false}"
          on:pointerleave="{() => moving = false}">move</button></li>
      {/if}
      {#if deleteable}
        <li><button on:pointerup="{() => {
          dispatch('delete', {
            id
          });
        }}">delete</button></li>
      {/if}
    </ul>
  {/if}
</div>

<style>
  /* :hover {
    background: grey;
  } */

  .box {
		position: absolute;
		left: calc(50%);
		top: calc(50%);
  }
  .moveable {
    cursor: move;
  }
</style>