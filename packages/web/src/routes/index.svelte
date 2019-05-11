<script context="module">
	export async function preload({ query, params }) {
		const name = 'index'
		const response = await this.fetch(`/json`)
		const json = await response.json()
		const { content__md } = json
		return {
			name,
			content__md
		}
	}
</script>

<script>
	import A__Edit from '../content/A__Edit.svelte'
	export let name
	export let content__md
</script>

{@html content__md.html}
<A__Edit href="/_content/index.md"></A__Edit>
