import { e as escape_html, h as bind_props, c as pop, p as push } from "../../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  $$payload.out += `<div class="px-4"><h1 class="is-size-1">${escape_html(data.character.characterName)}</h1> <p class="is-size-4">${escape_html(data.character.characterDesc)}</p></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
