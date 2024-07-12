import * as server from '../entries/pages/login/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.B9owQPiA.js","_app/immutable/chunks/disclose-version.DdcbDXBJ.js","_app/immutable/chunks/runtime.uElS7Q1D.js","_app/immutable/chunks/forms.BulBIi1J.js","_app/immutable/chunks/entry.ghznpxEK.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/attributes.GzrMMZMJ.js","_app/immutable/chunks/stores.-cvoGDN-.js"];
export const stylesheets = ["_app/immutable/assets/12.0xZn2J97.css"];
export const fonts = ["_app/immutable/assets/Vecna.Dsy83G9i.ttf"];
