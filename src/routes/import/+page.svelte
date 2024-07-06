<script lang="ts">
	import { onMount } from 'svelte';
	import fireFrame from '../../lib/img/fire-frame.png';
	let { data } = $props();
	console.log(data);
	// console.log(data.stats);
	let baseRaceId = data.race.baseRaceId;
	// console.log(baseRaceId);
	const keyValuePairArray = [
		{ key: 1, value: 'Strength' },
		{ key: 2, value: 'Dexterity' },
		{ key: 3, value: 'Constitution' },
		{ key: 4, value: 'Intelligence' },
		{ key: 5, value: 'Wisdom' },
		{ key: 6, value: 'Charisma' }
	];

	function getStatName(id: number) {
		let value = keyValuePairArray.find((item) => item.key === id)?.value;
		if (value) {
			return value;
		}
		return 'Unknown';
	}
	function toggleVisibility(val: string) {
		// console.log(val);
		let elToHide = document.getElementById(val);
		if (elToHide) {
			elToHide.style.display = elToHide.style.display === 'none' ? 'block' : 'none';
		}
	}

	function getRacialModifiers(id: number) {
		const matchedObject = data.modifiers.race.find((obj) => obj.entityId === id);
		const fixedValue = matchedObject ? matchedObject.value : 0;
		return fixedValue;
	}
</script>

<div style="background-image: url({data.decorations.backdropAvatarUrl});">
	<div>
		<div class="header">
			<img src={data.decorations.avatarUrl} alt="a toon" class="avatar-img" />
			<div class="details">
				<div class="name">{data.name}</div>
				<div>{data.gender} {data.race.fullName}</div>
				<div><b>Age: </b> {data.age}</div>
			</div>
			<div class="details">
				<div><b>Eyes: </b> {data.eyes}</div>
				<div><b>Hair: </b> {data.hair}</div>
				<div><b>Height: </b> {data.height}</div>
				<div><b>Weight: </b> {data.weight}</div>
			</div>

			<div class="currencies">
				{#each Object.entries(data.currencies) as [currencyType, amount]}
					<div>{currencyType}: {amount}</div>
				{/each}
			</div>

			<div class="hitpoints">
				<div>Hit Points: {data.baseHitPoints}</div>
				<div>Current XP: {data.currentXp}</div>
			</div>
		</div>
		<div class="stats">
			{#each data.stats as stat}
				<div class="stat">
					<p class="tag is-dark is-medium">
						{getStatName(stat.id)}:
					</p>
					<p id={stat.id.toString()} class="stat-value">
						{#if stat.id !== null}
							{stat.value + getRacialModifiers(stat.id)}
						{/if}
					</p>
				</div>
			{/each}
		</div>

		<!-- <img src={data.decorations.backdropAvatarUrl} alt="a toon" /> -->
		<!-- Traits Block -->
		<article class="message">
			<div class="message-header">
				<h3>Traits</h3>
				<button onclick={() => toggleVisibility('traitsMessageBody')} class="hide-button">X</button>
			</div>
			<div class="traits message-body" id="traitsMessageBody">
				<div class="traits-holder">
					<ul>
						<li>
							<b><mark class="tag id-dark is-medium">Appearance:</mark></b>
							{data.traits.appearance}
						</li>
						<li><b><mark class="tag id-dark is-medium">Bonds:</mark></b> {data.traits.bonds}</li>
						<li><b><mark class="tag id-dark is-medium">Flaws:</mark></b> {data.traits.flaws}</li>
						<li><b><mark class="tag id-dark is-medium">Ideals:</mark></b> {data.traits.ideals}</li>
						<li>
							<b><mark class="tag id-dark is-medium">Personality Traits:</mark></b>
							{data.traits.personalityTraits}
						</li>
					</ul>
					<ul>
						<li>
							<b><mark class="tag id-dark is-medium">Backstory:</mark></b>
							{data.notes.backstory}
						</li>
					</ul>
				</div>
			</div>
		</article>
		<!-- Racial Features Block -->
		<article class="message">
			<div class="message-header">
				<h3>Racial Traits</h3>
				<button onclick={() => toggleVisibility('racialTraitsMessageBody')} class="hide-button"
					>X</button
				>
			</div>
			<div class="message-body" id="racialTraitsMessageBody">
				<div class="racialTraits">
					<!-- <img src={data.features[0].avatarUrl} alt="idk" /> -->
					<ul>
						{#each data.race.racialTraits as raceTrait}
							<li>
								<mark class="tag id-dark is-medium"><b>{raceTrait.definition.name}</b></mark>
								{@html raceTrait.definition.description}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</article>
		<!-- Class Features Block -->
		<article class="message">
			<div class="message-header">
				<h3>Class Features</h3>
				<button onclick={() => toggleVisibility('classFeaturesMessageBody')} class="hide-button"
					>X</button
				>
			</div>
			<div class="message-body" id="classFeaturesMessageBody">
				<div class="classFeatures">
					<img src={data.classes[0].definition.avatarUrl} alt="idk" />
					<div>
						{#each data.classes[0].classFeatures as feature}
							<p>{@html feature.definition.description}</p>
						{/each}
					</div>
				</div>
			</div>
		</article>
	</div>
</div>

<style>
	.header {
		display: flex;
		font-size: large;
		gap: 5%;
		margin-bottom: 1%;
		background-color: #00000099;
		justify-content: space-evenly;
	}
	.stats {
		background-color: #00000099;
		display: flex;
		justify-content: space-around;
	}
	.stats p {
		margin-top: 1%;
	}
	.stat {
		display: flex;
		align-items: baseline;
		gap: 5px;
	}
	.stat-value {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		border-radius: 50%;
		margin: 5px;
		height: 75px;
		width: 75px;
		padding-top: 16px;
		background-image: url('../../lib/img/fire-frame-test.png');
		background-size: cover;
		margin-bottom: 20px;
		font-weight: bold;
		font-size: larger;
	}
	.name {
		font-size: x-large;
		font-weight: bold;
		color: darkred;
	}
	.traits-holder,
	.racialTraits,
	.classFeatures {
		background-color: #00000099;
		box-shadow: 0 0 5px 20px #00000050;
		text-transform: capitalize;
		font-size: large;
		/* color: #000000; */
	}
	.classFeatures {
		display: block;
		margin: 20px;
	}
	.racialTraits ul,
	.traits ul {
		list-style-type: none;
		display: flex;
		/* flex-wrap: wrap; */
		flex-direction: column;
		gap: 10px;
		font-size: large;
		padding: 15px;
	}
	.racialTraits ul li {
		display: flex;
		gap: 10px;
	}
	.classFeatures div {
		padding: 36px;
	}
	.classFeatures img {
		float: left;
		flex: 0 0 50%;
		max-width: 10%;
		height: auto;
		margin-bottom: 1rem;
		margin: 15px;
	}

	.traits-holder {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.avatar-img {
		border-radius: 50%;
	}
	.hide-button:hover {
		color: orangered;
		transform: scale(1.5);
	}
</style>
