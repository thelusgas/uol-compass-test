import { router } from "../main.js";
const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  console.log({
    username: form.elements[0].value,
    password: form.elements[1].value,
  });

  router.navigate("/dashboard");
  return false;
};

export function setupSubmit(element) {
  element.addEventListener("submit", handleSubmit);
}
