<script>
  import { fade } from 'svelte/transition';

  export let x = 0
  export let y = 0
  export let moveable = true;
  export let showOptions = false;

	async function handleMove(event) {
		x = x + event.detail.dx,
		y = y + event.detail.dy
	}
  
</script>

<div class="box"
  style="transform:
  translate({x}px,{y}px)"
  on:panmove={handleMove}
  on:pointerover="{() => {showOptions = true}}"
  on:pointerleave="{() => {showOptions = false}}">
  <slot name="content"></slot>
  {#if showOptions}
    <nav transition:fade>
      {#if moveable}
        <li>move</li>
      {/if}
    </nav>
  {/if}
</div>

<style>
  :hover {
    color: blue;
  }

  .box {
		position: absolute;
		left: calc(50%);
		top: calc(50%);
		cursor: move;
  }
</style>