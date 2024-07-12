import { g as getUsersCampaigns } from "../../chunks/index3.js";
import { r as redirect, f as fail } from "../../chunks/index.js";
import { l as lucia } from "../../chunks/auth.js";
const load = async (event) => {
  if (!event.locals.user)
    redirect(302, "/login");
  const username = await event.locals.user.username;
  const userId = await event.locals.user.id;
  const userNum = parseInt(userId);
  const usersCampaigns = await getUsersCampaigns(userNum);
  return {
    username,
    usersCampaigns,
    userId
  };
};
const actions = {
  default: async (event) => {
    if (!event.locals.session) {
      return fail(401);
    }
    await lucia.invalidateSession(event.locals.session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes
    });
    redirect(302, "/login");
  }
};
export {
  actions,
  load
};
