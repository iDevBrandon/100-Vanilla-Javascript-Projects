// selectors
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoButton = document.querySelector(".todo-button");
const filterOption = document.querySelector(".filter-todo");

// function
const addTodo = (event) => {
  // prevent from submitting
  event.preventDefault();
  // create todo element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");

  // add todo item into todoDiv
  todoDiv.appendChild(newTodo);

  // CHECK COMPLETE MARK
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // Add todo in LS
  saveLocalTodos(todoInput.value);

  // CHECK DELETE MARK
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  // clear input value after adding
  todoInput.value = "";
};

const deleteCheck = (e) => {
  const item = e.target;
  console.log(item);
  // Delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // check MARK
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
};

// Filter todo part
const filterTodo = (e) => {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
};

// deal with LocalStorage
function saveLocalTodos(todo) {
  // check if the data is already there or not
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    // means there are data
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  // how to save todos in LS
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
