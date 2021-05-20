let dropdown = document.querySelector(".dropdown");

console.log(dropdown);

let defaultOption = document.createElement("option");
defaultOption.text = "Choose your option";

dropdown.add(defaultOption);

const getData = () => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    console.log(res.data);

    let option;
    for (let i = 0; i < res.data.length; i++) {
      // defaultOption.text = res.data[i].name;
      option = document.createElement("option");
      option.text = res.data[i].name;
      dropdown.add(option);
    }
  });
};

dropdown.addEventListener("click", getData);
