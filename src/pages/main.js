import Navigo from "navigo";
import { Login } from "./login";
export const router = new Navigo("/");

window.addEventListener("load", () => {
  const render = (content) =>
    document.querySelector("#app").insertAdjacentHTML("beforeend", content);

  router
    .on("/p1", (match) => {
      console.log(match);
      render("p2");
    })
    .on("/p2", (match) => {
      console.log(match);
      render("p2");
    })
    .on("/", Login)
    .resolve();
});
