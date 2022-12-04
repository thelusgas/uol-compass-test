import Navigo from "navigo";
import { Login } from "./login";

function renderLogin() {
  document.querySelector("#app").innerHTML = Login();
}

window.addEventListener("load", () => {
  const router = new Navigo("/");
  const render = (content) =>
    document.querySelector("#root").insertAdjacentHTML("beforeend", content);

  router
    .on("/p1", (match) => {
      console.log(match);
      render("p2");
    })
    .on("/p2", (match) => {
      console.log(match);
      render("p2");
    })
    .on("/", renderLogin)
    .resolve();
});
