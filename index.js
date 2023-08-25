const header = document.querySelector(".header");
const content = document.querySelector(".content");
const address = document.querySelector("address");
const footer = document.querySelector(".footer");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    header.classList.add("moveHeader");

    setTimeout(() => {
      content.classList.add("moveElem");

      setTimeout(() => {
        address.classList.add("moveElem");

        setTimeout(() => {
          footer.style.cssText = "opacity: 1";
        }, 500);
      }, 500);
    }, 500);
  }, 500);
});
