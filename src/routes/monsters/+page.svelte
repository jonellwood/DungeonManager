<script>
	import data from '../../lib/data/bestiary-ai.json';
	// let { data } = $props();
	let monsterNames = data.monster.map((item) => item.name);
	let monsters = data.monster;
	console.log(data);
</script>

<h1 class="is-size-1">Old School Monster List</h1>

<ul class="px-4">
	{#each monsters as monster}
		<li>
			<ul>
				<li class="mobName">{monster.name}</li>
				<li>
					<!-- Stats: -->
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
</ul>

<style>
	.mobName {
		font-size: larger;
		font-weight: bold;
	}
</style>
