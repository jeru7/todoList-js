// function that add list in todo container
const addTodo = document.querySelector(".add-todoList");

addTodo.addEventListener("click", () => {
  const listContainer = document.querySelector(".list-main");
  const todoContainer = document.createElement("div");
  const list = document.createElement("li");
  const checkDelete = document.createElement("div");
  const checkBox = document.createElement("div");
  const deleteList = document.createElement("div");

  todoContainer.classList.add("todos-container");
  list.classList.add("todos");
  list.setAttribute("contenteditable", "false");
  list.innerText = "new list";
  checkDelete.classList.add("checkDelete-container");
  checkBox.classList.add("checkBox");
  deleteList.classList.add("list-delete");

  todoContainer.appendChild(list);
  checkDelete.appendChild(checkBox);
  checkDelete.appendChild(deleteList);
  todoContainer.appendChild(checkDelete);
  listContainer.appendChild(todoContainer);

  // function to limit the character of the list name
  list.addEventListener("input", (event) => {
    const maxChar = 18;

    if (list.innerText.length > maxChar) {
      event.target.innerText = event.target.innerText.slice(0, maxChar);
      alert(`There's only maximum of ${maxChar} characters for the list`);
    }
  });
});

const listSettings = document.querySelector(".list-settings");
const listTitle = document.querySelector(".title");
let isEditable = true;

// function to limit the character of the title
listTitle.addEventListener("input", (event) => {
  const maxChar = 13;

  if (listTitle.innerText.length > maxChar) {
    event.target.innerText = event.target.innerText.slice(0, maxChar);
    alert(`There's only maximum of ${maxChar} characters for the title`);
  }
});

// function for editing the lists and title
listSettings.addEventListener("click", () => {
  const todoList = document.querySelectorAll(".todos");

  if (isEditable) {
    listTitle.setAttribute("contenteditable", "false");

    todoList.forEach((todo) => {
      todo.setAttribute("contenteditable", "false");
    });
  } else {
    listTitle.setAttribute("contenteditable", "true");
    todoList.forEach((todo) => {
      todo.setAttribute("contenteditable", "true");
    });
  }

  isEditable = !isEditable;
});
