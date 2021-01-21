const searchForm = document.querySelector(".form");
const searchInput = document.querySelector(".searchInput");
const movieImg = document.querySelector(".movie--img");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = e.target.value;

  let url = `http://www.omdbapi.com/?apikey=820e3a4a&s=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));

  movieImg.src = data.Search[0].Poster;
});

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // check input
  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}
