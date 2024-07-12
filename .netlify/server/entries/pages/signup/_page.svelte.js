import { c as pop, p as push } from "../../../chunks/index2.js";
import "devalue";
import "../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="container is-widescreen"><div class="px-4"><h1 class="is-size-2">Sign Up</h1> <form method="POST" class="form"><div class="field"><label class="label" for="username">Username</label> <div class="control"><input class="input" name="username" id="username" placeholder="Pick a unique user name"></div></div> <div class="field"><label class="label" for="password">Password</label> <div class="control"><input class="input" type="password" name="password" id="password"><br></div></div> <div class="field is-grouped"><div class="control"><button class="button is-link">Submit</button></div></div></form></div></div>`;
  pop();
}
export {
  _page as default
};
