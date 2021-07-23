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
    button.addEventListener("click", addEntry);
  }

  function addEntry(event) {
    let flag = true;

    let inputValue = inputElem.value;
    inputElem.value = "";

    let inputValue2 = inputElem2.value;
    inputElem2.value = "";

    // Working with the table
    let table = document.getElementById("todoTable");

    // add a new row
    let trElem = document.createElement("tr");
    table.appendChild(trElem);

    // checkbox cell
    let checkboxElem = document.createElement("td");
    checkboxElem.type = "checkbox";

    let tdElem1 = document.createElement("td");
    tdElem1.appendChild(checkboxElem);
    trElem.appendChild(tdElem1);

    // todo cell
    let tdElem2 = document.createElement("td");
    tdElem2.innerText = inputValue;
    trElem.appendChild(tdElem2);
    // category cell
    let tdElem3 = document.createElement("td");
    tdElem3.innerText = inputValue2;
    trElem.appendChild(tdElem3);
    // delete cell
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";

    let tdElem4 = document.createElement("td");
    tdElem4.appendChild(spanElem);
    trElem.appendChild(tdElem4);
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
