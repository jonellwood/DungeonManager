<script lang="ts">
	import Dice from '../img/pix-dice.svg';
</script>

<nav class="navbar has-text-link-dark" aria-label="main navigation" id="main-nav">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<img src={Dice} alt="Dice" />
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
		<div class="navbar-start">
			<a class="navbar-item move-right" href="/"> Home </a>

			<!-- <a class="navbar-item"> Documentation </a> -->
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link" href="/"> Create</a>

				<div class="navbar-dropdown">
					<a class="navbar-item has-text-link-dark has-background-black" href="/createcampaign">
						Campaign
					</a>
					<a class="navbar-item has-text-link-dark has-background-black" href="/"> Character </a>
					<a class="navbar-item has-text-link-dark has-background-black" href="/"> Encounter </a>
				</div>
			</div>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link" href="/"> More </a>

				<div class="navbar-dropdown">
					<a class="navbar-item has-text-link-dark has-background-black" href="/"> About </a>
					<a class="navbar-item has-text-link-dark has-background-black" href="/">
						Code of Conduct
					</a>
					<a class="navbar-item has-text-link-dark has-background-black" href="/"> Contact </a>
					<hr class="navbar-divider" />
					<a class="navbar-item has-text-link-dark has-background-black" href="/">
						Report an issue
					</a>
				</div>
			</div>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link" href="/"> Reference</a>

				<div class="navbar-dropdown">
					<a class="navbar-item has-text-link-dark has-background-black" href="/monsters">
						Monsters
					</a>
					<!-- <a class="navbar-item has-text-link-dark has-background-black" href="/"> Character </a> -->
					<!-- <a class="navbar-item has-text-link-dark has-background-black" href="/"> Encounter </a> -->
				</div>
			</div>
		</div>

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
	</div>
</nav>

<style>
	@font-face {
		font-family: venca;
		src: url('../../lib//fonts/Vecna.ttf');
	}
	#main-nav {
		font-family: venca !important;
	}
	img {
		position: fixed;
		z-index: 2;
		margin-left: 10px;
		padding-right: 10px;
	}
	.move-right {
		margin-left: 15px;
	}
</style>
