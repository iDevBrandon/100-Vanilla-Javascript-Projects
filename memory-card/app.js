const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

// keep track of current card
let currentActiveCard = 0;

// store DOM card
const cardsEl = [];

// store card data
const cardsData = [
  { question: "What do you like?", answer: "pizza and chicken" },
  { question: "What is JavaScript?", answer: "My fav lang" },
  { question: " what do you wannna be?", answer: "A MSFT board member" },
];

// create a card
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (index === 0) {
    card.classList.add("active");
  }

  card.innerHTML = `
  <div class="inner-card">
    <div class="inner-card-front">
      <p>${data.question}</p>
    </div>
    <div class="inner-card-back">
      <p>${data.answer}</p>
    </div>
  </div>
  `;

  card.addEventListener("click", () => {
    card.classList.toggle("show-answer");
  });

  // add to DOM cards
  cardsEl.push(card);

  cardsContainer.appendChild(card);

  updateCurrentText();
}

// show number of cards
function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

createCards();
