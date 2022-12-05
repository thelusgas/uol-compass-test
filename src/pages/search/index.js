// styles
import "./styles.scss";
// assets
import CompassLogoWhite from "../../assets/compass-logo-white.png";
import IconSearch from "../../assets/svg/search.svg";
// actions
import * as actions from "./actions.js";
export function Search() {
  document.querySelector("#app").innerHTML = `
    <div class="search">
        <div class="search__main">
          <div class="search__title">
              <h1 class="search__title--primary">Busca</h1>
              <h2 class="search__title--secondary">Para encontrar o usuário desejado digite seu nome abaixo. </h2>
          </div>
          <div class="search__form">
            <input class="search__form--input" type="text" placeholder="Ex: Thauany">
            <button type="button" class="search__form--button">
                <span>Buscar</span>
                <img src=${IconSearch} alt="search icon" class="search__form--button-icon">
            </button>
          </div>
          <ul class="search__list"></ul>
        </div>
        <div class="landing-image">
            <img src=${CompassLogoWhite} alt="Compass logo" class="landing-image__logo">
        </div>
    </div>
`;

  actions.setupSearch({
    btnElement: document.querySelector(".search__form--button"),
    inputElement: document.querySelector(".search__form--input"),
    listElement: document.querySelector(".search__list"),
  });
}
