const input = document.querySelector("input");
const btn = document.querySelector("button");
const todolist = document.querySelector(".todolist");
const todos = [
  {
    title: "Devsnest",
  },
];
localStorage.setItem("todos", todos);
function loadTodo() {
  todos.map((todo) => {
    const newTodo = document.createElement("div");
    newTodo.innerHTML = todo.title;
    todolist.appendChild(newTodo);
    // console.log(todo.title);
  });
}

btn.addEventListener("click", () => {
  const newTodo = document.createElement("div");
  newTodo.innerHTML = input.value;
  todolist.appendChild(newTodo);
  input.value = "";
});
const newTodo = localStorage.getItem(todos);
console.log(newTodo);
