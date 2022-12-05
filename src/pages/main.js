import Navigo from "navigo";
import { Login } from "./login";
import { Dashboard } from "./dashboard";
import { Search } from "./search";
import { User } from "./user/index.js";

export const router = new Navigo("/");

window.addEventListener("load", () => {
  router
    .on("/dashboard", Dashboard)
    .on("/search", Search)
    .on("/user", (match) => {
      const { username } = match.params;
      User({ username });
    })
    .on("/", Login)
    .resolve();
});
