import "../SASS/base.scss";

let nextBtn = document.querySelector(".controls");

nextBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let gallery = document.querySelector(".container");
  let images = Array.from(document.querySelectorAll(".gallery-img"));
  let imgWidth = images[0].offsetWidth;
  let firstImg = images[0];

  firstImg.classList.add("slides");

  setTimeout(() => {
    gallery.insertAdjacentElement("beforeend", firstImg);
    firstImg.classList.remove("slides");
  }, 500);
});
