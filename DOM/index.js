const input_ele = document.getElementById("input_todo");

// console.log(input_ele);

const btn = document.getElementById("btn");


const todos = [
      {id: 1, title: 'brush teeth', isComplete: false},
      {id: 2, title: 'buy groceries', isComplete: false},
      {id: 1, title: 'wash clothes', isComplete: false}
]

const todos_ele = document.querySelector('.todos');

function createTodo(todo){
      const todo_ele = document.createElement("div");
      todo_ele.classList.add('todo')

      const span_ele = document.createElement("span");
      span_ele.innerText = todo.title
      
      const check_complete = document.createElement("input")
      check_complete.setAttribute("type", "checkbox")

      const delete_btn = document.createElement("button");
      delete_btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
      

      /// append all children to todo
      todo_ele.append(span_ele, check_complete, delete_btn)
      // append to parent ..todos
      todos_ele.appendChild(todo_ele)
}

function mountAllTodos(){
      todos.map(todo=>createTodo(todo))
}

mountAllTodos();

