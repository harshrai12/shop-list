//selectors
const todoinput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);


//functions
function addTodo(event) {
 event.preventDefault();
 //Todo div
 const todoDiv = document.createElement('div');
 todoDiv.classList.add("todo");
 //Create li
 const newTodo = document.createElement('li');
 newTodo.classList.add("todo-item");
 newTodo.innerText= todoinput.value;
 todoDiv.appendChild(newTodo);
 //creating button for completed
 const completedButton = document.createElement('button');
 completedButton.classList.add("completed-btn");
 completedButton.innerHTML='<li class="fas fa-check"></li>';
 todoDiv.appendChild(completedButton);
 //creating button for delete
 const trashButton = document.createElement('button');
 trashButton.classList.add("trash-btn");
 trashButton.innerHTML='<li class="fas fa-trash"></li>';
 todoDiv.appendChild(trashButton);

 //append to list
 todoList.appendChild(todoDiv);

 //clear values
 todoinput.value="";
}

function deleteCheck(event) {
 const item = event.target;
 //delete todo 
 if (item.classList[0]==="trash-btn"){
  const tododel = item.parentElement;
  tododel.remove();
 }
 if (item.classList[0]==="completed-btn"){
  const checkedone = item.parentElement;
  checkedone.classList.toggle("completed");
  console.log(checkedone);
 }


}
