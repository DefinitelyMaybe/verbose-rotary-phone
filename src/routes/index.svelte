<script>
  import Blob from "../components/blob.svelte";
  import { MyStorageManager } from "../storageManager.js";
  import { createEventDispatcher } from "svelte";
  
  const dispatch = createEventDispatcher()

  let objects;
  // sync with cloud
  // and store in local storage
  const storage = new MyStorageManager()

  function handleSave() {
    console.log("save");
  }

  function handleLoad() {
    console.log("load");
  }

  function initSave() {
    console.log("init save");
    dispatchEvent(new Event("initSave"))
  }

  // $: console.log(objects);
</script>

<svelte:head>
	<title>Blobit</title>
</svelte:head>

<!-- <Options pos="TopLeft" on:click="{handleButton1Click}">Hamburger/Options/Setup</Options>
<Options pos="TopRight">Navigate/Save/Load/Fork/Merge</Options>
<Options pos="BottomLeft">Tool</Options>
<Options pos="BottomRight">Add</Options> -->
<button on:pointerdown="{initSave}">Save</button>
<button on:pointerdown="{handleLoad}">Load</button>
<!-- <button on:pointerdown="{handleCreate}">create</button> -->

<Blob id={10} bind:objects on:save={handleSave}></Blob>