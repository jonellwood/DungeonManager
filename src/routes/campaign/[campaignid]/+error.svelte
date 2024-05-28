<script>
	import { page } from '$app/stores';
</script>

<div class="container px-4">
	<h1 class="is-size-1 has-text-danger">Awwwwww Shit 💩</h1>
	<p>{$page.status}: {$page?.error?.message}</p>
	<a href="/" class="button">Home</a>
</div>
