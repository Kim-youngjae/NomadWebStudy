const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleCLick(){
     h1.style.color = "blue";
}

function handleMouseEnter(){
     h1.innerText = "Mouse is here!";
     h1.style.color = "blue";
}

function handleMouseLeave(){
     h1.innerText = "Mouse is gone!";
     h1.style.color = "red";
}

function handleWindowResize(){
     document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
     alert("Copier!s")
}

h1.addEventListener("click", handleTitleCLick); // click에 대해서만 listen을 할 것이라는 것을 암시
h1.addEventListener("mouseenter", handleMouseEnter); // argument is only need function name
h1.addEventListener("mouseleave", handleMouseLeave); 

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);