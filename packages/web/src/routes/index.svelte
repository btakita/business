<script context="module">
	export async function preload({ query, params }) {
		const name = 'index'
		const response = await this.fetch(`/json`)
		const json = await response.json()
		const { ctx__parse__md } = json
		return {
			name,
			ctx__parse__md
		}
	}
</script>

<script>
	import A__Edit from '../content/A__Edit.svelte'
	export let name
	export let ctx__parse__md
</script>

{@html ctx__parse__md.html}
<A__Edit href="/_content/index.md"></A__Edit>
