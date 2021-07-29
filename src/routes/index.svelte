<script>
  import Text from "../components/text.svelte";
  import Object from "../components/object.svelte";
  import Reference from "../components/reference.svelte";
  let x = 1

  function handleClick() {
    console.log(x);
    x += 1
  }
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click="{handleClick}">click me</button>

<Object></Object>
<Text></Text>
<Reference></Reference>


<style>
</style>