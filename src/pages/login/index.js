// styles
import "./styles.scss";
// assets
import ManIcon from "../../assets/svg/man.svg";
import LockIcon from "../../assets/svg/lock.svg";
import CompassLogoWhite from "../../assets/compass-logo-white.png";
// actions
import { setupSubmit } from "./actions.js";

export function Login() {
  document.querySelector("#app").innerHTML = `
      <div class="landing">
        <div class="login">
          <img src="${CompassLogoWhite}" alt="Compass Logo" class="login__logo"/>
          <div class="login__title">
              <h1 class="login__title--primary">Olá,</h1>
              <h2 class="login__title--secondary">Para continuar navegando de forma segura, efetue o login na rede.</h2>
          </div>
          <form class="login__form" id="login-form">
              <h3 class="login__form--title">Login</h3>
              <div class="login__form--input-group">
                  <div class="input-wrapper" id="login-form-username-input">
                      <img src=${ManIcon} alt="user icon" class="input-wrapper__icon">
                      <input type="text" class="input-wrapper__input" placeholder="Usuário" form="login-form">
                  </div>
                  
                  <div class="input-wrapper" id="login-form-password-input">
                    <img src=${LockIcon} alt="lock icon" class="input-wrapper__icon">
                    <input type="password" class="input-wrapper__input" placeholder="Senha" form="login-form">
                  </div>
              </div>
              <button type="submit" class="login__form--button">Continuar</button>
          </form>
        </div>
        <div class="landing-image">
            <img src=${CompassLogoWhite} alt="Compass logo" class="landing-image__logo">
        </div>
      </div>
`;

  setupSubmit(document.querySelector(".login__form"));
}
