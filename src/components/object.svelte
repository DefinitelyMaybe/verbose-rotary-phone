<script>
  import { pannable } from "../pannable.js";
  // identifier/url
  let name = "Object-PlaceHolder"
  let x = 0
  let y = 0

	function handlePanMove(event) {
		x = x + event.detail.dx,
		y = y + event.detail.dy
	}
</script>

<div class="box" use:pannable
  on:panmove={handlePanMove}
  style="transform:
  translate({x}px,{y}px)">
  <slot>{name}</slot>
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
		background-color: #ff3e00;
		cursor: move;
  }
</style>