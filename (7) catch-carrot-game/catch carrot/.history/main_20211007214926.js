const btn_play = document.querySelector('.btn_play');
const btn_pause = document.querySelector('.btn_pause');
const clock = document.querySelector('.clock');
const bugs = document.querySelectorAll('.bug');
const carrots = document.querySelectorAll('.carrot');
const count = document.querySelector('.count');
const alert = document.querySelector('.alert');
const message = document.querySelector('.message');
const btn_replay = document.querySelector('.btn_replay');
const carrotSound = new Audio();
carrotSound.src = "./sound/carrot_pull.mp3";
const bugSound  = new Audio();
bugSound.src = "./sound/bug_pull.mp3";
const bgSound = new Audio();
bgSound.src = "./sound/bg.mp3";
bgSound.volume = 0.5;
const winSound = new Audio();
winSound.src = "./sound/game_win.mp3";

let interval; //전역변수로 만들어줌! (핵심)

//게임 시작
function play() {
  //오디오 재생
  bgSound.currentTime=0; //처음부터 재생
  bgSound.play();

  //1. 중지버튼으로 변경 
  btn_play.innerHTML=`
  <i class="fas fa-square"></i>
  <span class="blind">pause button</span>
  `;
  //2. 타이머 실행
  timer();
  //3. 카운터 실행(클릭 카운터)
  //4. 당근, 벌레 랜덤 배치
  random();
}

//타이머(count down)
let time = 11; //10초
function timer() {
    interval = setInterval(function() {
      time--; 
      if(time === -1) {
        lost();
        stopTimer();
        return;
      }
      clock.innerHTML = `00:${time}`;
  }, 1000); //1초마다 실행 
}

//timer 멈춤 
function stopTimer() {
  clearInterval(interval);
}
//랜덤 배치
function random() {
  for(let bug of bugs) {
    let xNum = Math.floor(Math.random() * 720);
    let yNum = Math.floor(Math.random() * 170);
    bug.style.display = "block";
    bug.style.transform = `translate(${xNum}px, ${yNum}px)`;
  }
  for(let carrot of carrots) {
    xNum = Math.floor(Math.random() * 720);
    yNum = Math.floor(Math.random() * 170);
    carrot.style.display = "block";
    carrot.style.transform = `translate(${xNum}px, ${yNum}px)`;
  }
}

function lost() {
  bgSound.pause();
  bugSound.play();
  alert.style.display = "block"; 
  btn_play.style.visibility = "hidden"; 
}

function win() {
  bgSound.pause();
  winSound.play();
  message.innerHTML = "YOU WON🎉"
  alert.style.display = "block"; //you won
  btn_play.style.visibility = "hidden";
}

//play button이 클릭 되었을 때
btn_play.addEventListener('click', () => {
  btn_play.className = "btn_pause";
  play();
}); 

//당근이 클릭되었을 때 
let cnt = 10; //당근 갯수
for(let carrot of carrots) {
  carrot.addEventListener('click', () => {
    carrot.style.display = "none"; //당근 사라지게 함 
    cnt--;//counter 횟수 줄어듦 
    count.innerHTML = cnt;
    carrotSound.play();

    if(time>=0 && cnt===0) {
      win();
      stopTimer();
    }
});

//벌레가 클릭되었을 때 
for(let bug of bugs) {
  bug.addEventListener('click', () => {
    //you lost
    lost();
    stopTimer();
  })
}
}

//replay 
btn_replay.addEventListener('click', () => {
  alert.style.visibility = 'hidden';
  btn_play.style.visibility = "visible"; 
  cnt=10;
  count.innerHTML=cnt;
  time=11;

  play();
})