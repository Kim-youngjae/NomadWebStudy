const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
     event.preventDefault(); // browser가 기본 동작을 실행하는 것을 막아준다. 이 경우 submit은 새로고침이 기본 동작인데 이를 막음
     loginForm.classList.add(HIDDEN_CLASSNAME); //submit동작이 실행되었을 때 로그인 form을 안보이게 하기 위함
     const username = loginInput.value;
     localStorage.setItem(USERNAME_KEY, username);
     paintGreetings(username);
}

function paintGreetings(username){
     greeting.innerText = `Hello ${username}`;
     greeting.classList.remove(HIDDEN_CLASSNAME);
     // loginForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
     loginForm.classList.remove(HIDDEN_CLASSNAME);
     loginForm.addEventListener("submit", onLoginSubmit);
} else {
     paintGreetings(savedUsername);
}
