const toDOForm = document.getElementById("todo-form");
const toDoInput = toDOForm.querySelector("input");
const toDOList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "Ⅹ";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDOList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDOForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos); //단순히 String

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //parsing 되어 JS에서 사용할 수 있는 형태로 변환
    parsedToDos.forEach((item) => console.log("this is the turn of", item));
    //parsedToDos에 있는 각각의 item에 대해서 console.log를 한다는 의미
    // 위의 sayHello()를 만든 것과 같은 동작을 수행함 (더 짧게 쓸 수 있는 효율적인 방법)
    //이렇게 사용하는 것을 Arrow function 이라고 함
}
