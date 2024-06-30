<script>
	import { Carta, MarkdownEditor } from 'carta-md';
	import 'carta-md/default.css'; /* Default theme */
	import DOMPurify from 'isomorphic-dompurify';

	const carta = new Carta({
		/* ... */
		// Remember to use a sanitizer to prevent XSS attacks!
		// More on that below
		sanitizer: DOMPurify.sanitize
	});

	let value = '';
</script>

<h1>Campaign Creator</h1>

<MarkdownEditor {carta} bind:value />

<style>
	/* Set your monospace font (Required to have the editor working correctly!) */
	:global(.carta-font-code) {
		font-family: '...', monospace;
		font-size: 1.1rem;
	}
</style>
