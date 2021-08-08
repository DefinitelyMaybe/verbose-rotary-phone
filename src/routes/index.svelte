<script>
  import Blob from "../components/blob.svelte";
  import { MyStorageManager } from "../storageManager.js";
  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher()

  let objects;
  const storage = new MyStorageManager()

  function handleSave() {
    console.log("save");
  }

  function handleLoad() {
    console.log("load");
  }

  function handleCreate() {
    // objects = objects.concat({
    //   component: "Text",
    //   props: {
    //     text:"Dummy text",
    //     x: -100,
    //     y: -100,
    //   }
    // })
  }

  $: console.log(objects);
</script>

<svelte:head>
	<title>Blobit</title>
</svelte:head>

<!-- <Options pos="TopLeft" on:click="{handleButton1Click}">Hamburger/Options/Setup</Options>
<Options pos="TopRight">Navigate/Save/Load/Fork/Merge</Options>
<Options pos="BottomLeft">Tool</Options>
<Options pos="BottomRight">Add</Options> -->
<button on:pointerdown="{handleSave}">Save</button>
<button on:pointerdown="{handleLoad}">Load</button>
<button on:pointerdown="{handleCreate}">create</button>

<Blob id={10} bind:objects></Blob>