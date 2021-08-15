//Variables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

//Load all event listeners
loadEventListeners();

function loadEventListeners(){
  //dom load event
  document.addEventListener('DOMContentLoaded', getTasks);
  //add task
  form.addEventListener('submit',addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);
  //clear task event
  clearBtn.addEventListener('click', clearTasks);
  //filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

//Get tasks from Ls
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
    //Create li
  const li = document.createElement('li');
  //add class
  li.className = 'collection-item';
  //create text node and append to li
  li.appendChild(document.createTextNode(task));
  //create link
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<a class="fa fa-remove">Delete</a>';
  //Apend link to li
  li.appendChild(link);
  //append li to ul
  taskList.appendChild(li);

  })
}

//Add task
function addTask(e){
  if(taskInput.value === 'null'){
    alert('Add a task');
  }

  //Create li
  const li = document.createElement('li');
  //add class
  li.className = 'collection-item';
  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create link
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<a class="fa fa-remove">Delete</a>';
  //Apend link to li
  li.appendChild(link);
  //append li to ul
  taskList.appendChild(li);

  //store in Local storage
  storeTaskInLocalStorage(taskInput.value);
  //clear input
  taskInput.value = '';
  
  e.preventDefault();
}

//Store Task in Ls
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
//Remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();

      //Remove from Ls
      removeTaskFromLocalStorage( e.target.parentElement.parentElement);
    }

  }
}
//Remove from local storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear Tasks
// function clearTasks() {
//   taskList.innerHTML = '';
// }

//Clear Tasks
 function clearTasks() {
   while(taskList.firstChild){
     taskList.removeChild(taskList.firstChild);
   }

   //clear  from ls
   clearTasksFromLocalStorage();

 }

 //clear tasks from LS
 function clearTasksFromLocalStorage(){
   localStorage.clear();
 }

 //Filter tasks
 function filterTasks(e) {
   const text = e.target.value.toLowerCase();
   document.querySelectorAll('.collection-item').forEach(function(task){
     const item = task.firstChild.textContent;
     if(item.toLowerCase().indexOf(text) != -1){
       task.style.display = 'block';
     }else{
       task.style.display = 'none';
     }

   })

 }