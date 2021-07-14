const draggable_list = document.getElementById("draggable-list");
const check_btn = document.getElementById("check");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Elon Musk",
  "Larry Page",
];

// Store listitems
const listItems = [];

let dragStartIndex;

createList();

const numbers = [1, 3, 110, 40, 302];

numbers.sort((a, b) => a - b);
console.log(numbers);
// Create listiems
function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      console.log(person);
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.classList.add("over");

      listItem.innerHTML = `
        <span class='number'>${index + 1}</span>
        <div class='draggable' draggable='true'>
            <p class='person-name'>${person}</p>
             
        </div>
    `;

      //
      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
