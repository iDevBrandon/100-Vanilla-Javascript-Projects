todoMain();

function todoMain() {
  let inputElem, inputElem2, selectElem, button;

  getElements();
  addListeners();

  function getElements() {
    inputElem = document.getElementsByTagName("input")[0];
    inputElem2 = document.getElementsByTagName("input")[1];
    button = document.getElementById("addBtn");
    selectElem = document.getElementById("categoryFilter");
  }

  function addListeners() {
    button.addEventListener("click", addEntry);
    selectElem.addEventListener("change", filterEntries);
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
    checkboxElem.addEventListener("click", done);
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
    spanElem.addEventListener("click", deleteItem);

    let tdElem4 = document.createElement("td");
    tdElem4.appendChild(spanElem);
    trElem.appendChild(tdElem4);

    function deleteItem() {
      trElem.remove();
    }

    function done() {
      if (flag) {
        trElem.classList.toggle("strike");
        flag = !flag;
      }
    }
  }

  function filterEntries() {
    let rows = document.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
      let category = rows[i].getElementsByTagName("td")[3].innerText;
      if (category == selectElem.value) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
}
