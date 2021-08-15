<script>
  import Text from "./text.svelte";
  import Object from "./object.svelte";
  import Reference from "./reference.svelte";
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  
  const dispatch = createEventDispatcher()
  const componentMap = new Map()
  // this could be extended in future i.e.
  // extended scenes with custom objects?
  // function initComponentMapping() {
  componentMap.set("Text", Text)
  componentMap.set("Object", Object)
  componentMap.set("Reference", Reference)
  // }
  
  export let id = 0;
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

  function save() {
    // console.log("hello from save");
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
    // console.log(id);
    const newObjects = []
    event.detail.forEach(el => {
      if (!el.component) {
        el.component = undefined
      }
      newObjects.push(el)
    });
    objects = newObjects
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

{#each objects as obj}
  <svelte:component this={componentMap.get(obj.type)} {...obj.props} bind:this={obj.component}></svelte:component>
{/each}