// const axios = require('axios').default;

// axios
//   .get("https://dad-jokes.p.rapidapi.com/random/joke")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

const jokeBtn = document.querySelector(".btn");
const jokeText = document.querySelector(".joke");

jokeBtn.addEventListener("click", displayJoke);

async function displayJoke() {
  const res = await fetch("https://v2.jokeapi.dev/joke/Any");
  const data = await res.json();

  console.log(data);
  jokeText.innerHTML = `<p>${data.setup}</p>`;
}
