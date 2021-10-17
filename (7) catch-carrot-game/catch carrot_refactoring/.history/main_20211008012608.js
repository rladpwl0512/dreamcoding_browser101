'use strict'; //엄격하게 코딩하기

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const field = document.querySelector('.game_field');
const fieldRect = field.getBoundingClientRect(); //필드의 전체적 사이즈, 포지션 알 수 있다(필드 범위 내에서 벌레, 당근 위치해야하기 때문에 필요함) 
const gameBtn = document.querySelector('.game_button');
const gameTimer = document.querySelector('.game_timer');
const gameScore = document.querySelector('.game_score');

let started = false; //게임의 상태(게임 시작됐는지 안됐는지)
let score = 0; //점수
let timer = undefined; //시간 얼마나 남았는지 (게임 시작하지 않았으면 undefined), global으로 만들어줘야함 

gameBtn.addEventListener('click', () => {
  if(started) {
    stopGame();
  } else {
    startGame();
  }
  started = !started; //반대로 할당
});

function startGame() {
  initGame();
  showStopButton(); //stop button 보여짐
  showTimerAndScore();
  startGameTimer();
}
function stopGame() {

}
function showStopButton() {
  const icon = gameBtn.querySelector('.fa-play');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
}

function showTimerAndScore() {
  gameTimer.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC; //지정한 초수만큼만 유지
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if(remainingTimeSec <= 0) {
      clearInterval(timer);
      return; 
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function updateTimerText(sec) {
  const minutes = Math.floor(time / 60); 
}
function initGame() {
  field.innerHTML = ''; //새롭게 리셋되면서 추가
  gameScore.innerText = CARROT_COUNT;
  //벌레와 당근을 생성한 뒤 field에 추가 
  addItem('carrot', CARROT_COUNT, 'img/carrot.png', 80); //carrot.png을 5개
  addItem('bug', BUG_COUNT, 'img/bug.png', 50);
}
function addItem(className, count, imgPath, imgSize) {
  const x1 = 0; 
  const y1 = 0;
  const x2 = fieldRect.width - imgSize; //반드시 carrot_size 빼줘야함(노트 참고), 
  const y2 = fieldRect.height - imgSize;
  
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