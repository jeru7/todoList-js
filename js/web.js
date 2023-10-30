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
    title.classList.add("title");
    title.setAttribute("contenteditable", "false");
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

    todosSettings(listContainer);
  } else {
    alert("You can only have 10 active lists!");
    return;
  }
});
