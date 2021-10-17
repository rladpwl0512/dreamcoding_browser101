const btn = document.querySelector('.btn');
const clock = document.querySelector('.clock');
const bug = document.querySelector('.bug');
const carrot = document.querySelectorAll('carrot');

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
  let xNum = Math.floor(Math.random() * 720);
  let yNum = Math.floor(Math.random() * 170);
  console.log(xNum, yNum);
  bug.style.transform = `translate(${xNum}px, ${yNum}px)`;
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

