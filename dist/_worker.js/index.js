globalThis.process ??= {}; globalThis.process.env ??= {};
import { r as renderers } from './chunks/_@astro-renderers__-iShZub.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D46Rp1Ow.mjs';
import { manifest } from './manifest_-6wb3YgV.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page3 = () => import('./pages/ai-lab.astro.mjs');
const _page4 = () => import('./pages/bartender.astro.mjs');
const _page5 = () => import('./pages/command-center.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/free-tools.astro.mjs');
const _page8 = () => import('./pages/gallery.astro.mjs');
const _page9 = () => import('./pages/gear.astro.mjs');
const _page10 = () => import('./pages/services.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["node_modules/astro/dist/actions/runtime/route.js", _page2],
    ["src/pages/ai-lab.astro", _page3],
    ["src/pages/bartender.astro", _page4],
    ["src/pages/command-center.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/free-tools.astro", _page7],
    ["src/pages/gallery.astro", _page8],
    ["src/pages/gear.astro", _page9],
    ["src/pages/services.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
