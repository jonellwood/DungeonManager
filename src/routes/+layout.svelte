<script lang="ts">
	import Nav from '../lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div>
	<Nav />
</div>

<slot />
<Footer />
