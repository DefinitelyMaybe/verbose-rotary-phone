<script>
import Text from "./text.svelte";
import Object from "./object.svelte";
import Reference from "./reference.svelte";
import { createEventDispatcher, onMount, onDestroy } from "svelte";

const dispatch = createEventDispatcher()

const componentMap = new Map()
componentMap.set("Text", Text)
componentMap.set("Object", Object)
componentMap.set("Reference", Reference)

export let id;
export let objects = [
  {
    type: "Text",
    props: {
      text:"Dummy text",
      x: -100,
      y: -100,
    },
    component:undefined
  },
]
let freeIndices = []

function save() {
  const objectArray = []
  objects.forEach( (el) => {
    if (el != null) {
      if (el.component) {
        objectArray.push(el.component.toJSON()) 
      }
    }
  })
  dispatch("sceneToJSON", {
    id,
    objects:objectArray
  })
}

function load(event) {
  const newObjects = []
  event.detail.forEach(obj => {
    if (!obj.component) {
      obj.component = undefined
    }
    obj.shouldRender = true
    newObjects.push(obj)
  });
  objects = newObjects
}

function handleDelete(event) {
  const i = event.detail.id
  objects[i].shouldRender = false;
  freeIndices.push(i)
}

onMount(() => {
  addEventListener("save", save)
  addEventListener("load", load)
})

onDestroy(() => {
  try {
    removeEventListener("save", save)
    removeEventListener("load", load)
  } catch (error) {
    console.log(error);
  }
})

</script>

{#each objects as obj, i}
  <!-- sorting out the array -->
  {#if obj.shouldRender}
    <svelte:component 
      this={componentMap.get(obj.type)}
      {...obj.props}
      id={i}
      bind:this={obj.component}
      on:delete="{handleDelete}"></svelte:component>
  {/if}
{/each}