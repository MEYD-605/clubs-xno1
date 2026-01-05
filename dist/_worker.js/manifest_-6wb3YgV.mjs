globalThis.process ??= {}; globalThis.process.env ??= {};
import { v as decodeKey } from './chunks/astro/server_ACK6epuL.mjs';
import './chunks/astro-designed-error-pages_jNz6whnz.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CSe5C1uE.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///root/clubsxai-web-clean/","cacheDir":"file:///root/clubsxai-web-clean/node_modules/.astro/","outDir":"file:///root/clubsxai-web-clean/dist/","srcDir":"file:///root/clubsxai-web-clean/src/","publicDir":"file:///root/clubsxai-web-clean/public/","buildClientDir":"file:///root/clubsxai-web-clean/dist/","buildServerDir":"file:///root/clubsxai-web-clean/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"ai-lab/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ai-lab","isIndex":false,"type":"page","pattern":"^\\/ai-lab\\/?$","segments":[[{"content":"ai-lab","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ai-lab.astro","pathname":"/ai-lab","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"bartender/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/bartender","isIndex":false,"type":"page","pattern":"^\\/bartender\\/?$","segments":[[{"content":"bartender","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bartender.astro","pathname":"/bartender","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"command-center/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/command-center","isIndex":false,"type":"page","pattern":"^\\/command-center\\/?$","segments":[[{"content":"command-center","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/command-center.astro","pathname":"/command-center","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"free-tools/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/free-tools","isIndex":false,"type":"page","pattern":"^\\/free-tools\\/?$","segments":[[{"content":"free-tools","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/free-tools.astro","pathname":"/free-tools","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"gallery/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"gear/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gear","isIndex":false,"type":"page","pattern":"^\\/gear\\/?$","segments":[[{"content":"gear","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gear.astro","pathname":"/gear","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/root/clubsxai-web-clean/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/root/clubsxai-web-clean/src/pages/ai-lab.astro",{"propagation":"none","containsHead":true}],["/root/clubsxai-web-clean/src/pages/bartender.astro",{"propagation":"none","containsHead":true}],["/root/clubsxai-web-clean/src/pages/command-center.astro",{"propagation":"none","containsHead":true}],["/root/clubsxai-web-clean/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/root/clubsxai-web-clean/src/pages/free-tools.astro",{"propagation":"none","containsHead":true}],["/root/clubsxai-web-clean/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["/root/clubsxai-web-clean/src/pages/gear.astro",{"propagation":"none","containsHead":true}],["/root/clubsxai-web-clean/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/entrypoint":"entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/ai-lab@_@astro":"pages/ai-lab.astro.mjs","\u0000@astro-page:src/pages/bartender@_@astro":"pages/bartender.astro.mjs","\u0000@astro-page:src/pages/command-center@_@astro":"pages/command-center.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/free-tools@_@astro":"pages/free-tools.astro.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/gear@_@astro":"pages/gear.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_-6wb3YgV.mjs","/root/clubsxai-web-clean/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/root/clubsxai-web-clean/node_modules/@astrojs/cloudflare/dist/entrypoints/image-service.js":"chunks/image-service_CZcQ0pHp.mjs","/root/clubsxai-web-clean/src/components/navbar":"_astro/navbar.B0Afn5h9.js","/root/clubsxai-web-clean/src/components/footer":"_astro/footer.DRJCgJnl.js","/root/clubsxai-web-clean/src/components/floating-buttons":"_astro/floating-buttons.DPXkBuzV.js","/root/clubsxai-web-clean/src/components/terminal-console":"_astro/terminal-console.DjCmspKL.js","/root/clubsxai-web-clean/src/components/free-logo-generator":"_astro/free-logo-generator.LFtPAbRL.js","/root/clubsxai-web-clean/src/components/prompt-architect":"_astro/prompt-architect.CcOyL9jg.js","/root/clubsxai-web-clean/src/components/color-palette-agent":"_astro/color-palette-agent.DIzdv13U.js","/root/clubsxai-web-clean/src/components/social-caption-synthesizer":"_astro/social-caption-synthesizer.XC66qAla.js","/root/clubsxai-web-clean/src/components/gallery-preview":"_astro/gallery-preview.CjrGw0X6.js","/root/clubsxai-web-clean/src/components/facebook-feed":"_astro/facebook-feed.BrlkbbEh.js","@astrojs/react/client.js":"_astro/client.9unXo8s5.js","/root/clubsxai-web-clean/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.jPwa1UvM.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.Ck9wPrKK.css","/ai-lab-ai.png","/bo-photo.png","/favicon.svg","/gear-ai.png","/hero-ai.png","/placeholder-logo.png","/placeholder-logo.svg","/placeholder-user.jpg","/placeholder.jpg","/placeholder.svg","/robots.txt","/sitemap.xml","/_astro/client.9unXo8s5.js","/_astro/color-palette-agent.DIzdv13U.js","/_astro/contact.astro_astro_type_script_index_0_lang.jPwa1UvM.js","/_astro/copy.Cj9QRZMK.js","/_astro/createLucideIcon.H8DUYhgo.js","/_astro/facebook-feed.BrlkbbEh.js","/_astro/floating-buttons.DPXkBuzV.js","/_astro/footer.DRJCgJnl.js","/_astro/free-logo-generator.LFtPAbRL.js","/_astro/gallery-preview.CjrGw0X6.js","/_astro/index.WFquGv8Z.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/navbar.B0Afn5h9.js","/_astro/prompt-architect.CcOyL9jg.js","/_astro/refresh-cw.Bk-9h4Eh.js","/_astro/social-caption-synthesizer.XC66qAla.js","/_astro/terminal-console.DjCmspKL.js","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/entrypoint.mjs","/_worker.js/index.js","/_worker.js/renderers.mjs","/images/ai_lab_atmosphere_premium_png_1767329911910.png","/images/ai_lab_futuristic_studio_1767327025303.png","/images/blog_portrait_hero_1767326900998.png","/images/bo_gear_showcase_premium_1767327004065.png","/images/clubs_coffee_mastery.png","/images/clubs_hero_whiskey.png","/images/gear_mastery_showcase_png_1767329800970.png","/images/hero_atmosphere_premium_png_1767329730730.png","/images/service_couple_eternal_png_1767329765958.png","/images/service_event_exclusive_png_1767329782239.png","/images/service_portrait_mastery_png_1767329748801.png","/images/soul_brews_hero_cinematic_1767326984992.png","/images/uploaded_image_0_1767201163489.png","/images/uploaded_image_0_1767237523278.png","/images/uploaded_image_0_1767238044591.png","/images/uploaded_image_1766806757249.png","/images/uploaded_image_1766813690849.png","/images/uploaded_image_1766813804299.png","/images/uploaded_image_1766813817815.png","/images/uploaded_image_1766813865916.png","/images/uploaded_image_1766820114453.png","/images/uploaded_image_1767193271931.png","/images/uploaded_image_1767193919399.png","/images/uploaded_image_1767194091738.png","/images/uploaded_image_1767194190054.png","/images/uploaded_image_1767194242526.png","/images/uploaded_image_1767198763573.png","/images/uploaded_image_1767198905263.png","/images/uploaded_image_1767199005655.png","/images/uploaded_image_1767199066730.png","/images/uploaded_image_1767199175887.png","/images/uploaded_image_1767200121156.png","/images/uploaded_image_1767200308395.png","/images/uploaded_image_1767200396834.png","/images/uploaded_image_1767200679334.png","/images/uploaded_image_1767200785220.png","/images/uploaded_image_1767201035226.png","/images/uploaded_image_1767201330857.png","/images/uploaded_image_1767201414671.png","/images/uploaded_image_1767201545877.png","/images/uploaded_image_1767206765412.png","/images/uploaded_image_1767235390825.png","/images/uploaded_image_1767236877652.png","/images/uploaded_image_1_1767201163489.png","/images/uploaded_image_1_1767237523278.png","/images/uploaded_image_1_1767238044591.png","/videos/gear-parallax.mp4","/videos/hero-bg.mp4","/videos/hero-cinematic.mp4","/videos/lab-bg.mp4","/videos/lab-cinematic.mp4","/videos/meta_1767337053.png","/videos/meta_1767337059.png","/_worker.js/_astro/about.Ck9wPrKK.css","/_worker.js/chunks/_@astro-renderers__-iShZub.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_D46Rp1Ow.mjs","/_worker.js/chunks/astro-designed-error-pages_jNz6whnz.mjs","/_worker.js/chunks/astro_BsjmrvzZ.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/floating-buttons_C5KPcuro.mjs","/_worker.js/chunks/generic_w6xbsvA_.mjs","/_worker.js/chunks/image-service_CZcQ0pHp.mjs","/_worker.js/chunks/index_BbtJIgd8.mjs","/_worker.js/chunks/noop-middleware_CSe5C1uE.mjs","/_worker.js/chunks/path_CH3auf61.mjs","/_worker.js/chunks/remote_Bcm9Fvtc.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/about.astro.mjs","/_worker.js/pages/ai-lab.astro.mjs","/_worker.js/pages/bartender.astro.mjs","/_worker.js/pages/command-center.astro.mjs","/_worker.js/pages/contact.astro.mjs","/_worker.js/pages/free-tools.astro.mjs","/_worker.js/pages/gallery.astro.mjs","/_worker.js/pages/gear.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/services.astro.mjs","/_worker.js/chunks/astro/server_ACK6epuL.mjs","/_worker.js/pages/_actions/_---path_.astro.mjs","/about/index.html","/ai-lab/index.html","/bartender/index.html","/command-center/index.html","/contact/index.html","/free-tools/index.html","/gallery/index.html","/gear/index.html","/services/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"h5RD+k5xD08PlVDOLrTZ8FCntPiznaS1t7K+FlrRw3s=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
