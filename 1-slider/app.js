const slider = document.querySelector(".slider__container");

const slide = document.querySelector(".slide");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slideNum = document.querySelector(".number");

let count = 1;
function slideImg() {
  console.log("123");
}

prevBtn.addEventListener("click", slideImg);

nextBtn.addEventListener("click", slideImg);
