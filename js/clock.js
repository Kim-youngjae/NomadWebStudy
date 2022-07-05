const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    // date.getHours()는 number타입이지만 String으로 캐스팅 후 padStart()를 이용해서 만족하는 글자수가 아니면 0을 채워줌
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds.padStart(2, "0")}`;
}

getClock();
setInterval(getClock, 1000);