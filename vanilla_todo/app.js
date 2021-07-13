const todoInput = document.querySelector(".todo__control--input");
const todoAddBtn = document.querySelector(".todo__control--button");
const todoList = document.querySelector(".todo__list");

const addTodo = (e) => {
  e.preventDefault();
  if (todoInput.value.length > 0) {
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
 
    // CHECK DELETE MARK
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    // clear input value after adding
    todoInput.value = "";
  } else {
    alert("Type sth please");
  }
};

// delte todo
const deleteTodo = (e) => {
  const item = e.target.children[1];

  const todo = item.parentElement;
  console.log(todo.children);
};

todoAddBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
