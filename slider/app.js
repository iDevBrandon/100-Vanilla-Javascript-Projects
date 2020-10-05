import people from "./data.js";
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const container = document.querySelector(".slide-container");

container.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === people.length - 1) {
      position = "last";
    }
    return `
    <article class="slide ${position}">
      <img src=${img}
      alt="" class="img"/>
      <h4>${name}</h4>
      <div class="title">${job}</div>
      <div class="text">${text}</div>
    </article>`;
  })
  .join("");

const slideEvent = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }

  active.classList.add("last");
  next.classList.add("active");
  last.classList.add("next");
};

prevBtn.addEventListener("click", () => slideEvent("prev"));
nextBtn.addEventListener("click", () => slideEvent());
