<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="container is-widescreen">
	<div class="px-4">
		<h1 class="is-size-2">Sign Up</h1>
		<form method="POST" use:enhance class="form">
			<div class="field">
				<label class="label" for="username">Username</label>
				<div class="control">
					<input
						class="input"
						name="username"
						id="username"
						placeholder="Pick a unique user name"
					/>
				</div>
			</div>
			<div class="field">
				<label class="label" for="password">Password</label>
				<div class="control">
					<input class="input" type="password" name="password" id="password" /><br />
				</div>
			</div>
			<div class="field is-grouped">
				<div class="control">
					<button class="button is-link">Submit</button>
				</div>
			</div>
		</form>
	</div>
</div>
