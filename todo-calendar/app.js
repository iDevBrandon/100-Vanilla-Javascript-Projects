todoMain();

function todoMain() {
  let inputElem, inputElem2, ulElem, button;

  getElements();
  addListeners();

  function getElements() {
    inputElem = document.getElementsByTagName("input")[0];
    inputElem2 = document.getElementsByTagName("input")[1];
    button = document.getElementById("addBtn");
    ulElem = document.getElementsByTagName("ul")[0];
  }

  function addListeners() {
    button.addEventListener("click", onChange);
  }

  function onChange(event) {
    let flag = true;

    let inputValue = inputElem.value;
    inputElem.value = "";

    let inputValue2 = inputElem2.value;
    inputElem2.value = "";

    let liElem = document.createElement("li");

    let checkboxElem = document.createElement("input");
    checkboxElem.type = "checkbox";
    liElem.appendChild(checkboxElem);

    let textElem = document.createElement("span");
    textElem.innerHTML = inputValue + " - " + inputValue2;
    liElem.appendChild(textElem);

    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";

    spanElem.addEventListener("click", deleteItem);

    liElem.appendChild(spanElem);

    ulElem.appendChild(liElem);

    function deleteItem() {
      liElem.remove();
    }

    function onClick() {
      if (flag) {
        this.classList.add("strike");
        flag = !flag;
      } else {
        this.classList.remove("strike");
        flag = !flag;
      }
    }
  }

  function onClick() {}
}
