import { g as ensure_array_like, d as attr, e as escape_html, i as stringify, c as pop, p as push } from "../../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let imgUrl = `https://www.dnd5eapi.co${data.image}`;
  const flattenObject = (obj, parent = "", res = {}) => {
    for (let key in obj) {
      let propName = parent ? parent + "." + key : key;
      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        flattenObject(obj[key], propName, res);
      } else {
        res[propName] = obj[key];
      }
    }
    return res;
  };
  let flattenedSenses = flattenObject(data.senses);
  let flattenedSpeed = flattenObject(data.speed);
  const each_array = ensure_array_like(Object.entries(flattenedSpeed));
  const each_array_1 = ensure_array_like(data.armor_class);
  const each_array_2 = ensure_array_like(data.actions);
  const each_array_4 = ensure_array_like(Object.entries(flattenedSenses));
  const each_array_5 = ensure_array_like(data.proficiencies);
  const each_array_6 = ensure_array_like(data.special_abilities);
  $$payload.out += `<div class="px-4 container svelte-jap3sy" id="mainContainer"${attr("style", `background-image: url(${stringify(imgUrl)});`, false)}><h1 class="is-size-1">${escape_html(data.name)}</h1> <p>If no current encounter hide add to encounter button. Otherwise show.</p> <button class="button">Add to Encounter</button> <hr> <div class="stats px-4 svelte-jap3sy"><p><b>Type:</b> ${escape_html(data.type)}</p> <p><b>Size:</b> ${escape_html(data.size)}</p> <p><b>Alignment:</b> ${escape_html(data.alignment)}</p> <p><b>languages:</b> ${escape_html(data.languages)}</p> <p><b>Hit Points:</b> ${escape_html(data.hit_points)}</p> <p><b>Charisma:</b> ${escape_html(data.charisma)}</p> <p><b>Constitution:</b> ${escape_html(data.constitution)}</p> <p><b>Dexterity:</b> ${escape_html(data.dexterity)}</p> <p><b>Intelligence:</b> ${escape_html(data.intelligence)}</p> <p><b>Strength:</b> ${escape_html(data.strength)}</p> <p><b>Wisdom:</b> ${escape_html(data.wisdom)}</p> <p><b>XP:</b> ${escape_html(data.xp)}</p> <!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const $$item = each_array[$$index];
    const [key, value] = $$item;
    $$payload.out += "<!--[-->";
    $$payload.out += `<p><b>${escape_html(key)}:</b> ${escape_html(value)}</p>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</div> <hr> <h2 class="is-size-4">Armor Class</h2> <!--[-->`;
  for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
    const ac = each_array_1[$$index_1];
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="stats px-4 svelte-jap3sy"><p><b>Condition:</b> <!--[-->`;
    if (ac.condition) {
      $$payload.out += `${escape_html(ac.condition.name)}`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += `</p> <p><b>Type:</b> ${escape_html(ac.type)}</p> <p><b>AC:</b> ${escape_html(ac.value)}</p></div>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += ` <hr> <h2 class="is-size-4">Actions - ( ${escape_html(data.actions.length)} )</h2> <!--[-->`;
  for (let $$index_3 = 0; $$index_3 < each_array_2.length; $$index_3++) {
    const action = each_array_2[$$index_3];
    $$payload.out += "<!--[-->";
    const each_array_3 = ensure_array_like(action.damage);
    $$payload.out += `<div class="action px-4"><div class="stats svelte-jap3sy"><p class="actionName is-size-4 svelte-jap3sy">${escape_html(action.name)}</p></div> <div class="stats svelte-jap3sy"><p><b>Attack Bonus :</b> ${escape_html(action.attack_bonus)}</p> <!--[-->`;
    for (let $$index_2 = 0; $$index_2 < each_array_3.length; $$index_2++) {
      const damage = each_array_3[$$index_2];
      $$payload.out += "<!--[-->";
      $$payload.out += `<p><b>Damage:</b> ${escape_html(damage.damage_dice)}</p> <p><b>Damage Type:</b> <a${attr("href", `damage/${stringify(damage.damage_type.url)}`, false)} target="_blank" class="svelte-jap3sy">${escape_html(damage.damage_type.name)}</a></p>`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</div> <div class="desc svelte-jap3sy"><p>${escape_html(action.desc)}</p></div> <hr></div>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += ` <h2 class="is-size-4">Senses</h2> <div class="stats px-4 svelte-jap3sy"><!--[-->`;
  for (let $$index_4 = 0; $$index_4 < each_array_4.length; $$index_4++) {
    const $$item = each_array_4[$$index_4];
    const [key, value] = $$item;
    $$payload.out += "<!--[-->";
    $$payload.out += `<p><b>${escape_html(key)}:</b> ${escape_html(value)}</p>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</div> <hr> <h2 class="is-size-4">Proficiencies - Proficiency Bonus: ${escape_html(data.proficiency_bonus)}</h2> <div class="stats px-4 svelte-jap3sy"><!--[-->`;
  for (let $$index_5 = 0; $$index_5 < each_array_5.length; $$index_5++) {
    const proficiency = each_array_5[$$index_5];
    $$payload.out += "<!--[-->";
    $$payload.out += `<p><b>${escape_html(proficiency.proficiency.name)}:</b> ${escape_html(proficiency.value)}</p>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</div> <hr> <h2 class="is-size-4">Special Abilities</h2> <div class="stats px-4 svelte-jap3sy"><!--[-->`;
  for (let $$index_6 = 0; $$index_6 < each_array_6.length; $$index_6++) {
    const spec_abilities = each_array_6[$$index_6];
    $$payload.out += "<!--[-->";
    $$payload.out += `<p><b>${escape_html(spec_abilities.name)}:</b> ${escape_html(spec_abilities.desc)}</p>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</div> <hr></div>`;
  pop();
}
export {
  _page as default
};
