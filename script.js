let btn = document.getElementById("addtodo");
let inputtext = document.getElementById("inputfield");
let display = document.getElementById("todocontainer");

let todos = []; // To store all TODOs

btn.addEventListener("click", function () {
	if (inputtext.value.trim() !== "") {
		createTodo(inputtext.value.trim());
		inputtext.value = "";
	} else {
		alert("Add Some Task!");
	}
});

function createTodo(text) {
	let todo = { id: Date.now(), content: text };
	todos.push(todo);
	displayTodos();
}

function displayTodos() {
	display.innerHTML = "";
	todos.forEach((todo) => {
		let para = document.createElement("div");
		para.classList.add("todo-item");
		para.setAttribute("data-id", todo.id);

		let textNode = document.createElement("span");
		textNode.textContent = todo.content;

		let buttonsContainer = document.createElement("div");
		buttonsContainer.classList.add("buttons-container");

		let editBtn = document.createElement("button");
		editBtn.innerHTML = "Update";
		editBtn.classList.add("btn", "btn-warning");
		editBtn.onclick = function () {
			editTodo(todo.id);
		};

		let deleteBtn = document.createElement("button");
		deleteBtn.innerHTML = "Delete";
		deleteBtn.classList.add("btn", "btn-danger");
		deleteBtn.onclick = function () {
			deleteTodo(todo.id);
		};

		buttonsContainer.appendChild(editBtn);
		buttonsContainer.appendChild(deleteBtn);

		para.appendChild(textNode);
		para.appendChild(buttonsContainer);

		display.appendChild(para);
	});
}

function editTodo(id) {
	let todo = todos.find((t) => t.id === id);
	let newContent = prompt("Edit your task:", todo.content);
	if (newContent !== null && newContent.trim() !== "") {
		todo.content = newContent.trim();
		displayTodos();
	}
}

function deleteTodo(id) {
	todos = todos.filter((t) => t.id !== id);
	displayTodos();
}

function removeAll() {
	todos = [];
	displayTodos();
}
