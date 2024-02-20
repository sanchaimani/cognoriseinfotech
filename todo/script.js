let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let todoList = [{
        text: "Learn webdevelopment",
        uniqueNo: 1
    },
    {
        text: "complete tasks",
        uniqueNo: 2
    },
    {
        text: "study for exams",
        uniqueNo: 3
    }
];

addTodoButton.onclick = function() {
    onAddTodo();
}

function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);

    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked")


}

function ondeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        ondeleteTodo(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

function onAddTodo() {
    let todoCount = todoList.length;

    todoCount = todoCount + 1;
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    if (userInputValue === "") {
        alert("Enter valid Input");
        return;
    }
    let newTodo = {
        text: userInputValue,
        uniqueNo: todoCount,
    };
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}