<script lang="ts">
	import type { PageData } from './$types';
	// export let data: PageData;
	let { data: PageData } = $props();
	let currentCampaign = $state({
		name: '',
		id: ''
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
	<p>{currentCampaign.name} \ {currentEncounter}</p>
	<h1 class="is-size-1">{PageData.campaign.campaignName}</h1>
	<p class="is-size-4">{PageData.campaign.campaignDesc}</p>
</div>
<hr />
{#if PageData.characters}
	<div class="px-4">
		<h2 class="is-size-2">Characters Involved</h2>
		<table class="table">
			<thead>
				<tr>
					<th> Character Name </th>
					<th> Description </th>
				</tr>
			</thead>
			<tbody>
				{#each PageData.characters as character}
					<tr>
						<td><a href={`/character/${character.characterId}`}> {character.characterName}</a></td>
						<td>{character.characterDesc}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
<hr />
{#if PageData.encounters}
	<div class="px-4">
		<h2 class="is-size-2">Encounters</h2>
		<table class="table">
			<thead>
				<tr>
					<th> Encounter Name </th>
					<th> Description </th>
				</tr>
			</thead>
			<tbody>
				{#each PageData.encounters as encounter}
					<tr>
						<td
							><a
								href={`/encounter/${encounter.encounterId}`}
								onclick={() => (currentEncounter = `${encounter.encounterName}`)}
							>
								{encounter.encounterName}</a
							></td
						>
						<td>{encounter.encounterDesc}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
