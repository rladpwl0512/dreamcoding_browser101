const btn = document.querySelector('.btn');
const clock = document.querySelector('.clock');
const bugs = document.querySelectorAll('.bug');
const carrots = document.querySelectorAll('.carrot');
const count = document.querySelector('.count');
const alert = document.querySelector('.alert');
const message = document.querySelector('.message');

//타이머(count down)
let time = 11; //10초
function timer() {
    const interval = setInterval(function() {
      time--; 
      if(time === -1) {
        time=11;
        clearInterval(interval);
        return;
      }
      clock.innerHTML = `00:${time}`;
  }, 1000); //1초마다 실행 
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

//클릭이 되었을 때 버튼 변경 
btn.addEventListener('click', () => {
  //1. 중지버튼으로 변경 
  btn.innerHTML=`
    <i class="fas fa-square"></i>
    <span class="blind">pause button</span>
  `;
  //2. 타이머 실행
  timer();
  //3. 카운터 실행(클릭 카운터)
  //4. 당근, 벌레 랜덤 배치
  random();
}); 

//당근이 클릭되었을 때 
let cnt = 10; //당근 갯수
for(let carrot of carrots) {
  carrot.addEventListener('click', () => {
    carrot.style.display = "none"; //당근 사라지게 함 
    cnt--;//counter 횟수 줄어듦 
    count.innerHTML = cnt;
    
    if(cnt===0) {
      message.innerHTML = "YOU WON🎉"
      alert.style.display = "block"; //you won
    }
});

//벌레가 클릭되었을 때 
for(let bug of bugs) {
  bug.addEventListener('click', () => {
    //you lost
    alert.style.display = "block"; 
    btn.style.visibility = "hidden";
    
  })
}
}

