import { e as escape_html, g as ensure_array_like, d as attr, c as pop, p as push } from "../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<h1 class="is-size-1">Old School Monster List</h1> <div class="px-4"><p>Total Count ${escape_html(data.count)}</p></div> <div class="px-4"><div class="monsters-holder svelte-5j14nk"><!--[-->`;
  if (data) {
    const each_array = ensure_array_like(data.results);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0; $$index < each_array.length; $$index++) {
      const monster = each_array[$$index];
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="monster-card svelte-5j14nk"><a${attr("href", `/monsters/${monster.index}`, false)} class="svelte-5j14nk">${escape_html(monster.name)}</a></div>`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<p>Loading data...</p>`;
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</div></div>`;
  pop();
}
export {
  _page as default
};
