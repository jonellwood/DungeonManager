import { d as attr, e as escape_html, c as pop, i as stringify, p as push } from "../../../../chunks/index2.js";
import "../../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let currentCampaign = { name: "none", id: "none" };
  let currentEncounter = void 0;
  $$payload.out += `<div class="px-4"><p><a${attr("href", `../campaign/${stringify(currentCampaign.id)}`, false)}>${escape_html(currentCampaign.name)}</a> \\ ${escape_html(currentEncounter)}</p> <h1 class="is-size-1">${escape_html(data.encounter.encounterName)}</h1> <p class="is-size-4">${escape_html(data.encounter.encounterDesc)}</p></div>`;
  pop();
}
export {
  _page as default
};
