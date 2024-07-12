import { g as ensure_array_like, e as escape_html, d as attr, c as pop, p as push } from "../../chunks/index2.js";
import { r as redirect } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let loggedIn = false;
  let currentCampaign = { name: "none", id: "none", ownerId: "none" };
  let currentEncounter = { name: "none", id: "none", campaignId: "none" };
  function checkForLoggedIn() {
    if (data.username.length > 0)
      ;
    else {
      console.log("Logged in is: ", loggedIn);
      redirect(303, "./login");
    }
  }
  checkForLoggedIn();
  const each_array = ensure_array_like(data.usersCampaigns);
  $$payload.out += `<div class="px-4"><h1 class="is-size-1">${escape_html(data.username)}'s Campaigns</h1> <p>${escape_html(currentCampaign.name)}  ${escape_html(currentEncounter)}</p> <span><button class="button">Reset</button></span> <table class="table"><thead><tr><th>Campaign Name</th><th>Description</th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const campaign = each_array[$$index];
    $$payload.out += "<!--[-->";
    $$payload.out += `<tr><td><a${attr("href", `/campaign/${campaign.id}`, false)}>${escape_html(campaign.name)}</a></td><td>${escape_html(campaign.description)}</td></tr>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</tbody></table></div> <hr>`;
  pop();
}
export {
  _page as default
};
