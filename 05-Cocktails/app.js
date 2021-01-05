const resultsContainer = document.querySelector(".results");
const searchTerm = document.querySelector(".searchBox").value;

console.log(searchTerm);

const markup = `
    <a class="result">
        <img
        src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"
        alt=""
        class="result__image"
        />
        <small class="result__name">Name</small>
    </a>
`;

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=sky")
  .then((res) => res.json())
  .then((data) => console.log(data));
