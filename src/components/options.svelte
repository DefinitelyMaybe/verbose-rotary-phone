<script>
  export let pos = ""
</script>


<nav class="{pos}"
  on:click>
  <slot></slot>
</nav>

<style>
  nav {
    --width: 100px;
		--height: 100px;
		position: fixed;
    background-color: cadetblue;
		width: var(--width);
		height: var(--height);
    cursor: pointer;
    /* text-overflow: clip; */
  }

  nav.TopLeft {
    left: calc(0%);
		top: calc(0%);
  }

  nav.TopRight {
    left: calc(100% - var(--width));
		top: calc(0%);
  }

  nav.BottomLeft {
    left: calc(0%);
    top: calc(100% - var(--height));
  }

  nav.BottomRight {
    left: calc(100% - var(--width));
    top: calc(100% - var(--height));
  }
</style>