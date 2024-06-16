<script lang="ts">
	import { browser } from '$app/environment';
	import { redirect } from '@sveltejs/kit';
	let { data } = $props();
	let loggedIn = $state(false);
	let username = $state();
	// let currentCampaign = $state('');
	let currentCampaign = $state({
		name: 'none',
		id: 'none',
		ownerId: 'none'
	});
	let currentEncounter = $state({
		name: 'none',
		id: 'none',
		campaignId: 'none'
	});
	$effect(() => {
		const item = localStorage.getItem('currentCampaign');
		if (item) currentCampaign = JSON.parse(item);
	});

	$effect(() => {
		localStorage.setItem('currentCampaign', JSON.stringify(currentCampaign));
	});

	$effect(() => {
		const item = localStorage.getItem('currentEncounter');
		if (item) currentEncounter = JSON.parse(item);
	});
	$effect(() => {
		localStorage.setItem('currentEncounter', JSON.stringify(currentEncounter));
	});
	function resetCurrentState() {
		localStorage.removeItem('currentCampaign');
		localStorage.removeItem('currentEncounter');
		// why does this not update ???
		$effect(() => {
			const cc = localStorage.getItem('currentCampaign');
			if (cc) currentCampaign = JSON.parse(cc);
			const ce = localStorage.getItem('currentEncounter');
			if (ce) currentEncounter = JSON.parse(ce);
		});
	}
	function checkForLoggedIn() {
		// console.log('data dot username', data.username);
		if (data.username.length > 0) {
			$effect(() => {
				loggedIn = data.username.length > 0;
				username = data.username;
			});
			// console.log('Logged in is:', loggedIn);
			// console.log('User is : ', username);
		} else {
			console.log('Logged in is: ', loggedIn);
			redirect(303, './login');
		}
	}
	checkForLoggedIn();
</script>

<div class="px-4">
	<h1 class="is-size-1">{data.username}'s Campaigns</h1>
	<p>
		{currentCampaign.name} \ {currentEncounter}
	</p>
	<span> <button class="button" onclick={resetCurrentState}>Reset</button></span>
	<table class="table">
		<thead>
			<tr>
				<th> Campaign Name </th>
				<th> Description </th>
			</tr>
		</thead>
		<tbody>
			{#each data.usersCampaigns as campaign}
				<tr>
					<td
						><a
							href={`/campaign/${campaign.id}`}
							onclick={() =>
								(currentCampaign.name = `${campaign.name}`) &&
								(currentCampaign.id = `${campaign.id}`) &&
								(currentCampaign.ownerId = `${data.userId}`)}
						>
							{campaign.name}</a
						></td
					>
					<td>{campaign.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<hr />
