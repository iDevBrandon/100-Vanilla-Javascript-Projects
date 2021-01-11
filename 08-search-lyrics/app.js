const searchForm = document.querySelector(".hero--search--form");
const searchInput = document.querySelector(".search--input");
const searchBtn = document.querySelector(".search--button");
const result = document.querySelector(".results");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value;
  if (!searchTerm) {
    alert("Please type something");
  } else {
    getData(searchTerm);
  }
});

async function getData(term) {
  const res = await fetch(`https://api.lyrics.ovh/suggest/${term}`)
    .then((response) => response.json())
    .then((data) => console.log(data.data));
}
