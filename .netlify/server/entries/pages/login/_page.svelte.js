import { f as store_get, d as attr, u as unsubscribe_stores, c as pop, p as push } from "../../../chunks/index2.js";
import "devalue";
import "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
const dungDash = "/_app/immutable/assets/dragonhead-512.Crnnxi-s.png";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  store_get($$store_subs ??= {}, "$page", page);
  $$payload.out += `<div class="container main svelte-8ejb3r"><div class="left"><img${attr("src", dungDash, false)} alt="Dung Dash" class="svelte-8ejb3r"></div> <div class="right svelte-8ejb3r"><div class="px-4"><h1 class="is-size-2 logInText">Log In</h1> <form method="POST" class="form"><div class="field"><label class="label" for="username">Username</label> <div class="control"><input class="input" name="username" id="username" placeholder="Enter your user name"></div></div> <div class="field"><label class="label" for="password">Password</label> <div class="control"><input class="input" type="password" name="password" id="password" placeholder="Enter your password"><br></div></div> <div class="field is-grouped"><div class="control"><button class="button is-link">Continue</button></div></div></form></div></div></div>`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
