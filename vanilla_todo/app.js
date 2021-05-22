const todoInput = document.querySelector(".todo__control--input");
const todoAddBtn = document.querySelector(".todo__control--button");
const todoList = document.querySelector(".todo__list");

const addTodo = (e) => {
  e.preventDefault();
  if (todoInput.value.length > 0) {
    // each todo
    const listItem = document.createElement("li");
    listItem.classList.add("todo__list--item");

    const listBody = document.createElement("div");
    listBody.classList.add("todo__list--body");
    listBody.innerText = todoInput.value;

    todoInput.value = "";
    listItem.appendChild(listBody);

    // COMPLETE mark
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    listItem.appendChild(completeBtn);

    // DELETE mark
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("trash-btn");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    listItem.appendChild(deleteBtn);

    // insert todos into ul
    todoList.appendChild(listItem);
  } else {
    alert("Type sth please");
  }
};

todoAddBtn.addEventListener("click", addTodo);
