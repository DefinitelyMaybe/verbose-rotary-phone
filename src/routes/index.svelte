<script>
  import Blob from "../components/blob.svelte";
  import Options from "../components/options.svelte";
  import { MyStorageManager } from "../storageManager.js";

  // const scene = new Scene()
  const storage = new MyStorageManager()

  function handleButton1Click() {
    console.log("hello world click");

  }

  function handleButton2Click() {
    // const x = scene.load()
    // console.log(x);
    // if (x) {
    //   document.body.outerHTML = x
    // } else {
    //   console.log("no data");
    // }
  }
</script>

<svelte:head>
	<title>Blobit</title>
</svelte:head>

<Options pos="TopLeft" on:click="{handleButton1Click}">Hamburger/Options/Setup</Options>
<Options pos="TopRight">Navigate/Save/Load/Fork/Merge</Options>
<Options pos="BottomLeft">Tool</Options>
<Options pos="BottomRight">Add</Options>

<Blob></Blob>