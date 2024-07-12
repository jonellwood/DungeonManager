import { g as ensure_array_like, d as attr, i as stringify, e as escape_html, c as pop, p as push } from "../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  console.log(data);
  data.race.baseRaceId;
  const keyValuePairArray = [
    { key: 1, value: "Strength" },
    { key: 2, value: "Dexterity" },
    { key: 3, value: "Constitution" },
    { key: 4, value: "Intelligence" },
    { key: 5, value: "Wisdom" },
    { key: 6, value: "Charisma" }
  ];
  function getStatName(id) {
    let value = keyValuePairArray.find((item) => item.key === id)?.value;
    if (value) {
      return value;
    }
    return "Unknown";
  }
  function getRacialModifiers(id) {
    const matchedObject = data.modifiers.race.find((obj) => obj.entityId === id);
    const fixedValue = matchedObject ? matchedObject.value : 0;
    return fixedValue;
  }
  const each_array = ensure_array_like(Object.entries(data.currencies));
  const each_array_1 = ensure_array_like(data.stats);
  const each_array_2 = ensure_array_like(data.race.racialTraits);
  const each_array_3 = ensure_array_like(data.classes[0].classFeatures);
  $$payload.out += `<div${attr("style", `background-image: url(${stringify(data.decorations.backdropAvatarUrl)});`, false)}><div><div class="header svelte-etzrza"><img${attr("src", data.decorations.avatarUrl, false)} alt="a toon" class="avatar-img svelte-etzrza"> <div class="details"><div class="name svelte-etzrza">${escape_html(data.name)}</div> <div>${escape_html(data.gender)} ${escape_html(data.race.fullName)}</div> <div><b>Age:</b> ${escape_html(data.age)}</div></div> <div class="details"><div><b>Eyes:</b> ${escape_html(data.eyes)}</div> <div><b>Hair:</b> ${escape_html(data.hair)}</div> <div><b>Height:</b> ${escape_html(data.height)}</div> <div><b>Weight:</b> ${escape_html(data.weight)}</div></div> <div class="currencies"><!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const $$item = each_array[$$index];
    const [currencyType, amount] = $$item;
    $$payload.out += "<!--[-->";
    $$payload.out += `<div>${escape_html(currencyType)}: ${escape_html(amount)}</div>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</div> <div class="hitpoints"><div>Hit Points: ${escape_html(data.baseHitPoints)}</div> <div>Current XP: ${escape_html(data.currentXp)}</div></div></div> <div class="stats svelte-etzrza"><!--[-->`;
  for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
    const stat = each_array_1[$$index_1];
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="stat svelte-etzrza"><p class="tag is-dark is-medium svelte-etzrza">${escape_html(getStatName(stat.id))}:</p> <p${attr("id", stat.id.toString(), false)} class="stat-value svelte-etzrza"><!--[-->`;
    if (stat.id !== null) {
      $$payload.out += `${escape_html(stat.value + getRacialModifiers(stat.id))}`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += `</p></div>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</div>  <article class="message"><div class="message-header"><h3>Traits</h3> <button class="hide-button svelte-etzrza">X</button></div> <div class="traits message-body svelte-etzrza" id="traitsMessageBody"><div class="traits-holder svelte-etzrza"><ul class="svelte-etzrza"><li><b><mark class="tag id-dark is-medium">Appearance:</mark></b> ${escape_html(data.traits.appearance)}</li> <li><b><mark class="tag id-dark is-medium">Bonds:</mark></b> ${escape_html(data.traits.bonds)}</li> <li><b><mark class="tag id-dark is-medium">Flaws:</mark></b> ${escape_html(data.traits.flaws)}</li> <li><b><mark class="tag id-dark is-medium">Ideals:</mark></b> ${escape_html(data.traits.ideals)}</li> <li><b><mark class="tag id-dark is-medium">Personality Traits:</mark></b> ${escape_html(data.traits.personalityTraits)}</li></ul> <ul class="svelte-etzrza"><li><b><mark class="tag id-dark is-medium">Backstory:</mark></b> ${escape_html(data.notes.backstory)}</li></ul></div></div></article> <article class="message"><div class="message-header"><h3>Racial Traits</h3> <button class="hide-button svelte-etzrza">X</button></div> <div class="message-body" id="racialTraitsMessageBody"><div class="racialTraits svelte-etzrza"><ul class="svelte-etzrza"><!--[-->`;
  for (let $$index_2 = 0; $$index_2 < each_array_2.length; $$index_2++) {
    const raceTrait = each_array_2[$$index_2];
    $$payload.out += "<!--[-->";
    $$payload.out += `<li class="svelte-etzrza"><mark class="tag id-dark is-medium"><b>${escape_html(raceTrait.definition.name)}</b></mark> <!--[-->${raceTrait.definition.description}<!--]--></li>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</ul></div></div></article> <article class="message"><div class="message-header"><h3>Class Features</h3> <button class="hide-button svelte-etzrza">X</button></div> <div class="message-body" id="classFeaturesMessageBody"><div class="classFeatures svelte-etzrza"><img${attr("src", data.classes[0].definition.avatarUrl, false)} alt="idk" class="svelte-etzrza"> <div class="svelte-etzrza"><!--[-->`;
  for (let $$index_3 = 0; $$index_3 < each_array_3.length; $$index_3++) {
    const feature = each_array_3[$$index_3];
    $$payload.out += "<!--[-->";
    $$payload.out += `<p><!--[-->${feature.definition.description}<!--]--></p>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</div></div></div></article></div></div>`;
  pop();
}
export {
  _page as default
};
