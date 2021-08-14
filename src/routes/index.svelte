<script>
  import Blob from "../components/blob.svelte";
  // import { createEventDispatcher } from "svelte";
  
  // const dispatch = createEventDispatcher()

  let objects;
  let storedScenes = []
  let showScenes = false
  // sync with cloud
  // and store in local storage

  function handleSave(event) {
    // console.log("save");
    // console.log(event.detail.objects);
    const { id, objects } = event.detail
    localStorage.setItem(id, JSON.stringify(objects))
  }

  function handleLoad() {
    // console.log("load");
    // update stored Scenes list
    storedScenes = getCurrentKeys()
    showScenes = true

    const id = 10
    const data = localStorage.getItem(`${id}`)
    objects = JSON.parse(data);
  }

  function getCurrentKeys() {
    const sceneKeys = []
    for (let i = 0; i < localStorage.length; i++) {
      sceneKeys.push(localStorage.key(i));
    }
    return sceneKeys
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
<button on:pointerdown="{() => dispatchEvent(new Event("initSave"))}">Save</button>
<button on:pointerdown="{handleLoad}">Load</button>
<button on:pointerdown="">test</button>

{#if showScenes}
<ul>
  {#each storedScenes as scene}
    <li>test {scene}</li>
  {/each}
</ul>
{/if}
<Blob id={10} bind:objects on:save={handleSave}></Blob>