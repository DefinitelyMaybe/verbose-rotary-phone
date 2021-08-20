<script>
  import { createEventDispatcher } from "svelte";

  export let show = false
  const dispatch = createEventDispatcher()

</script>

{#if show}
  <ul>
    <li><button class="moveable" 
      on:pointerdown
      on:pointermove
      on:pointerup
      on:pointerleave>move</button></li>
    <li><button on:pointerup="{() => dispatch('delete')}">delete</button></li>
  </ul>
{/if}

<style>
  .moveable {
    cursor: move;
  }
</style>