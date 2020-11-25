const btn = document.querySelector(".para__btn");
const container = document.querySelector(".result");

// get the num from control part 

// put that number in fetch()

const genParagraph = function (data) {
  const html = `<p>${data}</p>`;
  container.insertAdjacentHTML("beforeend", html);
};

btn.addEventListener("click", function (num) {
  fetch(`http://metaphorpsum.com/paragraphs/${num}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
