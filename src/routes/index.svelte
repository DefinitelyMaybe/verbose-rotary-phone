<script>
  import Blob from "../components/blob.svelte";
  // import { createEventDispatcher } from "svelte";
  
  // const dispatch = createEventDispatcher()

  let selectedScene;
  let currentScene = 10;
  let storedScenes = []
  let showScenes = false
  // sync with cloud
  // and store in local storage

  function getCurrentStorageKeys() {
    const sceneKeys = []
    for (let i = 0; i < localStorage.length; i++) {
      sceneKeys.push(localStorage.key(i));
    }
    return sceneKeys
  }
</script>

<svelte:head>
	<title>Blobit</title>
</svelte:head>

<!-- <Options pos="TopLeft" on:click="{handleButton1Click}">Hamburger/Options/Setup</Options>
<Options pos="TopRight">Navigate/Save/Load/Fork/Merge</Options>
<Options pos="BottomLeft">Tool</Options>
<Options pos="BottomRight">Add</Options> -->

<button on:pointerup="{() => dispatchEvent(new Event("save"))}">Save</button>
<button on:pointerup="{() => {
  storedScenes = getCurrentStorageKeys()
  showScenes = true
  }}">Load</button>
<button on:pointerup="{() => {localStorage.clear()}}">clear Storage</button>

{#if showScenes}
<form>
  <select bind:value={selectedScene}>
    {#each storedScenes as scene}
      <option value={scene}>{scene}</option>
    {/each}
  </select>
  <input type="submit" form="" on:pointerup="{() => {
    showScenes = false
    const data = localStorage.getItem(`${selectedScene}`)
    dispatchEvent(new CustomEvent("load", {
      detail:JSON.parse(data),
    }))
  }}">
</form>
{/if}

<Blob bind:id={currentScene} on:sceneToJSON={(event) => {
  const { id, objects } = event.detail
  // console.log("check out objects");
  // console.log(objects);
  localStorage.setItem(id, JSON.stringify(objects))
}}></Blob>