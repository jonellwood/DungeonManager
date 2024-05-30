<script>
	/**
	 * @type {any}
	 */
	// let monsters;
	let { data } = $props();
	// async function getMonsters() {
	// 	const myHeaders = new Headers();
	// 	myHeaders.append('Accept', 'application/json');

	// 	const requestOptions = {
	// 		method: 'GET',
	// 		headers: myHeaders,
	// 		redirect: 'follow'
	// 	};

	// 	const monsters = await fetch('https://www.dnd5eapi.co/api/monsters/', requestOptions)
	// 		.then((response) => response.json())
	// 		// .then((result) => console.log(result))
	// 		.catch((error) => console.error(error));
	// 	console.log('MONSTERS');
	// 	console.log(monsters.results[0].name);
	// 	return monsters;
	// }

	// getMonsters();

	// import { json } from '@sveltejs/kit';

	// import data from '../../lib/utils/combined_data.json';
	// let monsters = data.monster;
	// console.log(monsters[4]);
</script>

<h1 class="is-size-1">Old School Monster List</h1>

<div class="px-4">
	<p>Total Count {data.count}</p>
</div>

<div class="px-4">
	<div class="monsters-holder">
		{#if data}
			<!-- <p>We have the {data.results}</p> -->
			{#each data.results as monster}
				<div class="monster-card">
					<!-- <h2 class="mob-name">{monster.name}</h2> -->
					<!-- <button> -->
					<a href={`/monsters/${monster.index}`}> {monster.name}</a>
					<!-- </button> -->
					<!-- <table>
						<tbody>
							<tr>
								<td class="stat">AC:</td><td class="stat">{monster.ac} </td>
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
					</table> -->
				</div>
			{/each}
		{:else}
			<p>Loading data...</p>
		{/if}
	</div>
</div>

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
	a {
		text-decoration: none;
		font-size: larger;
		color: white;
	}
</style>
