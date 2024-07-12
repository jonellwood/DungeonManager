import * as server from '../entries/pages/monsters/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/monsters/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/monsters/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.1b02SMR2.js","_app/immutable/chunks/disclose-version.DdcbDXBJ.js","_app/immutable/chunks/runtime.uElS7Q1D.js","_app/immutable/chunks/render.sCMeNLp7.js","_app/immutable/chunks/if.B185loGa.js","_app/immutable/chunks/each.D5kYHQJM.js","_app/immutable/chunks/attributes.GzrMMZMJ.js"];
export const stylesheets = ["_app/immutable/assets/13.i8Bpeahd.css"];
export const fonts = [];
