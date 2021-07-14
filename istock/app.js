// https://www.alphavantage.co/query?function=OVERVIEW&symbol=DE&apikey=R48HXVW4LT71J7ST

fetch("https://istock-api.herokuapp.com/stocks")
  .then((res) => res.json())
  .then((data) => console.log(data));
