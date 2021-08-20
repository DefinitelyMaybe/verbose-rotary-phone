<script>
import Text from "./text.svelte";
import Menu from "./menu.svelte";

const componentMap = new Map()
componentMap.set("Text", Text)

let id;
let selectedScene;
let currentScene = "hello world";
let storedScenes = []
let showScenes = true
let showMenu = true;
let selectedObj;
let objects = []
let freeIndices = []
// sync with cloud
// and store in local storage

function save() {
  const objectArray = []
  objects.forEach( (el) => {
    if (el != null) {
      if (el.component) {
        objectArray.push(el.component.toJSON()) 
      }
    }
  })
  localStorage.setItem(id, JSON.stringify(objectArray))
}

function load(data) {
  const newObjects = []
  data.forEach(obj => {
    if (!obj.component) {
      obj.component = undefined
    }
    obj.shouldRender = true
    newObjects.push(obj)
  });
  objects = newObjects 
}

function getCurrentStorageKeys() {
  const sceneKeys = []
  for (let i = 0; i < localStorage.length; i++) {
    sceneKeys.push(localStorage.key(i));
  }
  return sceneKeys
}

function handleDelete(event) {
  console.log(selectedObj);
  // const i = event.detail.id
  // objects[i].shouldRender = false;
  // freeIndices.push(i)
}

</script>

<main on:pointerdown|self="{()=> console.log("hello world")}">
  <label for="">Title:</label><input type="text" bind:value="{currentScene}">

  <button on:pointerup="{save}">Save</button>
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
      if (data) {
        load(JSON.parse(data)) 
      } else {
        console.warn("there was no data")
      }
    }}">
    <button on:pointerup="{() => {
      showScenes = false
      localStorage.removeItem(`${selectedScene}`)
    }}">delete</button>
  </form>
  {/if}
  
  <Menu bind:show="{showMenu}" on:delete="{handleDelete}"></Menu>
  {#each objects as obj, i}
    {#if obj.shouldRender}
      <svelte:component 
        this={componentMap.get(obj.type)}
        {...obj.props}
        id={i}
        selected="{selectedObj == i}"
        bind:this={obj.component}
        on:pointerup="{() => showMenu = true}"></svelte:component>
    {/if}
  {/each}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    color: white;
    background: rgb(20, 20, 20);
  }
  * {
    color: white;
    background-color: black;
  }
</style>