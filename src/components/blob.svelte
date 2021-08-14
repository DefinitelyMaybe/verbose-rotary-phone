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

  export function save() {
    console.log("hello from save");
    dispatch("save", {
      id,
      objects
    })
    // console.log(objects);
  }

  onMount(() => {
    addEventListener("initSave", save)
  })

  onDestroy(() => {
    try {
      removeEventListener("initSave", save) 
    } catch (error) {
      console.log(error);
    }
  })

</script>

<div>
  {#each objects as obj}
    <svelte:component this={componentMap.get(obj.type)} {...obj.props} bind:this={obj.component}></svelte:component>
  {/each}
</div>