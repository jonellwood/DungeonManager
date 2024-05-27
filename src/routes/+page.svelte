<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	let { data } = $props();
	let loggedIn = $state(false);
	let username = $state();
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
					<td><a href={`/campaign/${campaign.id}`}> {campaign.name}</a></td>
					<td>{campaign.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<hr />
