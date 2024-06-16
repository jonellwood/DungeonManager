<script lang="ts">
	import dungDash from '../../lib/img/dragonhead-512.png';

	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	$page;
</script>

<div class="container main">
	<div class="left">
		<img src={dungDash} alt="Dung Dash" />
	</div>
	<div class="right">
		<div class="px-4">
			<h1 class="is-size-2 logInText">Log In</h1>
			<form method="POST" use:enhance class="form">
				<div class="field">
					<label class="label" for="username">Username</label>
					<div class="control">
						<input class="input" name="username" id="username" placeholder="Enter your user name" />
					</div>
				</div>
				<div class="field">
					<label class="label" for="password">Password</label>
					<div class="control">
						<input
							class="input"
							type="password"
							name="password"
							id="password"
							placeholder="Enter your password"
						/><br />
					</div>
				</div>
				<div class="field is-grouped">
					<div class="control">
						<button class="button is-link">Continue</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>

<style>
	@font-face {
		font-family: venca;
		src: url('../../lib//fonts/Vecna.ttf');
	}

	.main {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	img {
		width: fit-content;
	}
	.right {
		font-family: venca;
	}
</style>
