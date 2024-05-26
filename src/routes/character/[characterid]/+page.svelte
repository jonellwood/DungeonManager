<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="px-4">
	<h1 class="is-size-1">{data.character.characterName}</h1>
	<p class="is-size-4">{data.character.characterDesc}</p>
</div>
