<script lang="ts">
	import { getFakeData } from '../remote/demo.remote'

	let fakeData = getFakeData()

	// $inspect(fakeData.current)
</script>

{#if fakeData.current}
	<p>{fakeData.current.name}</p>
	<p>{fakeData.current.age}</p>
	<p>{fakeData.current.email}</p>
{/if}

{#if fakeData.pending}
	<p>Loading...</p>
{/if}

{#if fakeData.error}
	<p>Error: {fakeData.error.message}</p>
{/if}
