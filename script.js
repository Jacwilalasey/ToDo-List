var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

addTodos();

function addTodos() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var todoText = todoInput.value.trim();

    if (todoText === "") {
    return;
    }

    todos.push(todoText);
    todoInput.value = "";

    addTodos();
});

todoList.addEventListener("click", function(event) {
    event.preventDefault();

    var todoRemove = todoInput.value.trim();

    if (todoText === "") {
    return;
    }

    todos.push(todoText);
    todoInput.value = "";

    addTodos();
});