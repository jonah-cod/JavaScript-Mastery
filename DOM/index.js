const input_ele = document.getElementById("input_todo");

// console.log(input_ele);

const btn = document.getElementById("btn");


const todos = [
      {id: 1, title: 'brush teeth', isComplete: false},
      {id: 2, title: 'buy groceries', isComplete: false},
      {id: 3, title: 'wash clothes', isComplete: false}
]

const todos_ele = document.querySelector('.todos');

function createTodo(todo){
      const todo_ele = document.createElement("div");
      todo_ele.classList.add('todo')
      todo_ele.id = `_${todo.id}`;

      const span_ele = document.createElement("span");
      span_ele.innerText = todo.title
      
      const check_complete = document.createElement("input")
      check_complete.setAttribute("type", "checkbox")
      check_complete.addEventListener('change', (e)=>{markComplete(e, todo.id)})

      const delete_btn = document.createElement("button");
      delete_btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
      delete_btn.addEventListener('click', ()=>{
            handleDelete(todo.id)
      })
      

      /// append all children to todo
      todo_ele.append(span_ele, check_complete, delete_btn)
      // append to parent ..todos
      todos_ele.appendChild(todo_ele)
}
//#region 
function mountAllTodos(){
      todos.map(todo=>createTodo(todo))
}

mountAllTodos();

const form = document.querySelector("form");

const date = new Date()

form.addEventListener('submit', (e)=>{
      e.preventDefault()
      
      const new_todo = {id: date.getMilliseconds(), title: input_ele.value, isComplete: false}
      createTodo(new_todo)
      input_ele.value = ''
      
})
//#endregion

function handleDelete(id){
      const todo_ele = document.getElementById(`_${id}`);
      todos_ele.removeChild(todo_ele);
}


function markComplete(e, id){
      const span_ele = document.querySelector(`#_${id} span`)
      if (e.target.checked) {
            span_ele.classList.add('complete')
      }else{
            span_ele.classList.remove('complete')
      }

      
}