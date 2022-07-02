const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleCLick(){
     // const clickedClass = "clicked";
     // if(h1.classList.contains(clickedClass)){
     //      h1.classList.remove(clickedClass);
     // } else {
     //      h1.classList.add(clickedClass)
     // }

     h1.classList.toggle("clicked"); // 위 다섯줄의 코드와 똑같은 동작을 수행하는 method
     // toggle의 인자로 clicked를 그대로 넣은 이유는 "한번만 쓰이기 때문이고" 여러번 쓰일 시 변수에 넣고 사용한다.
}

h1.addEventListener("click", handleTitleCLick); // click에 대해서만 listen을 할 것이라는 것을 암시