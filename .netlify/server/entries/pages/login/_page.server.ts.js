import { e as error, r as redirect } from "../../../chunks/index.js";
import { l as lucia } from "../../../chunks/auth.js";
import { f as checkIfExistingUser } from "../../../chunks/index3.js";
import { Argon2id } from "oslo/password";
const actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    if (typeof username !== "string" || username.length < 3 || username.length > 31 || !/^[a-z0-9_-]+$/.test(username)) {
      error(400, "Invalid username format");
    }
    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
      error(400, {
        message: "Invalid Password format"
      });
    }
    const existingUser = checkIfExistingUser(username);
    if (!existingUser) {
      error(400, {
        message: "User name not found"
      });
    }
    const validPassword = await new Argon2id().verify(existingUser.password_hash, password);
    if (!validPassword) {
      error(400, {
        message: "That is not your password bro"
      });
    }
    const userId = existingUser.id.toString();
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes
    });
    redirect(302, "/");
  }
};
export {
  actions
};