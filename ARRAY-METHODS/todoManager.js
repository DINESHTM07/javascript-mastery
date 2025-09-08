let todos = [
  { task: "Learn js", completed: false },
  { task: "Go for a walk", completed: true },
];

function addTodo(task) {
  todos.push({ task: task, completed: false });
  console.log(`Added: ${task}`);
}

function removeTodo(task) {
  todos = todos.filter((todo) => todo.task !== task);
  console.log(`Removed: ${task}`);
}

function completeTodo(task) {
  const todo = todos.find((todo) => todo.task === task);
  if (todo) {
    todo.completed = true;
    console.log(`Marked as completed: ${task}`);
  } else {
    console.log(`task not found: ${task}`);
  }
}

function listTodo() {
  console.log("Your todos:");
  todos.forEach((todo) => {
    const status = todo.completed ? "done" : "pending";
    console.log(`${todo.task} - ${status}`);
  });
}

function getCompleteTodos() {
  const completed = todos.filter(todo=> todo.completed);
  console.log("Completed Todos: ", completed);
  return completed;
}

listTodo();

addTodo("Practice arrays");
listTodo();

completeTodo("Learn js");
listTodo();

removeTodo("Go for a walk");
listTodo();

getCompleteTodos();
