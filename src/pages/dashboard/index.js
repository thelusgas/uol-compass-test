// styles
import "./styles.scss";
// assets
import LogoDark from "../../assets/compass-logo-black.png";
import IconCloud from "../../assets/svg/cloud.svg";
// actions
import * as actions from "./actions.js";

export function Dashboard() {
  document.querySelector("#app").innerHTML = `
    <div class="dashboard">
      <header class="dashboard__header">
         <img src="${LogoDark}" class="dashboard__header--logo" alt="Compass Logo" />
         <div class="dashboard__clock">
           <span class="dashboard__clock--time"></span>
           <span class="dashboard__clock--date"></span>
         </div>
         <div class="dashboard__climate">
           <span class="dashboard__climate--location"></span>
           <img src="${IconCloud}" class="dashboard__climate--icon" alt="Cloud Icon" />
           <span class="dashboard__climate--temperature"></span>
         </div>
      </header>
      <main class="dashboard__main">    
         <div class="dashboard__main--text-wrapper">
            <span class="dashboard__main--text-medium">Our mission is</span>
            <span class="dashboard__main--text-small">Nossa missão é</span>
         </div>  
         <div class="dashboard__main--text-wrapper">
            <span class="dashboard__main--text-large">to transform the world</span>
            <span class="dashboard__main--text-small">transformar o mundo</span>
         </div>
         <div class="dashboard__main--text-wrapper">
            <span class="dashboard__main--text-large">building digital experiences</span>
            <span class="dashboard__main--text-small">construindo experiências digitais</span>
         </div> 
         <div class="dashboard__main--text-wrapper">
            <span class="dashboard__main--text-large">that enable our client’s growth</span>
            <span class="dashboard__main--text-small">que permitam o crescimento dos nossos clientes</span>
         </div>  
      </main>
      <footer class="dashboard__footer">
            <div class="dashboard__footer--text-wrapper">
                <span class="dashboard__footer--text">Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</span>
            </div>
            <div class="dashboard__footer--timer-wrapper">
                <span class="dashboard__footer--text-small">Application refresh in</span>
                <span class="dashboard__footer--timer"></span>
                <span class="dashboard__footer--text-small">seconds</span>
            </div>
            <div class="dashboard__footer--btn-wrapper">
                <button class="footer-button--primary go-to-search-btn">Acessar Busca</button>
                <button class="footer-button--secondary logout-btn">Logout</button>
            </div>   
      </footer>      
    </div>
  `;

  actions.setupClock({
    dateElement: document.querySelector(".dashboard__clock--date"),
    hoursElement: document.querySelector(".dashboard__clock--time"),
  });

  void actions.setupClimate({
    temperatureElement: document.querySelector(
      ".dashboard__climate--temperature"
    ),
    locationElement: document.querySelector(".dashboard__climate--location"),
  });

  actions.setupTimeout(document.querySelector(".dashboard__footer--timer"));

  actions.setupLogoutBtn(document.querySelector(".logout-btn"));

  actions.setupGoToSearchBtn(document.querySelector(".go-to-search-btn"));
}
