//SELECTORS
const todoInput =document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList =document.querySelector('.todo-list');
const filterTodo = document.querySelector('.filter-todo')

//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);
filterTodo.addEventListener('click', filterList);

//FUNCTIONS
//addTodo
function addTodo(e){
  //prevent form submisiion
  e.preventDefault();
  
  //create todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //create li
  const newTodo = document.createElement('li');
  newTodo.classList.add('todo-item');
  newTodo.innerText = todoInput.value.toLowerCase();

  //append li to the div
  todoDiv.appendChild(newTodo);
  //add todo to local storage
  saveToLocalStorage(todoInput.value);
  //create complete button
  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  completeBtn.classList.add('complete-btn');
  todoDiv.appendChild(completeBtn)

  //create delete button
  const trashBtn = document.createElement('button');
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add('trash-btn');
  todoDiv.appendChild(trashBtn)
  //append div to list
  todoList.appendChild(todoDiv);
  //clear input value
  todoInput.value = '';
}

//deletecheck
function deleteCheck(e){
  const item = e.target;
  //delete todo
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    //animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
  }

   //mark to do completed
   if(item.classList[0] === 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }

}

//filter todos
function filterList(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if(todo.classList.contains('completed')){
          todo.style.display= 'flex';
        }else{
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
          if(!todo.classList.contains('completed')){
            todo.style.display = 'flex';
          }else{
            todo.style.display = 'none';
          }
          break;
    }

  });

};
//save to local storage
function saveToLocalStorage(todo) {
  //check local storage
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
 todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
  
    //create li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todo;
  
    //append li to the div
    todoDiv.appendChild(newTodo);
    //create complete button
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.classList.add('complete-btn');
    todoDiv.appendChild(completeBtn)
  
    //create delete button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn)
    //append div to list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalStorage(){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
}