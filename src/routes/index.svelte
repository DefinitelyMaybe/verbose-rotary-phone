<script>
import Blob from "../components/blob.svelte";

let selectedScene;
let currentScene = "hello world";
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

<!-- <svelte:body on:pointerup="{(event) => {
    console.log(event.x, event.y);
  }}"></svelte:body> -->

<label for="">title</label><input type="text" bind:value="{currentScene}">

<button on:pointerup="{() => dispatchEvent(new Event("save"))}">Save</button>
<button on:pointerup="{() => {
  storedScenes = getCurrentStorageKeys()
  showScenes = true
  }}">Load</button>
<button on:pointerup="{() => localStorage.clear()}">clear Storage</button>

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
    // console.log(JSON.parse(data));
    dispatchEvent(new CustomEvent("load", {
      detail:JSON.parse(data),
    }))
  }}">
  <button on:pointerup="{() => {
    showScenes = false
    localStorage.removeItem(`${selectedScene}`)
  }}">delete</button>
</form>
{/if}

<Blob bind:id={currentScene} on:sceneToJSON="{(event) => {
    const { id, objects } = event.detail
    localStorage.setItem(id, JSON.stringify(objects))
  }}"></Blob>

<style>
  :global(html) {
    width: 100%;
    height: 100%;
  }
  :global(body) {
    width: 100%;
    height: 100%;
  }
</style>