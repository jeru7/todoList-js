// function to add list
const addList = document.querySelector("#addList");
const mainContainer = document.querySelector(".main-container");
const CONTAINERTOTAL = 10;

addList.addEventListener("click", () => {
  const listContainerAll = document.querySelectorAll(".list-container");

  if (listContainerAll.length < CONTAINERTOTAL) {
    const listContainer = document.createElement("div");
    listContainer.classList.add("list-container");

    const listHeader = document.createElement("div");
    listHeader.classList.add("list-header");
    const title = document.createElement("h3");
    title.classList.add("title", "list-title");
    title.setAttribute("contenteditable", "false");
    title.innerText = "Title";
    const headerSettings = document.createElement("div");
    headerSettings.classList.add("header-settings-container");
    const addTodo = document.createElement("div");
    addTodo.classList.add("add-todoList");
    const listSettings = document.createElement("div");
    listSettings.classList.add("list-settings");

    const mainList = document.createElement("div");
    mainList.classList.add("list-main");

    mainContainer.appendChild(listContainer);
    listContainer.appendChild(listHeader);
    listContainer.appendChild(mainList);
    listHeader.appendChild(title);
    listHeader.appendChild(headerSettings);
    headerSettings.appendChild(addTodo);
    headerSettings.appendChild(listSettings);
  } else {
    alert("You can only have 10 active lists!");
    return;
  }
});

// event delegation for adding new todo lists
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-todoList")) {
    const listContainer = event.target
      .closest(".list-container")
      .querySelector(".list-main");
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
  }
});

// event delegation for editing lists and title
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("list-settings")) {
    const todoList = event.target
      .closest(".list-container")
      .querySelectorAll(".todos");

    const listTitle = event.target
      .closest(".list-container")
      .querySelector(".title");

    let isEditable = !listTitle.isEditable;

    listTitle.setAttribute("contenteditable", isEditable);

    todoList.forEach((todo) => {
      todo.setAttribute("contenteditable", isEditable);
    });

    // function to limit the character of the title
    listTitle.addEventListener("input", (event) => {
      const maxChar = 13;

      if (listTitle.innerText.length > maxChar) {
        event.target.innerText = event.target.innerText.slice(0, maxChar);
        alert(`There's only maximum of ${maxChar} characters for the title`);
      }
    });
  }
});
