const searchForm = document.querySelector(".hero--search--form");
const searchInput = document.querySelector(".search--input");
const result = document.querySelector(".results");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

// Search by song or artist
async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();

  showData(data);
}

// show song and artist in DOM
function showData(data) {
  console.log(data);
  result.innerHTML = `
  <ul>
    ${data.data
      .map(
        (song) => `
      <li>
        <span><strong>${song.artist.name}</strong> - ${song.title}</span>
        <button class='btn' data-artist=${song.artist.name} data-songtitle=${song.title}>Get lyrics</button>
      </li>
    `
      )
      .join("")}
  </ul>
`;

  if (data.prev || data.next) {
    more.innerHTML = `
      ${
        data.prev
          ? `<button class='btn' onclick="getMoreSongs('${data.prev}')">Prev</button>`
          : ""
      }
      ${
        data.next
          ? `<button class='btn' onclick="getMoreSongs('${data.next}')">Next</button>`
          : ""
      }

    `;
  } else {
    more.innerHTML = "";
  }
}

// Get prev and next songs
async function getMoreSongs(url) {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  const data = await res.json();

  showData(data);
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
});
