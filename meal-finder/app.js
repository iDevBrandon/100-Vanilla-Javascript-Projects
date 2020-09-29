const formSubmit = document.getElementById("formSubmit");
const inputBox = document.getElementById("inputBox");
const searchTerm = document.getElementById("term");
const result = document.querySelector(".result");

// Event Listeners
formSubmit.addEventListener("submit", searchMeal);

// functions
function searchMeal(e) {
  e.preventDefault();

  const term = inputBox.value;
  searchTerm.innerHTML = term;
}

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=pasta`)
  .then((res) => res.json())
  .then(function (data) {
    let imgEl = document.createElement("img");
    let img = data.meals[0].strMealThumb;
    imgEl.src = img;
    imgEl.className = "result__img";
    console.log(imgEl);

    result.appendChild(imgEl);
  });
