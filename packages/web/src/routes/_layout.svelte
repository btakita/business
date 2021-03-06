<script context="module">
	export async function preload({ query, params }) {
		const [response__version, response__a1__name__root__content] =
			await Promise.all([
				this.fetch('/version'),
				this.fetch('/nav/json'),
			])
		const [
			version__,
			{
				a1__name__root__content,
				a1__path__root__content,
			}
		] = await Promise.all([
			response__version.text(),
			response__a1__name__root__content.json(),
		])
		const version = version__.trim()
		return {
			version,
			a1__name__root__content,
			a1__path__root__content,
		}
	}
</script>

<script>
	import { stores } from '@sapper/app'
	import { __VERSION } from '@ctx-core/env/store'
	import { __page__sapper, __preloading__sapper, __session__sapper } from '@ctx-core/sapper/store'
	import { _no__dom } from '@ctx-core/dom'
	import { _html__webfont__fout } from '@ctx-core/google/html'
	import { __class__layout, __prepend__footer } from '../layout/store'
	import { __a1__name__root__content, __a1__path__root__content } from '../content/store'
	import { __theme__invert } from '@ctx-core/theme/store'
	import Header from '../layout/Header.svelte'
	import Footer from '../layout/Footer.svelte'
	const { page, preloading, session } = stores()
	export let version
	export let a1__name__root__content
	export let a1__path__root__content
	__VERSION.set(version)
	$: __page__sapper.set($page)
	$: __preloading__sapper.set($preloading)
	$: __session__sapper.set($session)
	$: $page, __prepend__footer.set('')
	$: __a1__name__root__content.set(a1__name__root__content)
	$: __a1__path__root__content.set(a1__path__root__content)
</script>

{#if _no__dom()}
{@html _html__webfont__fout({ families: ['Source Sans Pro'] })}
{/if}

<div
	{version}
	class="_layout {$__class__layout||''}"
	class:invert="{$__theme__invert}"
>
	<Header></Header>

	<main class="content">
		<div class="content-wrap">
			<slot></slot>
		</div>
	</main>

	<Footer></Footer>
</div>

<style type="text/scss">
	@import '~@btakita-business/web/src/css/variables';
	:global(*) {
		box-sizing: border-box;
	}
	:global(html) {
		opacity: 0;
		&.wf-active {
			opacity: 1;
		}
	}
	:global(body) {
		font-family: 'Source Code Pro', arial, sans-serif;
		font-size: 16px;
		line-height: 1.52;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
	}
	:global(._layout) {
		position: relative;
		background-color: $color__layout;
		color: $color__text;
		min-height: 100vh;
		&.invert {
			background-color: $color__layout__invert;
			color: $color__text__invert;
			:global(a) {
				color: $color__a__invert;
			}
		}
		main {
			position: relative;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			min-height: 600px;
			padding: 1rem 0;
			margin: 0 auto;
			box-sizing: border-box;
			z-index: 0;
		}
	}
	:global(a) {
		text-decoration: none;
		color: $color__a;
	}
	:global(.content-wrap) {
		width: $width__centering;
		margin: 0 auto;
		padding: 0 1.5rem;
		@media (max-width: $width__centering) {
			width: 100%;
		}
	}
	:global(h1, h2, h3, h4, h5, h6, p, body, a, img, blockquote, pre) {
		margin: 0;
		padding: 0;
		border: 0;
	}
	:global(h1) {
		font-size: 1.8em;
		margin-bottom: 1em;
	}
	:global(h2) {
		font-size: 1.6em;
		font-weight: 400;
		line-height: 1.43;
	}
	:global(h3) {
		font-style: italic;
		font-weight: 400;
		font-size: 1.4em;
		margin-top: 1.8em;
		margin-bottom: 0.8em;
	}
	:global(.centerig) {
		margin: auto;
		width: $width__centering;
		@media (max-width: $width__centering) {
			width: 100%;
		}
	}
	:global(blockquote) {
		margin: 1.2em 3em;
		padding-left: 1em;
		font-style: italic;
	}
	:global(hr) {
		border: 0;
		border-top: 1px dashed #d2d2d2;
		height: 0;
		margin: 1.6em 0;
	}
	:global(iframe) {
		display: block;
		margin: 0 auto;
	}
	:global(p, ul) {
		margin-bottom: 1.52em;
	}
	:global(a) {
		&:hover {
			text-decoration: underline;
		}
	}
	:global(img) {
		width: 100%;
	}
	:global(code) {
		font-family: 'Anonymous Pro', monospace;
		display: block;
		padding: 1em;
		background: $color__background__code;
		color: $color__text;
		border-width: 1px;
		border-style: solid;
		&.lang-markdown {
			color: #424242;
			.header, .strong {
				font-weight: bold;
			}
			&.emphasis {
				font-style: italic;
			}
			.horizontal_rule, .link_label, .code, .header, .link_url {
				color: #555;
			}
			.blockquote, .bullet {
				color: #bbb;
			}
		}
	}
	:global(._layout.invert) {
		:global(code) {
			background: $color__background__code__invert;
			color: $color__text__invert;
		}
	}
	:global(.post) {
		margin: 1em 0 2.5em;
	}
</style>
