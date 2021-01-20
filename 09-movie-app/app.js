const searchForm = document.querySelector(".form");
const searchInput = document.querySelector(".searchInput");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = e.target.value;

  let url = `http://www.omdbapi.com/?apikey=820e3a4a&s=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
