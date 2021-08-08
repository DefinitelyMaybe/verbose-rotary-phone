<script>
  import Text from "./text.svelte";
  import Object from "./object.svelte";
  import Reference from "./reference.svelte";
  // import { onMount } from "svelte";

  const componentMap = new Map()
  // this could be extended in future i.e.
  // extended scenes with custom objects?
  // function initComponentMapping() {
  componentMap.set("Text", Text)
  componentMap.set("Object", Object)
  componentMap.set("Reference", Reference)
  // }

  // let element;
  export let id = 0;
  export let objects = [
    {
      component: "Text",
      props: {
        text:"Dummy text",
        x: -100,
        y: -100,
      }
    },
  ]

  // onMount(() => {
    // const dummyobject = [
    //   {"Text":"DummyText"},
    // ]
    // const dummyURL = URL.createObjectURL(dummyobject)
    // whenever a scene component is mounted
    // Once the scene has mounted, we should figure out the data that goes with it
    // Was there a last scene in use?
    // const data = fetch(dummyURL)
    // loadScene()
  // })

  // function loadScene(scene) {
    // have I been given a scene to render
    // trigger an update of sveltes each block
  // }

</script>

{#each objects as obj}
  <svelte:component this={componentMap.get(obj.component)} {...obj.props}></svelte:component>
{/each}