import * as server from '../entries/pages/character/_characterid_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/character/_characterid_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/character/[characterid]/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.L5Rla0P_.js","_app/immutable/chunks/disclose-version.DdcbDXBJ.js","_app/immutable/chunks/runtime.uElS7Q1D.js","_app/immutable/chunks/render.sCMeNLp7.js","_app/immutable/chunks/lifecycle.DmscHxBc.js","_app/immutable/chunks/props.D23p-qPd.js"];
export const stylesheets = [];
export const fonts = [];
