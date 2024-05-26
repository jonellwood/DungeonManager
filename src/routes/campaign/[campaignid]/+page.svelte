<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="px-4">
	<h1 class="is-size-1">{data.campaign.campaignName}</h1>
	<p class="is-size-4">{data.campaign.campaignDesc}</p>
</div>

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
			{#each data.characters as character}
				<tr>
					<td><a href={`/character/${character.characterId}`}> {character.characterName}</a></td>
					<td>{character.characterDesc}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

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
			{#each data.encounters as encounter}
				<tr>
					<td><a href={`/encounter/${encounter.encounterId}`}> {encounter.encounterName}</a></td>
					<td>{encounter.encounterDesc}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
