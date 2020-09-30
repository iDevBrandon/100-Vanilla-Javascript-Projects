const formBox = document.getElementById("formSubmit");
const inputBox = document.getElementById("inputBox");
const term = document.getElementById("term");

const result = document.querySelector(".result");
const meals = document.querySelector(".meals");

const randomBtn = document.getElementById("random");

// Event listener
formBox.addEventListener("submit", listMeal);
randomBtn.addEventListener("click", randomMeal);

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
          result.innerHTML = data.meals
            .map(
              (meal) => ` 
              <div class="meal">    
                <img src="${meal.strMealThumb}"></img>
                <div class="meal--info"  data-mealID=${meal.idMeal}>
                  <h2 class='single--heading'>${meal.strMeal}</h2>
                </div> 
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

function randomMeal() {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.meals);
      result.innerHTML = data.meals
        .map(
          (meal) => ` 
          <div class='single'>
            <div class="single--meal" id=${meal.idMeal}>
              <img src="${meal.strMealThumb}"></img>
              <h2 class='single--heading'>${meal.strMeal}</h2>
            </div>
          </div>
          `
        )
        .join("");
    });
}
