const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg",];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // JS에서 html 요소 생성하는 방법
//하지만 아직 html코드에는 추가가 되지 않은 상태

bgImage.src = `img/${chosenImage}`;

//html의 body에 생성한 요소를 추가하기 위한 코드
document.body.appendChild(bgImage);