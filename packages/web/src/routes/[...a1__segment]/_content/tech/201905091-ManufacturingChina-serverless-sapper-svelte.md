To achieve the features & goals of the ManufacturingChina platform, it's advantageous to have:
* A useful & compelling web & mobile app
* SEO
* Low latency user experience for read & write operations
* Low server costs
* Fast & maintainable development
* Reusable components
* Well integrated 3rd Party Services for non-differentiating features
* Multi-instance/Multi-tenant architecture for manufacturers & their offerings

A serverless web architecture utilizing Sapper/Sveltejs on Node.js & NativeScript on Mobile Devices
	will implement these requirements.

# Serverless Web Architecture

There are several Serverless Web App platforms available including:

* AWS
	* Lambda
	* DynamoDB
	* RDS
	* S3
	* Cloudfront
* Netlify (utilizes AWS Lambda)
* Zeit Now (CDN, Lambdas)
* Surge.sh (Static files only)
* Cloudflare (Expansive CDN Edge Caching & Edge Workers)

To take advantage of this architecture, the application stack needs to have

* low memory usage
* a fast startup time
* SSR (Server Side Rendering) for CDN caching & SEO

Since ManufacturingChina has a globally distributed clientele, CDN caching is essential.
It's important to understand the reach of the CDN provider, particularly in China.

The location of writable data servers is also important for clients
	who will be performing writes (e.g. manufacturers).
A multi-master, globally replicated database would best fit these needs.

# Development Platform

## <a target="_blank" href="https://svelte.dev/">Sveltejs</a>

Sveltejs has a compiler that packages components to be used in the browser & to be rendered in the server.
The compiled package has no runtime dependencies, opposed to other libraries (react, vue, angular),
	which require a the versioned library runtime to be loaded.
The Svelte compiler enables a tiny payload, which is performant, uses little memory, & requires less code.

The <a target="_blank" href="https://medium.freecodecamp.org/a-realworld-comparison-of-front-end-frameworks-with-benchmarks-2019-update-4be0d3c78075">
		real world benchmark
	</a> demonstrates
* Svelte's small payload
* little lines of code (less software, less bugs)
* performance

Svelte has a built-in functional reactive store, which streamlines the data flow of interactive apps
	that scale with feature complexity.
Svelte components are integrated with CSS frameworks such as
	<a target="_blank" href="https://github.com/sass/node-sass">SASS</a>.
Svelte also has support for animations built in & there is active work being done on WebGL 3D rendering.

See the <a target="_blank" href="https://svelte.dev/tutorial/basics">tutorial</a> for a programatic introduction
	to Sveltejs.
The components are HTML files, so it's easy to get started.

## <a target="_blank" href="https://sapper.svelte.technology/">Sapper</a>

Sapper, similar to next.js, vuex, is a full stack app server that utilizes Svelte for DOM rendering & SSR.
Sapper supports caching, automatic code-splitting, static exports, HTTP handlers, etc.
Sapper also has a dev server which restarts when changes are made, speeding up development.

In a production environment, Sapper has low memory usage & a quick start time, enabling serverless hosting.

## <a target="_blank" href="https://www.nativescript.org/">NativeScript</a>

NativeScript enables front-end component libraries to be used with Native Components.
<a target="_blank" href="https://www.nativescript.org/nativescript-sidekick">NativeScript Sidekick</a>
	has a cloud build, which enables developers to build native iOS or Android apps,
 	with emulators for testing, without having to maintain local development environments.

## <a target="_blank" href="https://svelte-native.technology/">Svelte Native</a>

Svelte Native compiles a Svelte Nativescript app for iOS & Android.
The compiler enables a more efficient build than component libraries that require a runtime (React, Vue, Angular).

# 3rd Party Platforms & Services

Certain 3rd party platforms & services can reduce the amount of work needed to create apps.

<a target="_blank" href="https://auth0.com/">**Auth0**</a> provides authorization services, including multi-factor auth,
	at a low price.
Auth0 also provides a dashboard to manage accounts & data associated with the accounts.
Auth0 has an <a target="_blank" href="https://auth0.com/docs/api/authentication">authentication</a> 
	& <a target="_blank" href="https://auth0.com/docs/api/management/v2">management</a> api.
Using Auth0 or a comparable service, would speed up time to create features, facilitate a serverless architecture,
	& remove the burden of maintain servers for authentication in a global network.

**AWS** has a strong presence all over the world,
	including <a target="_blank" href="https://www.cloudflare.com/network/china/">China</a>.

**DynamoDB** allows multi-master global replication.
DynamoDB is also performant & cost-effective, with costs based on usage.  

**AWS Lambda** functions can run sapper applications hosted in AWS data centers.
Other Lambda functions for services can also be provisioned.

<a target="_blank" href="https://zeit.co/">**Zeit**</a> is a serverless computing platform
	that supports multiple programming languages.
In apis where server side performance is critical, a high performance language such as Rust or Go can be used.

**Cloudflare** is an extensive, inexpensive, & feature-rich CDN.
Cloudflare has a cache-invalidation API
	& <a target="_blank" href="https://blog.cloudflare.com/introducing-cloudflare-workers/">edge workers</a>.

# Conclusion

ManufacturingChina's platform will be accessed around the world, with write traffic presumably coming from China.
These concerns make it imperative to adopt a serverless hosting platform to reduce costs, development,
	devops, & deployment time.
Fortunately, serverless development is quick, efficient, & maintainable
	with tools such as SvelteJS, Sapper, DynamoDB, Lambda/Zeit, Cloudflare.
