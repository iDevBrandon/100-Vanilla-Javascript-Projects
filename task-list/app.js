// Define UI vars
const form = document.querySelector(".task-form");
const textInput = document.querySelector("#task");
const addBtn = document.querySelector(".btn");
const taskCollection = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

// add/ remove/ clear/ filter
addBtn.addEventListener("click", addTask);
document.addEventListener("DOMContentLoaded", getTasks);
taskCollection.addEventListener("click", removeTask);
clearBtn.addEventListener("click", clearTask);
filter.addEventListener("keyup", filterTask);

function addTask(e) {
  e.preventDefault();

  if (textInput.value === "") {
    alert("fuck off");
  }
  const li = document.createElement("li");
  li.className = "collection-item";

  li.appendChild(document.createTextNode(textInput.value));

  const link = document.createElement("a");

  link.className = "delete-item secondary-content";

  link.innerHTML = "<i class='fa fa-remove'></i>";

  li.appendChild(link);

  taskCollection.appendChild(li);

  // add to LS
  storeTaskInLocalStorage(textInput.value);

  textInput.value = "";
}

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.className = "collection-item";

    li.appendChild(document.createTextNode(task));

    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = "<i class='fa fa-remove'></i>";

    li.appendChild(link);

    taskCollection.appendChild(li);
  });
}

// remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("are you sure?")) {
      e.target.parentElement.parentElement.remove();

      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// empty task
function clearTask() {
  // taskCollection.innerHTML = "";
  while (taskCollection.firstChild) {
    taskCollection.removeChild(taskCollection.firstChild);
  }

  // Clear from LS
  clearTasksFromLocalStorage();
}

function filterTask(e) {
  const text = filter.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

// LS stuff
// function storeTaskInLocalStorage(task) {
//   let tasks;
//   if (localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }

//   tasks.push(task);

//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// clear from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}
