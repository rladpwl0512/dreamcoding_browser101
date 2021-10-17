'use strict'; //엄격하게 코딩하기

const CARROT_SIZE = 80;
const field = document.querySelector('.game_field');
const fieldRect = field.getBoundingClientRect(); //필드의 전체적 사이즈, 포지션 알 수 있다(필드 범위 내에서 벌레, 당근 위치해야하기 때문에 필요함) 

function initGame() {
  //벌레와 당근을 생성한 뒤 field에 추가 
  console.log(fieldRect);
  addItem('carrot', 5, 'img/carrot.png'); //carrot.png을 5개
  addItem('bug', 5, 'img/bug.png');
}
function addItem(className, count, imgPath) {
  const x1 = 0; 
  const y1 = 0;
  const x2 = fieldRect.width;
  const y2 = fieldRect.height;
  
  for(let i=0; i<count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute'; //game_field기준
    const x = randomNumber(x1, x2); //x1~x2까지 아무숫자 받아옴
    const y = randomNumber(y1, y2); 
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min; //min~max인데 max포함하지 않은 숫자
}

initGame();