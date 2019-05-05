<script context="module">
	export async function preload({ query, params }) {
		const response = await this.fetch('/holochain.json')
		const json = await response.json()
		const { a1__name } = json
		return {
			a1__name
		}
	}
</script>

<script>
	import { basename } from 'path'
	import A__Edit from '../../layout/A__Edit.svelte'
	import { __url__edit__source } from '../../layout/store'
	export let a1__name
</script>

<h1>Holochain</h1>

{#each a1__name as name}
	<a href="/holochain/{name}">{name}</a>
{/each}

<A__Edit href="/holochain/_content"></A__Edit>