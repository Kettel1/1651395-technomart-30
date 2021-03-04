// Модальное окно добавления товара в корзину
const successOpen = document.querySelectorAll(".button-add");
const successPopup = document.querySelector(".modal_success");
const successClose = successPopup.querySelector(".modal_close");

successOpen.forEach(function (entry) {
    entry.addEventListener("click", function (event){
      event.preventDefault();
      successPopup.classList.add("modal-show");
    });
  });

successClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    successPopup.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (successPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      successPopup.classList.remove("modal-show");
    }
  }
});