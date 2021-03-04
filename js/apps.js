// Блок сервис на главной странице
function openTab(evt, cityName) {
    let i, services_content, services__inner_btn;
    services_content = document.getElementsByClassName("services_content");
    for (i = 0; i < services_content.length; i++) {
        services_content[i].style.display = "none";
    }

    services__inner_btn = document.getElementsByClassName("services__inner_btn");
    for (i = 0; i < services__inner_btn.length; i++) {
        services__inner_btn[i].className = services__inner_btn[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
}
document.getElementById("defaultOpen").click();



// Модальные окна 




// Модальное окно обратной связи
const aboutOpen = document.querySelector(".open-about");
const aboutPopup = document.querySelector(".modal_about");
const aboutClose = aboutPopup.querySelector(".modal_close");

// Модальное окно карты
const mapOpen = document.querySelector(".open-map")
const mapPopup = document.querySelector(".modal_map");
const mapClose = mapPopup.querySelector(".modal_close");

// Модальное окно
const successOpen = document.querySelectorAll(".button-add");
const successPopup = document.querySelector(".modal_success");
const successClose = successPopup.querySelector(".modal_close");



// Модальное окно обратной связи
aboutOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  aboutPopup.classList.add("modal-show-about");
});

aboutClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    aboutPopup.classList.remove("modal-show-about");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (aboutPopup.classList.contains("modal-show-about")) {
      evt.preventDefault();
      aboutPopup.classList.remove("modal-show-about");
    }
  }
});


// Модальное окно карты
mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show-about");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show-about");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show-about")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show-about");
      }
    }
});


// Модальное окно добавления товара в корзину
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


