const searchForm = document.querySelector(".hero--search--form");
const searchInput = document.querySelector(".search--input");
const searchBtn = document.querySelector(".search--button");
const result = document.querySelector(".results");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value;
});
