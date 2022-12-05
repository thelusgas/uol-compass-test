import ShareIcon from "../../assets/svg/share.svg";
import { makeRequest } from "../../actions/make-request.js";
import { Url } from "../../utils/enum.js";
import { router } from "../main.js";
export const setupUser = async ({
  username,
  avatarElement,
  nameElement,
  descriptionElement,
  numberOfReposElement,
  numberOfFavoritesElement,
}) => {
  const url = Url.gitUserProfile.replace("USER_GITHUB", username);
  const starredUrl = Url.gitUserStarred.replace("USER_GITHUB", username);
  const res = await makeRequest({
    url,
    method: "GET",
  });

  const starredRes = await makeRequest({
    url: starredUrl,
    method: "GET",
  });

  avatarElement.setAttribute("src", res.avatar_url);
  nameElement.innerHTML = res.login;
  descriptionElement.innerHTML = res.bio ?? "Usuário não possui bio";
  numberOfReposElement.innerHTML = `${res.public_repos}`.padStart(2, "0");
  numberOfFavoritesElement.innerHTML = `${starredRes.length}`.padStart(2, "0");
};
export const setupGitRepos = async ({
  type,
  query,
  listElement,
  reposTabElement,
  favoritesTabElement,
}) => {
  if (type === "repos") {
    favoritesTabElement.classList.remove(
      "user-inner__repos-tabs--button--active"
    );
    reposTabElement.classList.add("user-inner__repos-tabs--button--active");
  } else {
    reposTabElement.classList.remove("user-inner__repos-tabs--button--active");
    favoritesTabElement.classList.add("user-inner__repos-tabs--button--active");
  }

  const url =
    type === "repos"
      ? Url.gitUserRepos.replace("USER_GITHUB", query)
      : Url.gitUserStarred.replace("USER_GITHUB", query);

  const res = await makeRequest({
    url,
    method: "GET",
  });

  if (res.length > 0) {
    listElement.innerHTML = "";
    const cappedRes = res.slice(0, 4);

    cappedRes.forEach((item) => {
      const repoName = item.name;
      const btnId = `btn-compartilhar-${repoName}`;
      const html = `
        <li class="user-inner__user-repos-item">
          <div class="user-inner__user-repos-item--text-area">
            <h3 class="user-inner__user-repos-item--name">${repoName}</h3>
            <p class="user-inner__user-info-text--description">${
              item.description ?? "repositório sem descrição"
            }</p>
          </div>
          <a href=${
            item.html_url
          } target="_blank" rel="noopener noreferrer" class="user-inner__button--regular" id=${btnId}>
            <span>compartilhar</span>
            <img src=${ShareIcon} alt="Ícone de compartilhar" />
          </a>  
        </li>
      `;

      listElement.insertAdjacentHTML("beforeend", html);
    });
  } else {
    listElement.innerHTML = `
      <li class="user-inner__user-repos-item">
        <p class="user-inner__user-info-text--description">Nenhum repositório encontrado</p>
      </li>
    `;
  }
};

export const setupBackButton = ({ btnElement }) => {
  btnElement.addEventListener("click", () => {
    router.navigate("/search");
  });
};

export const setupRepoBtn = ({
  btnElement,
  query,
  listElement,
  reposTabElement,
  favoritesTabElement,
}) => {
  btnElement.addEventListener("click", () => {
    void setupGitRepos({
      type: "repos",
      query,
      listElement,
      reposTabElement,
      favoritesTabElement,
    });
  });
};

export const setupFavoritesBtn = ({
  btnElement,
  query,
  listElement,
  reposTabElement,
  favoritesTabElement,
}) => {
  btnElement.addEventListener("click", () => {
    void setupGitRepos({
      type: "favorites",
      query,
      listElement,
      reposTabElement,
      favoritesTabElement,
    });
  });
};
