todoMain();

function todoMain() {
  let inputElem, ulElem;

  getElements();
  addListeners();

  function getElements() {
    inputElem = document.getElementsByTagName("input")[0];
    ulElem = document.getElementsByTagName("ul")[0];

    console.log(inputElem);
  }

  function addListeners() {
    inputElem.addEventListener("change", onChange, false);
  }

  function onChange() {
    let inputValue = inputElem.value; // event.target
    inputElem.value = "";

    // ulElem.innerHTML += `<li>${inputValue}</li>`;
    const liElem = document.createElement("li");
    liElem.innerHTML = inputValue;

    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";

    liElem.addEventListener("click", deleteItem, false);
    liElem.appendChild(spanElem);

    ulElem.appendChild(liElem);

    function deleteItem() {
      liElem.remove();
    }
  }
}
