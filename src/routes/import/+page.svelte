<script>
	import { onMount } from 'svelte';
	let { data } = $props();
	console.log(data);
	//console.log(data.classes[0].classFeatures[0].definition.description);
</script>

<div class="header">
	<img src={data.decorations.avatarUrl} alt="a toon" />
	<div class="details">
		<div class="name">{data.name}</div>
		<div>{data.gender} {data.race.fullName}</div>
	</div>
	<div class="details">
		<div>Eyes: {data.eyes}</div>
		<div>Hair: {data.hair}</div>
		<div>Height: {data.height}</div>
		<div>Weight: {data.weight}</div>
	</div>
</div>

<!-- <img src={data.decorations.backdropAvatarUrl} alt="a toon" /> -->

<div class="traits">
	<h3>Traits</h3>
	<div class="traits-holder">
		<ul>
			<li>
				<b><mark class="tag is-primary is-medium">Appearance:</mark></b>
				{data.traits.appearance}
			</li>
			<li><b><mark class="tag is-primary is-medium">Bonds:</mark></b> {data.traits.bonds}</li>
			<li><b><mark class="tag is-primary is-medium">Flaws:</mark></b> {data.traits.flaws}</li>
			<li><b><mark class="tag is-primary is-medium">Ideals:</mark></b> {data.traits.ideals}</li>
			<li>
				<b><mark class="tag is-primary is-medium">Personality Traits:</mark></b>
				{data.traits.personalityTraits}
			</li>
		</ul>
		<ul>
			<li>
				<b><mark class="tag is-primary is-medium">Backstory:</mark></b>
				{data.notes.backstory}
			</li>
		</ul>
	</div>
</div>
<hr />
<div class="classFeatures">
	<h3>Class Features</h3>
	<img src={data.classes[0].definition.avatarUrl} alt="idk" />
	<ul>
		{#each data.classes[0].classFeatures as feature}
			<li>{@html feature.definition.description}</li>
		{/each}
	</ul>
</div>

<style>
	.header {
		display: flex;
		font-size: large;
		gap: 2%;
		margin-bottom: 1%;
	}
	.name {
		font-size: x-large;
		font-weight: bold;
		color: darkred;
	}
	.traits,
	.classFeatures {
		background-color: #00000090;
		box-shadow: 0 0 5px 20px #00000050;
		text-transform: capitalize;
		font-size: large;
	}
	.classFeatures ul,
	.traits ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-size: large;
	}
	.traits-holder {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	img {
		border-radius: 50%;
	}
	/* .tag {
		background-color: transparent;
		color: red;
	} */
</style>
