<script context="module">
	export async function preload({ query, params }) {
		const { name } = params
		const response = await this.fetch(`/holochain/${name}/json`)
		const json = await response.json()
		const { content__md } = json
		return {
			name,
			content__md
		}
	}
</script>

<script>
	import A__Edit from '../../../layout/A__Edit.svelte'
	import { __url__edit__source } from '../../../layout/store'
	export let name
	export let content__md
</script>

{@html content__md.html}

<A__Edit href="/holochain/_content/{name}.md"></A__Edit>