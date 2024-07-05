<script lang="ts">
	import MarkdownEditor from '$lib/components/MarkdownEditor.svelte';
	import type { campaign } from '$lib/server/db/types';
	// export let campaign: {name: string; encounters: string[]; npcs: string[]; locations: string[] };
	export let campaign: campaign;
	export let encounters: string[];
	export let npcs: string[];
	export let locations: string[];
	// function createCampaign() {
	// 	campaign.encounters = encounters.split('\n\n').filter(Boolean);
	// 	campaign.npcs = npcs.split('\n\n').filter(Boolean);
	// 	campaign.locations = locations.split('\n\n').filter(Boolean);
	// 	campaign.update((c) => c);
	// }
	// 	function createCampaign() {
	// 		campaign.encounters = encounters
	// 			.map((e) => e.split('\n\n'))
	// 			.flat()
	// 			.filter(Boolean);
	// 		campaign.npcs = npcs
	// 			.map((n) => n.split('\n\n'))
	// 			.flat()
	// 			.filter(Boolean);
	// 		campaign.locations = locations
	// 			.map((l) => l.split('\n\n'))
	// 			.flat()
	// 			.filter(Boolean);
	// 		campaign.update((c) => c);
	// 	}
	//
</script>

<!-- <div class="campaign-editor"> -->
<!-- </script> -->

<div class="campaign-editor">
	<h2>{campaign.name}</h2>
	<input bind:value={campaign.name} on:input={createCampaign} />
</div>
