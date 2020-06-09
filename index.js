let navBtn = document.querySelector(".burger-btn");
let menu = document.querySelector(".menu");

navBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
})