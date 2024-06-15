<script lang="ts">
	// import type { PageData } from './$types';
	import { redirect } from '@sveltejs/kit';
	// export let data: PageData;
	let { data } = $props();
	let currentCampaign = $state({
		name: 'none',
		id: 'none'
	});
	let currentEncounter = $state();
	$effect(() => {
		const item = localStorage.getItem('currentCampaign');
		if (item) currentCampaign = JSON.parse(item);
	});

	$effect(() => {
		const item = localStorage.getItem('currentEncounter');
		if (item) currentEncounter = JSON.parse(item);
	});
	$effect(() => {
		localStorage.setItem('currentEncounter', JSON.stringify(currentEncounter));
	});
</script>

<div class="px-4">
	<p><a href="../campaign/{currentCampaign.id}"> {currentCampaign.name}</a> \ {currentEncounter}</p>
	<h1 class="is-size-1">{data.encounter.encounterName}</h1>
	<p class="is-size-4">{data.encounter.encounterDesc}</p>
</div>
