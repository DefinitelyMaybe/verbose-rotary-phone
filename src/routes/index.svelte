<script>
  import Scene from "../components/scene.svelte";
  import { MyStorageManager } from "../storageManager.js";

  // const scene = new Scene()
  const storage = new MyStorageManager()

  function handleButton1Click() {
    
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
	<title>Welcome</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click="{handleButton1Click}">save</button>
<button on:click="{handleButton2Click}">load</button>
<button on:click="{handleButton2Click}">reset</button>

<Scene></Scene>

<style>
</style>