import * as server from '../entries/pages/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.CS8mShQk.js","_app/immutable/chunks/disclose-version.DdcbDXBJ.js","_app/immutable/chunks/runtime.uElS7Q1D.js","_app/immutable/chunks/render.sCMeNLp7.js","_app/immutable/chunks/proxy.CoHyvOkL.js","_app/immutable/chunks/each.D5kYHQJM.js","_app/immutable/chunks/attributes.GzrMMZMJ.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js"];
export const stylesheets = [];
export const fonts = [];
