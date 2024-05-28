<script>
	import { page } from '$app/stores';
	import Wizard from '../../../lib/img/404-wizard.png';
</script>

<div class="container px-4 error-holder">
	<!-- <h1 class="is-size-1 has-text-danger">Awwwwww Shit 💩</h1> -->
	<p>{$page.status}: {$page?.error?.message}</p>
	<img src={Wizard} alt="wizard with 404 ball" width="500px" />
	<p>
		<a href="/" class="button">Home</a>
	</p>
</div>

<style>
	.error-holder {
		display: flex;
		flex-direction: row;
		gap: 10px;
		justify-content: center;
	}
	img {
		margin-top: 30px;
		padding-top: 30px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
