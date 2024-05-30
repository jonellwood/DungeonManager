<script lang="ts">
	let { data } = $props();
	console.log('MONSTER DATA IN PAGE');
	console.log(data);
</script>

<div class="px-4">
	<h1 class="is-size-1">{data.name}</h1>
	<table>
		<thead>
			<tr>
				<th>Type</th>
				<th>Size</th>
				<th>Alignment</th>
				<th>languages</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{data.type}</td>
				<td>{data.size}</td>
				<td>{data.alignment}</td>
				<td>{data.languages}</td>
			</tr>
			<tr>
				<th>Hit Points</th>
			</tr>
			<tr>
				<td>{data.hit_points}</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	table {
		width: 50%;
	}
</style>
