import { Lucia } from "lucia";
import { i as adapter } from "./index3.js";
import { D as DEV } from "./prod-ssr.js";
const dev = DEV;
const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: !dev
    }
  },
  getUserAttributes: (attributes) => {
    return {
      username: attributes.username
    };
  }
});
export {
  lucia as l
};
