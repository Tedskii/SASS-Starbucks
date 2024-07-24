const coffeeNav = document.querySelectorAll(".coffeeNav__link");
const coffeeContent = document.querySelectorAll(".coffeeTab__content");
coffeeNav.forEach((coffee) => {
  coffee.addEventListener("click", () => {
    removeActiveNav();
    coffee.classList.add("active");
    const activeContent = document.querySelector(`#${coffee.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveNav() {
  coffeeNav.forEach((coffee) => {
    coffee.classList.remove("active");
  });
}

function removeActiveContent() {
  coffeeContent.forEach((coffee) => {
    coffee.classList.remove("active");
  });
}
