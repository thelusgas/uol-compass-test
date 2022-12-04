import Navigo from "navigo";
import { Login } from "./login";
import { Dashboard } from "./dashboard";

export const router = new Navigo("/");

window.addEventListener("load", () => {
  const render = (content) =>
    document.querySelector("#app").insertAdjacentHTML("beforeend", content);

  router
    .on("/dashboard", Dashboard)
    .on("/p2", (match) => {
      console.log(match);
      render("p2");
    })
    .on("/", Login)
    .resolve();
});
