const draggable_list = document.getElementById("draggable-list");
const checkBtn = document.getElementById("check");

const topHoldings = [
  "AAPL",
  "MSFT",
  "GOOG",
  "BRK",
  "V",
  "FB",
  "JNJ",
  "PG",
  "JPM",
  "RTX",
];

// store list items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...topHoldings]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((holding, index) => {
      console.log(holding);
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="holding-name">${holding}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `;
      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
}
