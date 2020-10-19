import people from "./data.js";
const peopleContainer = document.querySelector(".people-list");
const btn = document.getElementById("clear-btn");

peopleContainer.innerHTML = people
  .map((person) => {
    const { id, name, age, image } = person;
    return `
    <li id=${id}>
      <img src=${image} alt=${name} />
      <div>
        <h4>${name}</h4>
        <p>${age}</p>
      </div>
    </li>
  `;
  })
  .join("");

btn.addEventListener("click", () => clearList());

function clearList() {
  peopleContainer.innerHTML = "";
}
