let navBtn = document.querySelector(".burger-btn");
let menu = document.querySelector(".menu");
let about = document.querySelector("#call2action");
let lp = document.querySelector(".left-panel");
let rp = document.querySelector(".right-panel");
let us = document.querySelector("#us");

about.addEventListener("click", () => {
  lp.classList.toggle("toggle-l");
  rp.classList.toggle("toggle-r");
  us.classList.toggle("us");
});

navBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});