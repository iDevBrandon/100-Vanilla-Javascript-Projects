const formBox = document.getElementById("formSubmit");
const inputBox = document.getElementById("inputBox");
const term = document.getElementById("term");

const result = document.querySelector(".result");
const meals = document.querySelector(".meals");

// Event listener
formBox.addEventListener("submit", listMeal);

// functions
function listMeal(e) {
  e.preventDefault();

  let searchTerm = inputBox.value;
  term.innerText = searchTerm;
  inputBox.value = "";
  if (searchTerm.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);

        if (data.meals === null) {
          result.innerText = `There's no meal data in DB`;
        } else {
          meals.innerHTML = data.meals
            .map(
              (meal) => ` 
          <div class="single--meal" id=${meal.idMeal}>
          <img src="${meal.strMealThumb}"></img>
            <h2>${meal.strMeal}</h2>
          </div>
          `
            )
            .join("");
        }
      });
  } else {
    alert("Type your fav food");
  }
}
