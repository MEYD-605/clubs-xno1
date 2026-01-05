declare module "astro:actions" {
	type Actions = typeof import("/root/clubsxai-web-clean/src/actions/index.ts")["server"];

	export const actions: Actions;
}