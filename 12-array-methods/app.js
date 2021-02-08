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

// add new obj to HTML
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {

}
