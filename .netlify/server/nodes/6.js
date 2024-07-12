import * as server from '../entries/pages/campaign/_campaignid_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/campaign/_campaignid_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/campaign/[campaignid]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.gSR41oAb.js","_app/immutable/chunks/disclose-version.DdcbDXBJ.js","_app/immutable/chunks/runtime.uElS7Q1D.js","_app/immutable/chunks/render.sCMeNLp7.js","_app/immutable/chunks/proxy.CoHyvOkL.js","_app/immutable/chunks/if.B185loGa.js","_app/immutable/chunks/each.D5kYHQJM.js","_app/immutable/chunks/attributes.GzrMMZMJ.js"];
export const stylesheets = [];
export const fonts = [];
