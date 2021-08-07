<script>
  import { pannable } from "../pannable.js";
  // identifier/url
  // let name = "Object-PlaceHolder"
  export let x = 0
  export let y = 0

	function handleMove(event) {
		x = x + event.detail.dx,
		y = y + event.detail.dy
	}
</script>

<div class="box" 
  use:pannable
  style="transform:
  translate({x}px,{y}px)"
  on:panmove={handleMove}
  on:pointerdown>
  <slot></slot>
</div>

<style>
  :hover {
    color: blue;
  }

  .box {
    --width: 100px;
		--height: 100px;
		position: absolute;
		width: var(--width);
		height: var(--height);
		left: calc(50% - var(--width) / 2);
		top: calc(50% - var(--height) / 2);
		border-radius: 4px;
		background-color: hsl(194, 80%, 36%);
		cursor: move;
  }
</style>