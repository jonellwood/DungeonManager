<script lang="ts">
	//import Nav from '../lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { redirect } from '@sveltejs/kit';
	import Dice from '../lib/img/pix-dice.svg';
	let { data, children } = $props();
	import { enhance } from '$app/forms';
	// console.log('layout says data is ');
	// console.log(data);
	import DragonSmall from '../lib/img/dragon-192.png';
	import DragonHead from '../lib/img/dragonheadDark-192.png';
	import DragonTiny from '../lib/img/dragon-32.png';
</script>

<div class="container">
	<nav class="navbar has-text-link-dark" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<img src={DragonHead} alt="Tiny cute dragon face" />
			</a>

			<a
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
				href="/"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			{#if data.session}
				<div class="navbar-start">
					<a class="navbar-item move-right" href="/">Home </a>
					<!-- <a class="navbar-item"> Documentation </a> -->
					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link" href="/"> Create</a>

						<div class="navbar-dropdown">
							<a class="navbar-item" href="/createcampaign"> Campaign </a>
							<a class="navbar-item" href="/"> Character </a>
							<a class="navbar-item" href="/"> Encounter </a>
						</div>
					</div>
					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link" href="/"> More </a>

						<div class="navbar-dropdown">
							<a class="navbar-item" href="/"> About </a>
							<a class="navbar-item" href="/codeofconduct"> Code of Conduct </a>
							<a class="navbar-item" href="/privacypolicy"> Privacy Policy </a>
							<a class="navbar-item" href="/"> Contact </a>
							<hr class="navbar-divider" />
							<a class="navbar-item" href="/"> Report an issue </a>
						</div>
					</div>
					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link" href="/"> Reference</a>

						<div class="navbar-dropdown">
							<a class="navbar-item" href="/monsters"> Monsters </a>
							<!-- <a class="navbar-item" href="/"> Character </a> -->
							<!-- <a class="navbar-item" href="/"> Encounter </a> -->
						</div>
					</div>
				</div>
			{/if}
			{#if !data.session}
				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<a class="button is-primary has-text-primary-00" href="/signup">
								<strong>Sign up</strong>
							</a>
							<a class="button is-light has-text-primary-00" href="/login"> Log in </a>
						</div>
					</div>
				</div>
			{:else}
				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<form method="post" use:enhance>
								<button class="button">Log out</button>
							</form>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</nav>
</div>
<div class="content">
	{@render children()}
</div>
<!-- <slot /> -->
<!-- <Footer /> -->

<footer class="footer">
	<div class="content has-text-centered">
		<div>
			<strong>Dungeon Dashboard</strong> by
			<a href="https://www.nerd-haven.com">The Community of Nerdhaven</a>.
			<br />
			<!-- The source code is licensed
					<a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is
					licensed
					<a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>. -->
			<div class="flex">
				<p>
					Link to <strong>Socials</strong>
				</p>
				<p>Version Number: 0.0.1</p>
			</div>
			<!-- <img src={DragonSmall} alt="scary dragon face" class="dragonFace" /> -->
			<img src={DragonHead} alt="scary dragon face" class="dragonFace" />
		</div>
	</div>
</footer>

<style>
	/* .container {
		height: 100vh;
	} */

	.footer {
		position: relative;
		bottom: 0;
		max-height: fit-content;
		display: flex;
		justify-content: space-evenly;
	}
	img {
		/* position: fixed; */
		z-index: 2;
		/* margin-left: 10px; */
		/* padding-right: 10px; */
		/* margin-top: 30px; */
	}
	.move-right {
		margin-left: 15px;
	}
	.flex {
		display: flex;
		justify-content: space-around;
		margin-left: 15%;
		margin-right: 15%;
		padding-top: 5px;
	}
	.dragonFace {
		position: relative;
		width: 100px;
		border-radius: 20%;
	}
</style>
