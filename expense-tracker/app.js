const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const list = document.getElementById("list");
const balance = document.querySelector(".balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");

const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];

let transactions = dummyTransactions;

function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === null) {
    alert("Please fill in both");
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value,
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);

    displayBalance();

    text.value = "";
    amount.value = "";
  }
}

// Generate random id
function generateID() {
  return Math.floor(Math.random() * 100000);
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";

  // create an element
  const li = document.createElement("li");
  // create a class
  li.classList.add(transaction.amount < 0 ? "minus" : "plus");
  // insert HTML
  li.innerHTML = `
    ${transaction.text} <span>${sign}$${Math.abs(
    transaction.amount
  )}</span><button class="delete-btn 
  onclick="removeTransaction${transaction.id}">X</button>
  `;
  list.appendChild(li);
}

function displayBalance() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  balance.innerHTML = `$${total}`;

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  money_plus.innerHTML = `$${income}`;

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);
  money_minus.innerHTML = `$${expense}`;
}

function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  init();
}

function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactionDOM);
  displayBalance();
}

init();

form.addEventListener("submit", addTransaction);
