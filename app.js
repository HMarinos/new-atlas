window.onload = () => {
  document.querySelector(".burger-menu").addEventListener("click", () => {
    document.querySelector(".burger-menu").classList.toggle("burger-toggled");
    document
      .querySelector(".mobile-menu")
      .classList.toggle("mobile-menu-toggled");
  });

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.querySelector("header").classList.add("header-on-scroll");
      document
        .querySelector(".mobile-menu")
        .classList.add("mobile-menu-scrolled");
    } else {
      document.querySelector("header").classList.remove("header-on-scroll");
      document
        .querySelector(".mobile-menu")
        .classList.remove("mobile-menu-scrolled");
    }
  }
};
function open_popup() {
  document.querySelector(".popup").classList.toggle("popup_active");
  document.body.classList.toggle("body-stop");
}
function close_popup() {
  document.querySelector(".popup").classList.remove("popup_active");
  document.body.classList.remove("body-stop");
}
