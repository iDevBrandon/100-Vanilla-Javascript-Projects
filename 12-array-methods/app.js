// DOM selections
const main = document.querySelector(".main");
const addUser = document.querySelector(".add-user");
const doubleBtn = document.querySelector(".double-money");
const showMillionaire = document.querySelector(".show-millionaire");
const sortBtn = document.querySelector(".sort-btn");
const sumBtn = document.querySelector(".sum-btn");

let data = [];

// fetch data from randomuser.me
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

getRandomUser();
getRandomUser();
getRandomUser();

// add new obj to HTML
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// format money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

addUser.addEventListener("click", getRandomUser);
