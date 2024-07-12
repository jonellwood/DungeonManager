import { e as escape_html, f as store_get, u as unsubscribe_stores, c as pop, p as push } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="container px-4"><h1 class="is-size-1 has-text-danger">Awwwwww Shit 💩</h1> <p>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}: ${escape_html(store_get($$store_subs ??= {}, "$page", page)?.error?.message)}</p> <a href="/" class="button">Home</a></div>`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
