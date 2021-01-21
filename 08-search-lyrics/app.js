const searchForm = document.querySelector(".hero--search--form");
const searchInput = document.querySelector(".search--input");
const result = document.querySelector(".results");

const apiURL = "https://api.lyrics.ovh";

// Search by song or artist
async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();

  console.log(data);
}

// Event listeners
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (!searchTerm) {
    alert("Type sth to search");
  } else {
    searchSongs(searchTerm);
  }
  const searchTerm = searchInput.value;
  console.log(searchTerm);
});
