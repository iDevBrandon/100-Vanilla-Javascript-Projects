todoMain();

function todoMain() {
  let inputElem, ulElem, categoryElem, button;

  getElements();
  addListeners();

  function getElements() {
    inputElem = document.getElementsByTagName("input")[0];
    categoryElem = document.getElementsByTagName("input")[1];
    button = document.getElementById("addBtn");
    ulElem = document.getElementsByTagName("ul")[0];

    console.log(inputElem);
  }

  function addListeners() {
    button.addEventListener("click", addEntry, false);
  }

<<<<<<< Updated upstream
  function addEntry() {
    let flag = true;

    let inputValue = inputElem.value; // event.target
    inputElem.value = "";

    let categoryValue = categoryElem.value;
    categoryValue.value = "";

    // Add a new row into table
    let table = document.getElementById("todoTable");

    let trElem = document.createElement("tr");
    table.appendChild(trElem);
=======
  function onChange() {
    let flag = true;
    let inputValue = inputElem.value; // event.target
    inputElem.value = "";

    // ulElem.innerHTML += `<li>${inputValue}</li>`;
    const liElem = document.createElement("li");
    liElem.innerHTML = inputValue;
    liElem.addEventListener("click", onClick, false);
>>>>>>> Stashed changes

    // chechbox cell
    let checkboxElem = document.createElement("input");
    checkboxElem.type = "checkbox";

    let tdElem1 = document.createElement("td");
    tdElem1.appendChild(checkboxElem);
    trElem.appendChild(tdElem1);

    // to-do cell
    let tdElem2 = document.createElement("td");
    tdElem2.innerText = inputValue;
    trElem.appendChild(tdElem2);

    // category cell
    let tdElem3 = document.createElement("td");
    tdElem3.innerText = categoryValue;
    trElem.appendChild(tdElem3);
    // delete cell
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";
    spanElem.addEventListener("click", deleteItem, false);
    let tdElem4 = document.createElement("td");
    tdElem4.appendChild(spanElem);
    trElem.appendChild(tdElem4);

<<<<<<< Updated upstream
    // ulElem.innerHTML += `<li>${inputValue}</li>`;
    // const liElem = document.createElement("li");
=======
    spanElem.addEventListener("click", deleteItem, false);
    liElem.appendChild(spanElem);
>>>>>>> Stashed changes

    // let checkboxElem = document.createElement("input");
    // checkboxElem.type = "checkbox";
    // liElem.appendChild(checkboxElem);

    // let textElem = document.createElement("span");
    // textElem.innerText = inputValue + " - " + categoryValue;
    // liElem.appendChild(textElem);

    // //liElem.innerText = inputValue;
    // //liElem.addEventListener("click", onClick, false);

    // let spanElem = document.createElement("span");
    // spanElem.innerText = "delete";
    // spanElem.className = "material-icons";

    // spanElem.addEventListener("click", deleteItem, false);
    // liElem.appendChild(spanElem);

    // ulElem.appendChild(liElem);

    function deleteItem() {
      trElem.remove();
    }

    function onClick() {
      if (flag) {
        // this.style.textDecoration = "line-through";
        this.classList.add("strike");
        flag = !flag;
      } else {
        // this.style.textDecoration = "none";
        this.classList.remove("strike");
        flag = !flag;
      }
    }

    function onClick() {
      if (flag) {
        // this.style.textDecoration = "line-through";
        this.classList.add("strike");
        flag = !flag;
      } else {
        // this.style.textDecoration = "none";
        this.classList.remove("strike");
        flag = !flag;
      }
    }
  }
}
