const inputBox = document.getElementById("inputBox");
const formSubmit = document.getElementById("formSubmit");

// Event Listeners
formSubmit.addEventListener("submit", searchMeal);

// functions
function searchMeal(e) {
  e.preventDefault();

  const term = inputBox.value;
  console.log(term);
}
