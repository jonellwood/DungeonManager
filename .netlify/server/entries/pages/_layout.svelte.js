import { d as attr, c as pop, p as push } from "../../chunks/index2.js";
import "../../chunks/index.js";
import "devalue";
import "../../chunks/client.js";
const DragonHead = "/_app/immutable/assets/dragonheadDark-192.CHGGgMsY.png";
function _layout($$payload, $$props) {
  push();
  let { data, children } = $$props;
  $$payload.out += `<div class="container"><nav class="navbar has-text-link-dark" aria-label="main navigation"><div class="navbar-brand"><a class="navbar-item" href="/"><img${attr("src", DragonHead, false)} alt="Tiny cute dragon face" class="svelte-1d81xxg"></a> <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></a></div> <div id="navbarBasicExample" class="navbar-menu"><!--[-->`;
  if (data.session) {
    $$payload.out += `<div class="navbar-start"><a class="navbar-item move-right svelte-1d81xxg" href="/">Home</a> <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link" href="/">Create</a> <div class="navbar-dropdown"><a class="navbar-item" href="/createcampaign">Campaign</a> <a class="navbar-item" href="/">Character</a> <a class="navbar-item" href="/">Encounter</a></div></div> <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link" href="/">More</a> <div class="navbar-dropdown"><a class="navbar-item" href="/">About</a> <a class="navbar-item" href="/codeofconduct">Code of Conduct</a> <a class="navbar-item" href="/privacypolicy">Privacy Policy</a> <a class="navbar-item" href="/">Contact</a> <hr class="navbar-divider"> <a class="navbar-item" href="/">Report an issue</a></div></div> <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link" href="/">Reference</a> <div class="navbar-dropdown"><a class="navbar-item" href="/monsters">Monsters</a></div></div></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  if (!data.session) {
    $$payload.out += `<div class="navbar-end"><div class="navbar-item"><div class="buttons"><a class="button is-primary has-text-primary-00" href="/signup"><strong>Sign up</strong></a> <a class="button is-light has-text-primary-00" href="/login">Log in</a></div></div></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<div class="navbar-end"><div class="navbar-item"><div class="buttons"><form method="post"><button class="button">Log out</button></form></div></div></div>`;
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</div></nav></div> <div class="content"><!--[-->`;
  children($$payload);
  $$payload.out += `<!--]--></div>  <footer class="footer svelte-1d81xxg"><div class="content has-text-centered"><div><strong>DungeonHead</strong> by <a href="https://www.nerd-haven.com">The Community of Nerdhaven</a>. <br> <div class="flex svelte-1d81xxg"><p>Link to <strong>Socials</strong></p> <p>Version Number: 0.0.1</p></div> <img${attr("src", DragonHead, false)} alt="scary dragon face" class="dragonFace svelte-1d81xxg"></div></div></footer>`;
  pop();
}
export {
  _layout as default
};
