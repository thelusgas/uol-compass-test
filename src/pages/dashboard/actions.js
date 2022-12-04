import * as state from "./state";
import { makeRequest } from "../../actions/make-request.js";
import { router } from "../main.js";
import {
  mapMonthToName,
  mapDayToName,
  mapStateToInitials,
} from "../../utils.js";
export const setupClock = ({ dateElement, hoursElement }) => {
  const date = new Date();
  const year = date.getFullYear();

  const day = (date.getDate() + "").padStart(2, "0");
  const hour = (date.getHours() + "").padStart(2, "0");
  const minute = (date.getMinutes() + "").padStart(2, "0");

  dateElement.innerHTML = `${mapDayToName(
    date.getDay()
  )}, ${day} de ${mapMonthToName(date.getMonth())} de ${year}`;

  hoursElement.innerHTML = `${hour}:${minute}`;
};

export const setupClimate = async ({ temperatureElement, locationElement }) => {
  const res = await makeRequest({
    url: "https://api.weatherapi.com/v1/current.json",
    method: "GET",
    body: {
      key: "f4c47af8ed9a4196bbe194011220412",
      q: "Passo Fundo",
      aqi: "no",
    },
  });

  temperatureElement.innerHTML = `${res.current.temp_c}°`;
  locationElement.innerHTML = `${res.location.name} - ${mapStateToInitials(
    res.location.region
  )}`;
};

export const setupTimeout = (element) => {
  const timer = setInterval(() => {
    element.innerHTML = `${state.getLoginTimeout()}`;
    state.decreaseLoginTimeout();

    if (state.getLoginTimeout() === 0) {
      clearInterval(timer);
      router.navigate("/");
    }
  }, 1000);
};

export const setupLogoutBtn = (element) => {
  element.addEventListener("click", () => {
    router.navigate("/");
  });
};
