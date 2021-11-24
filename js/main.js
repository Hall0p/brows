var transformIntoNiger = document.querySelector(".menu-button");
transformIntoNiger.addEventListener("click", function () {
  console.log("клик по кнопке меню");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
