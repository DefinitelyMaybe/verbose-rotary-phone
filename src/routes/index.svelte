<script>
  import Text from "../components/text.svelte";
  import Object from "../components/object.svelte";
  import Reference from "../components/reference.svelte";
  import { save, load, resetSceneStorage } from "../localStorage.js";
  import { onMount } from "svelte";


  onMount(() => {
    new Text({
      target: document.body
    });
  })

  function handleButton1Click() {
    
  }

  function handleButton2Click() {
    const x = load()
    console.log(x);
    if (x) {
      document.body.outerHTML = x
    } else {
      console.log("no data");
    }
  }
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click="{save}">save</button>
<button on:click="{handleButton2Click}">load</button>
<button on:click="{resetSceneStorage}">reset</button>

<Object></Object>
<Text></Text>
<Reference></Reference>


<style>
</style>