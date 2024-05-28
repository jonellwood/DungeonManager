<script lang="ts">
	import { json } from '@sveltejs/kit';
	let s = $state();
	import data from '../../lib/data/bestiary-ai.json';
	// import data from `../../lib/data/bestiary-${s}.json`;
	// let { data } = $props();
	//let monsterNames = data.monster.map((item) => item.name);
	let monsters = data.monster;
	// console.log(data);
	// import { onDestroy } from 'svelte';
	let sources = ['aatm', 'aitfr-dn', 'aitfr-fcd', 'aitfr-isf', 'aitfr-thp', 'awm', 'bam', 'bgdia'];
	let selectedSource = $state(sources[0]);
	let jsonData = $state();
	let monList = $state([]);
	// let monsterList= JSON.parse(jsonData);
	async function loadJson(source: string) {
		try {
			const module = await import(`../../lib/data/bestiary-${source}.json`);
			// console.log(module);
			if (jsonData !== null) {
				// jsonData.set(module.default);
				jsonData = module;
				monList = jsonData.monster;
				console.log(monList);
			}
			// console.log(jsonData);
			// $effect(() => {
			// 	jsonData = module;
			// });
			// jsonData.set(module.default);
		} catch (error) {
			console.error(`Error loading from source ${source}:`, error);
			// (if error){
			// jsonData.set(null);
			jsonData = null;
			// }
		}
	}
	$effect(() => {
		loadJson(selectedSource);
	});

	// onDestroy(() => {
	// 	selectedSource.unsubscribe();
	// })
</script>

<h1 class="is-size-1">Old School Monster List</h1>

<!-- <select bind:value={selectedSource}>
	{#each sources as source}
		<option value={source}>{source}</option>
	{/each}
</select>
-->

<div class="px-4">
	<label for="monSource">Select a Source</label>
	<select
		name="monSource"
		id="monSource"
		bind:value={selectedSource}
		on:change={loadJson(selectedSource)}
	>
		<option value="ai" selected>ai</option>
		{#each sources as source}
			<option value={source}>{source}</option>
		{/each}
	</select>
	<p>Total Count {monList.length}</p>
</div>

<div class="px-4">
	<div class="monsters-holder">
		{#if jsonData}
			{#each monList as monster}
				<div class="monster-card">
					<h2 class="mob-name">{monster.name}</h2>
					<table>
						<tbody>
							<tr>
								<td class="stat">AC:</td><td class="stat"
									>{monster.ac[0].ac} from {monster.ac[0].from}</td
								>
							</tr>
							<tr>
								<td class="stat">HP: </td>
								<td class="stat">{monster.hp.average}</td>
								<td class="stat">Formula: </td>
								<td class="stat">{monster.hp.formula}</td>
							</tr>
							<tr>
								<td class="stat">Dex: </td>
								<td class="stat"> {monster.dex} </td>
								<td class="stat">Int: </td>
								<td class="stat"> {monster.int}</td>
							</tr>
						</tbody>
					</table>
				</div>
			{/each}
		{:else}
			<p>Loading data...</p>
		{/if}
	</div>
</div>

<!-- <ul class="px-4">
	{#each monsters as monster}
		<li>
			<ul>
				<li class="mobName">{monster.name}</li>
				<li>
					<ul>
						<li>AC: {monster.ac[0].ac} from {monster.ac[0].from}</li>
						<li>HP: {monster.hp.average} Formula: {monster.hp.formula}</li>
						<li>Dex: {monster.dex} Int: {monster.int}</li>
					</ul>
				</li>
				<li><button class="button">Add to Encounter</button></li>
			</ul>
			<hr />
		</li>
	{/each}
</ul> -->

<style>
	.mob-name {
		font-size: larger;
		font-weight: bold;
	}
	.monsters-holder {
		margin-top: 15px;
		margin-left: auto;
		margin-right: auto;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		padding: 20px;
		gap: 10px;
	}
	.monster-card {
		border: 1px solid darkslategray;
		width: 85%;
		padding: 10px;
	}
	.stat {
		font-family: monospace !important;
	}
</style>
