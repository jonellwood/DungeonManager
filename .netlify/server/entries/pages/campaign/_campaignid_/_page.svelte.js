import { e as escape_html, g as ensure_array_like, d as attr, c as pop, p as push } from "../../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let { data: PageData } = $$props;
  let currentCampaign = { name: "", id: "" };
  let currentEncounter = void 0;
  $$payload.out += `<div class="px-4"><p>${escape_html(currentCampaign.name)}  ${escape_html(currentEncounter)}</p> <h1 class="is-size-1">${escape_html(PageData.campaign.campaignName)}</h1> <p class="is-size-4">${escape_html(PageData.campaign.campaignDesc)}</p></div> <hr> <!--[-->`;
  if (PageData.characters) {
    const each_array = ensure_array_like(PageData.characters);
    $$payload.out += `<div class="px-4"><h2 class="is-size-2">Characters Involved</h2> <table class="table"><thead><tr><th>Character Name</th><th>Description</th></tr></thead><tbody><!--[-->`;
    for (let $$index = 0; $$index < each_array.length; $$index++) {
      const character = each_array[$$index];
      $$payload.out += "<!--[-->";
      $$payload.out += `<tr><td><a${attr("href", `/character/${character.characterId}`, false)}>${escape_html(character.characterName)}</a></td><td>${escape_html(character.characterDesc)}</td></tr>`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</tbody></table></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <hr> <!--[-->`;
  if (PageData.encounters) {
    const each_array_1 = ensure_array_like(PageData.encounters);
    $$payload.out += `<div class="px-4"><h2 class="is-size-2">Encounters</h2> <table class="table"><thead><tr><th>Encounter Name</th><th>Description</th></tr></thead><tbody><!--[-->`;
    for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
      const encounter = each_array_1[$$index_1];
      $$payload.out += "<!--[-->";
      $$payload.out += `<tr><td><a${attr("href", `/encounter/${encounter.encounterId}`, false)}>${escape_html(encounter.encounterName)}</a></td><td>${escape_html(encounter.encounterDesc)}</td></tr>`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</tbody></table></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  pop();
}
export {
  _page as default
};
