const toDOForm = document.getElementById("todo-form");
const toDoInput = toDOForm.querySelector("input");
const toDOList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    
}

toDOForm.addEventListener("submit", handleToDoSubmit);