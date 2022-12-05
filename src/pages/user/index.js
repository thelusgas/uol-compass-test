// styles
import "./styles.scss";
// actions
import * as actions from "./actions.js";

export function User({ username }) {
  document.querySelector("#app").innerHTML = `
        <div class="user">
            <div class="user-inner">
                <div class="user-inner__return">
                    <button class="user-inner__button--rounded return-btn">voltar</button>
                </div>
                <div class="user-inner__user-info">
                    <img src="" alt="user avatar" class="user-inner__user-info--avatar">
                    <div class="user-inner__user-info-text">
                        <h1 class="user-inner__user-info-text--name">aaaaa</h1>
                        <h2 class="user-inner__user-info-text--description">aaaaa</h2>
                    </div>
                </div>
                <div class="user-inner__repos-wrapper">
                    <div class="user-inner__repos-tabs">
                        <button class="user-inner__repos-tabs--button tabs-repo">
                            Repositórios 
                            <span class="user-inner__repos-tabs--icon no-of-repos">0</span>
                        </button>
                        <button class="user-inner__repos-tabs--button tabs-favorites">
                            Favoritos
                            <span class="user-inner__repos-tabs--icon no-of-favorites">0</span>
                        </button>
                    </div>
                    <ul class="user-inner__user-repos"></ul>
                </div>
            </div>
        </div>
    `;

  void actions.setupUser({
    username,
    avatarElement: document.querySelector(".user-inner__user-info--avatar"),
    nameElement: document.querySelector(".user-inner__user-info-text--name"),
    descriptionElement: document.querySelector(
      ".user-inner__user-info-text--description"
    ),
    numberOfReposElement: document.querySelector(".no-of-repos"),
    numberOfFavoritesElement: document.querySelector(".no-of-favorites"),
  });

  void actions.setupGitRepos({
    type: "repos",
    query: username,
    listElement: document.querySelector(".user-inner__user-repos"),
    avatarElement: document.querySelector(".user-inner__user-info--avatar"),
    reposTabElement: document.querySelector(".tabs-repo"),
    favoritesTabElement: document.querySelector(".tabs-favorites"),
  });

  actions.setupBackButton({
    btnElement: document.querySelector(".return-btn"),
  });

  actions.setupRepoBtn({
    btnElement: document.querySelector(".tabs-repo"),
    query: username,
    listElement: document.querySelector(".user-inner__user-repos"),
    avatarElement: document.querySelector(".user-inner__user-info--avatar"),
    reposTabElement: document.querySelector(".tabs-repo"),
    favoritesTabElement: document.querySelector(".tabs-favorites"),
  });

  actions.setupFavoritesBtn({
    btnElement: document.querySelector(".tabs-favorites"),
    query: username,
    listElement: document.querySelector(".user-inner__user-repos"),
    avatarElement: document.querySelector(".user-inner__user-info--avatar"),
    reposTabElement: document.querySelector(".tabs-repo"),
    favoritesTabElement: document.querySelector(".tabs-favorites"),
  });
}
