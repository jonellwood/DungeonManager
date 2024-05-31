<script lang="ts">
	let { data } = $props();
	// console.log('MONSTER DATA IN PAGE');
	// console.log(data);

	let imgUrl = `https://www.dnd5eapi.co${data.image}`;

	const flattenObject = (obj: { [x: string]: any }, parent = '', res = {}) => {
		for (let key in obj) {
			let propName = parent ? parent + '.' + key : key;
			if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
				flattenObject(obj[key], propName, res);
			} else {
				res[propName] = obj[key];
			}
		}
		return res;
	};

	let flattenedSenses = flattenObject(data.senses);
	let flattenedSpeed = flattenObject(data.speed);
	// setTimeout(setBackground, 2000);
	function addToEncoutner() {
		alert('Added to encounter - not really - but soon');
	}
</script>

<div class="px-4 container" id="mainContainer" style="background-image: url({imgUrl});">
	<h1 class="is-size-1">
		{data.name}
	</h1>
	<button class="button" onclick={addToEncoutner}>Add to Encounter</button>
	<!-- <div class="image">
		<img src="https://www.dnd5eapi.co{data.image}" alt={data.name} />
	</div> -->
	<hr />
	<div class="stats px-4">
		<p><b>Type: </b> {data.type}</p>
		<p><b>Size: </b> {data.size}</p>
		<p><b>Alignment: </b> {data.alignment}</p>
		<p><b>languages: </b> {data.languages}</p>
		<p><b>Hit Points: </b> {data.hit_points}</p>
		<p><b>Charisma: </b> {data.charisma}</p>
		<p><b>Constitution: </b> {data.constitution}</p>
		<p><b>Dexterity: </b> {data.dexterity}</p>
		<p><b>Intelligence: </b> {data.intelligence}</p>
		<p><b>Strength: </b> {data.strength}</p>
		<p><b>Wisdom: </b> {data.wisdom}</p>
		<p><b>XP: </b> {data.xp}</p>
		<!-- <p><b>Speed: </b> Walk: {data.speed.walk}</p>
		{#if data.speed.burrow}
			<p><b>Speed: </b> Burrow: {data.speed.burrow}</p>
		{/if} -->
		{#each Object.entries(flattenedSpeed) as [key, value]}
			<p><b>{key}: </b> {value}</p>
		{/each}
	</div>
	<hr />
	<h2 class="is-size-4">Armor Class</h2>
	{#each data.armor_class as ac}
		<div class="stats px-4">
			<p>
				<b>Condition:</b>
				{#if ac.condition}
					{ac.condition.name}
				{/if}
			</p>
			<p><b>Type:</b> {ac.type}</p>
			<p><b>AC:</b> {ac.value}</p>
		</div>
	{/each}
	<hr />

	<h2 class="is-size-4">Actions - ( {data.actions.length} )</h2>

	{#each data.actions as action}
		<div class="action px-4">
			<div class="stats">
				<p class="actionName is-size-4">{action.name}</p>
				<!-- <p>Damage:</p> -->
			</div>
			<div class="stats">
				<p><b>Attack Bonus :</b> {action.attack_bonus}</p>
				{#each action.damage as damage}
					<p><b>Damage: </b> {damage.damage_dice}</p>
					<p>
						<b>Damage Type: </b>
						<a href="damage/{damage.damage_type.url}" target="_blank"> {damage.damage_type.name}</a>
					</p>
				{/each}
			</div>
			<div class="desc">
				<p>{action.desc}</p>
			</div>
			<hr />
		</div>
	{/each}

	<h2 class="is-size-4">Senses</h2>
	<div class="stats px-4">
		{#each Object.entries(flattenedSenses) as [key, value]}
			<p><b>{key}: </b> {value}</p>
		{/each}
	</div>
	<hr />
	<h2 class="is-size-4">
		Proficiencies - Proficiency Bonus: {data.proficiency_bonus}
	</h2>
	<div class="stats px-4">
		{#each data.proficiencies as proficiency}
			<p><b>{proficiency.proficiency.name}: </b> {proficiency.value}</p>
		{/each}
	</div>
	<hr />
	<h2 class="is-size-4">Special Abilities</h2>
	<div class="stats px-4">
		{#each data.special_abilities as spec_abilities}
			<p><b>{spec_abilities.name}: </b> {spec_abilities.desc}</p>
		{/each}
	</div>
	<hr />
</div>

<style>
	.desc,
	.stats {
		display: flex;
		justify-content: flex-start;
		width: 60%;
		flex-wrap: wrap;
		gap: 15px;
	}
	.actionName {
		font-size: larger;
		font-family: bold;
	}
	a {
		color: inherit;
		cursor: pointer;
		font-style: italic;
	}
	img {
		position: absolute;
		top: 0;
		right: 0;
		width: 200px;
	}
	.container {
		background-size: 500px;
		background-repeat: no-repeat;
		background-position: right top;
	}
</style>
