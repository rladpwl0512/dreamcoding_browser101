//함수단위로 코딩하면서 부족한 것 하나씩 메꿔나가기(꿀팁)
'use strict';
import PopUp from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';

 //엄격하게 코딩하기
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameBtn = document.querySelector('.game_button');
const gameTimer = document.querySelector('.game_timer');
const gameScore = document.querySelector('.game_score');

let started = false; //게임의 상태(게임 시작됐는지 안됐는지)
let score = 0; //점수
let timer = undefined; //시간 얼마나 남았는지 (게임 시작하지 않았으면 undefined), global으로 만들어줘야함 

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  startGame();
});

const gameField = new Field(CARROT_COUNT, BUG_COUNT);
gameField.setClickListener(onItemClick);

function onItemClick(item) {
  if(!started) return; //게임 시작하지 않았다면 return
  //matches를 통해 css 일치하는지 확인 
  if(item === 'carrot') {
    score++;
    updateScoreBoard();
    if(score === CARROT_COUNT) {
      finishGame(true); //이겼으니까 true 넘김(좋지않은코드, 이후 리팩토링)
    }
  }  else if(item === 'bug') {
    finishGame(false); //졌으니까 false 넘김 
  }
}
gameBtn.addEventListener('click', () => {
  if(started) { 
    stopGame();
  } else {
    startGame();
  }
});

function startGame() {
  started = true;
  initGame();
  showStopButton(); //stop button 보여짐
  showTimerAndScore();
  startGameTimer();
  sound.playBackground();
}
function stopGame() {
  started = false;
  stopGameTimer();
  hideGameButton();
  gameFinishBanner.showWithText('REPLAY❓');
  sound.playAlert();
  sound.stopBackground();
}
function finishGame(win) {
  started = false;
  hideGameButton();
  if(win) {
    sound.playWin();
  } else {
    sound.playBug();
  }
  stopGameTimer();
  stopSound(bgSound);
  gameFinishBanner.showWithText(win? 'YOU WON 🎉' : 'YOU LOST💩');
}
function showStopButton() {
  const icon = gameBtn.querySelector('.fas');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
  gameBtn.style.visibility = 'visible';
}

function hideGameButton() {
  gameBtn.style.visibility = 'hidden';
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
      finishGame(CARROT_COUNT === score); //지정된 시간안에 당근 먹으면 won, 아니라면 lost
      return; 
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}
function stopGameTimer() {
  clearInterval(timer);
  hideGameButton();
  gameFinishBanner.showWithText('REPLAY❓')
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60); 
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}

function initGame() {
  score = 0;
  gameScore.innerText = CARROT_COUNT;
  gameField.init();
}


function updateScoreBoard() {
  gameScore.innerText = CARROT_COUNT - score; //남은 수를 출력
}


function randomNumber(min, max) {
  return Math.random() * (max - min) + min; //min~max인데 max포함하지 않은 숫자
}
