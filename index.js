const form = document.querySelector("form");
const card_1 = document.querySelector(".np__background");
const card_2 = document.querySelector(".np__background-2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  card_1.classList.add("hide");
  card_2.classList.remove("hide");
});
