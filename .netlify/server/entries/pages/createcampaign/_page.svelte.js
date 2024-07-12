import { e as escape_html, d as attr, h as bind_props, c as pop, p as push } from "../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let campaign = $$props["campaign"];
  let encounters = $$props["encounters"];
  let npcs = $$props["npcs"];
  let locations = $$props["locations"];
  $$payload.out += `<div class="campaign-editor"><h2>${escape_html(campaign.name)}</h2> <input${attr("value", campaign.name, false)}></div>`;
  bind_props($$props, { campaign, encounters, npcs, locations });
  pop();
}
export {
  _page as default
};
