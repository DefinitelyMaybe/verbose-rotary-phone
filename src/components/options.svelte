<script>
  export let pos = ""
</script>

{#if pos == "TopLeft"}
  <nav class="TopLeft">
    PlaceHolder Navbar
  </nav>
{:else if pos == "TopRight"}
  <nav class="TopRight">
    PlaceHolder Navbar
  </nav>
{:else if pos == "BottomLeft"}
  <nav class="BottomLeft">
    PlaceHolder Navbar
  </nav>
{:else}
  <nav class="BottomRight">
    PlaceHolder Navbar
  </nav>
{/if}

<style>
  nav {
    --width: 100px;
		--height: 100px;
		position: fixed;
    background-color: cadetblue;
		width: var(--width);
		height: var(--height);
    cursor: pointer;
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