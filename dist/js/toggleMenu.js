const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
});

const dropDown = document.querySelectorAll(".links__item h4");
dropDown.forEach((linkDown) => {
  linkDown.addEventListener("click", () => {
    linkDown.nextElementSibling.classList.toggle("open");
    linkDown.querySelector("i").classList.toggle("open");
  });
});
