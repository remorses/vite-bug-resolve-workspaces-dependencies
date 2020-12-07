import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from '/@npm/htm/preact';
import hydrate from '/@npm/preact-iso/hydrate';
import { LocationProvider, Router } from '/@npm/preact-iso/router';
import lazy, { ErrorBoundary } from '/@npm/preact-iso/lazy';
import Home from './pages/home/index.js';
import NotFound from './pages/_404.js';
import Header from './header.js';
import { SomeComponent } from '/@npm/linked-pkg'

const About = lazy(() => import('./pages/about/index.js'));

export function App() {
	return (
		html`<${LocationProvider}>
			<${SomeComponent}/>
			<div class="app">
				<${Header} />
				<${ErrorBoundary}>
					<${Router}>
						<${Home} path="/" />
						<${About} path="/about" />
						<${NotFound} default />
					<//>
				<//>
			</div>
		<//>`
	);
}

hydrate(html`<${App} />`);

export async function prerender(data) {
	const { default: prerender } = await import('/@npm/preact-iso/prerender');
	return await prerender(html`<${App} ...${data} />`);
}


import '/@npm/@prefresh/core';
if ($IMPORT_META_HOT$) {
  let a=0, m=import(import.meta.url);
  $IMPORT_META_HOT$.accept(async ({module}) => {
    m = await m;
    try {
      if (!a++) for (let i in module) self.__PREFRESH__.replaceComponent(m[i], module[i]);
    } catch (e) {
      $IMPORT_META_HOT$.invalidate();
      throw e;
    }
  });
}
