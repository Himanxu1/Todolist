//  selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');


//  Event Lsistener
todoBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

//  Function
function addTodo(event){
    event.preventDefault();

    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // complete btn
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completeBtn");
    todoDiv.appendChild(completedButton);

    //  trash btn

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trashBtn");
    todoDiv.appendChild(trashButton);

    // Append list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}



function deleteCheck(e){
    const item  = e.target;
    if(item.classList[0] == "trashBtn"){
       const todo = item.parentElement;
       todo.classList.add("deleted");
     
       todo.addEventListener('transitionend',function(){
           todo.remove();
       })
    }

    // check mark
    if(item.classList[0] === "completeBtn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}