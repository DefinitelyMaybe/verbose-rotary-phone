<svelte:head>
	<title>Welcome</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click="{handleClick}">click me</button>

<script>
  let x = 1

  function handleClick() {
    console.log(x);
    x += 1
  }
</script>