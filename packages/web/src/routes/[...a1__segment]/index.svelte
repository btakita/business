<script context="module">
	export async function preload({ query, params }) {
		const { a1__segment } = params
		const path = a1__segment.join('/')
		const response = await this.fetch(`/${path}/json`)
		if (response.ok) {
			return response.json()
		} else {
			return this.error(response.statusCode, await response.text())
		}
	}
</script>

<script>
	import { __session__sapper } from '@ctx-core/sapper/store'
	import A__Edit from '../../content/A__Edit.svelte'
	export let path__content
	export let path__segment
	export let a1__name = null
	export let ctx__parse__md = null
</script>

{#if a1__name}
	<table>
		{#each a1__name as name}
			<tr>
				<td><a href="/{path__segment}/{name}">{name}</a></td>
				<td><A__Edit href="{path__content}/{name}.md"></A__Edit></td>
			</tr>
		{/each}
	</table>
{/if}

{#if ctx__parse__md}
	{@html ctx__parse__md.html}
	<A__Edit href="{path__content}.md"></A__Edit>
{/if}

<style type="text/scss">
	table {
		tr {
			td {
				padding: 0.2rem 0.4rem;
			}
		}
	}
</style>