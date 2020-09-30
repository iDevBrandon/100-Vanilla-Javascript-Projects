const formBox = document.getElementById("formSubmit");
const inputBox = document.getElementById("inputBox");
const term = document.getElementById("term");

const result = document.querySelector(".result");
const mealEl = document.querySelector(".meals");

const randomBtn = document.getElementById("random");
const singleEl = document.getElementById("single-meal");

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

// get single meal
result.addEventListener("click", (e) => {
  const mealInfo = e.path.find((meal) => {
    if (meal.classList) {
      return meal.classList.contains("meal--info");
    } else {
      return false;
    }
  });
  console.log(mealInfo);
  if (mealInfo) {
    const mealID = mealInfo.getAttribute("data-mealid");
    getMealById(mealID);
  }
});

function getMealById(id) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => {
      const mealInfo = data.meals[0];
      addMealToDom(mealInfo);
    });
}

function addMealToDom(meal) {
  const ingredients = [];
  for (i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} -  ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  singleEl.innerHTML = `  
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
      </div>
      <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
        </ul>
      </div>
  `;
}

// display random meal
function randomMeal() {
  // clear heading
  result.innerHTML = "";

  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];
      console.log(meal);
      addMealToDom(meal);
    });
}
