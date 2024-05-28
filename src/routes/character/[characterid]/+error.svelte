<script>
	import { page } from '$app/stores';
	import Wizard from '../../../lib/img/404-wizard.png';
</script>

<div class="container px-4">
	<p>{$page.status}: {$page?.error?.message}</p>
	<a href="/" class="button">Home</a>
	<img src={Wizard} alt="wizard with 404 ball" />
</div>
