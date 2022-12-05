import { makeRequest } from "../../actions/make-request.js";
import { Url } from "../../utils/enum.js";
import { router } from "../main.js";

const makeGitSearchRequest = async ({ query, listElement }) => {
  const res = await makeRequest({
    url: Url.gitUserSearch,
    method: "GET",
    body: {
      q: query,
    },
  });

  if (res.items.length > 0) {
    listElement.innerHTML = "";

    res.items.forEach((item) => {
      const username = item.login;
      const btnId = `btn-ver-mais-${username}`;
      const html = `
        <li class="search__list--item">
          <img src=${item.avatar_url} alt="user avatar" class="search__list--item-avatar">  
          <div class="search__list--item-info">
            <h3 class="search__list--item-title">${username}</h3>
            <p class="search__list--item-description">${item.html_url}</p>
          </div>
          <button class="search__list--item-button" id=${btnId}>Ver mais</button>  
        </li>
      `;

      listElement.insertAdjacentHTML("beforeend", html);
      document.querySelector(`#${btnId}`).addEventListener("click", () => {
        router.navigate(`/user?username=${username}`);
      });
    });
  } else {
    listElement.innerHTML = `
      <li class="search__list--item">
        <p class="search__list--item-description">Nenhum usuário encontrado</p>
      </li>
    `;
  }
};

export const setupSearch = ({ btnElement, inputElement, listElement }) => {
  btnElement.addEventListener("click", () => {
    const query = inputElement.value;
    void makeGitSearchRequest({ query, listElement });
  });
};
