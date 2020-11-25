const btn = document.querySelector(".para__btn");
const container = document.querySelector(".result");
const amount = document.querySelector(".amount");

// get the num from control part
const genParagraph = function (data) {
  const html = `<p class='paragraph'>${data}</p>`;
  container.insertAdjacentHTML("beforeend", html);
};

// put that number in fetch()
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const num = amount.value;
  console.log(num);
  fetch(`http://metaphorpsum.com/paragraphs/${num}`)
    .then(function (response) {
      // The API call was successful!
      return response.text();
    })
    .then(function (data) {
      // This is the JSON from our response
      console.log(data);
      genParagraph(data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
});
