<script context="module">
	export async function preload({ query, params }) {
		const { name } = params
		const response = await this.fetch(`/holochain/${name}.json`)
		const json = await response.json()
		const { content } = json
		return {
			name,
			content
		}
	}
</script>

<script>
	import A__Edit from '../../layout/A__Edit.svelte'
	import { __url__edit__source } from '../../layout/store'
	export let name
	export let content
</script>

{@html content.html}

<A__Edit href="/build/install/_content/{name}.md"></A__Edit>