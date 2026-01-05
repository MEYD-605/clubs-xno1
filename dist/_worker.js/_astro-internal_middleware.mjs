globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_jNz6whnz.mjs';
import './chunks/astro/server_ACK6epuL.mjs';
import { s as sequence } from './chunks/index_BbtJIgd8.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
