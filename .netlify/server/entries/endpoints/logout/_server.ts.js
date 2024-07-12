import { r as redirect } from "../../../chunks/index.js";
import { l as lucia } from "../../../chunks/auth.js";
const POST = async (event) => {
  if (!event.locals.session) {
    redirect(302, "/");
  } else {
    await lucia.invalidateSession(event.locals.session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes
    });
    redirect(302, "/");
  }
};
export {
  POST
};
