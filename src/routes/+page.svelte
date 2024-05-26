<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="px-4">
	<h1 class="is-size-1">Campaigns</h1>
	<table class="table">
		<thead>
			<tr>
				<th> Campaign Name </th>
				<th> Description </th>
			</tr>
		</thead>
		<tbody>
			{#each data.campaigns as campaign}
				<tr>
					<td><a href={`/campaign/${campaign.id}`}> {campaign.name}</a></td>
					<td>{campaign.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<hr />
<!-- <div class="px-4">
	<form method="POST">
		<div class="field">
			<label for="name" class="label">Name </label>
			<div class="control">
				<input type="text" name="name" required />
			</div>
		</div>
		<div class="field">
			<label for="description" class="label">Description</label>
			<div class="control">
				<input type="text" name="description" required />
			</div>
		</div>
		<div class="field is-grouped">
			<div class="control">
				<button class="button is-link is-light">Create</button>
			</div>
		</div>
	</form>
</div> -->
