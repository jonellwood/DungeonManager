import * as server from '../entries/pages/monsters/_monsterid_/_page.server.ts.js';

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/monsters/_monsterid_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/monsters/[monsterid]/+page.server.ts";
export const imports = ["_app/immutable/nodes/14.CANi2rnf.js","_app/immutable/chunks/disclose-version.DdcbDXBJ.js","_app/immutable/chunks/runtime.uElS7Q1D.js","_app/immutable/chunks/render.sCMeNLp7.js","_app/immutable/chunks/if.B185loGa.js","_app/immutable/chunks/each.D5kYHQJM.js","_app/immutable/chunks/attributes.GzrMMZMJ.js"];
export const stylesheets = ["_app/immutable/assets/14.CTJR94Ie.css"];
export const fonts = [];
