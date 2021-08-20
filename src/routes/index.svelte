<script>
import Blob from "../components/blob.svelte";
</script>

<svelte:head>
	<title>Blobit</title>
</svelte:head>

<header><h1>Blobit</h1></header>
<Blob></Blob>
<footer>footer</footer>

<style>
  :global(html) {
    margin: 0px;
    width: 100%;
    height: 100%;
    color: white;
  }
  :global(body) {
    margin: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;

    overflow: hidden;
  }
  header {
    width: 100%;
    background: rgb(53, 53, 53);
  }

  footer {
    width: 100%;
    background: rgb(26, 26, 26);
  }
</style>