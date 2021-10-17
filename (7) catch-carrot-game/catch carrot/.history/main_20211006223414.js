const btn = document.querySelector('.btn');
const clock = document.querySelector('.clock');

//타이머(count down)
let time = 11; //10초
function timer() {
    const interval = setInterval(function() {
      time--; 
      if(time === -1) {
        time=11;
        clearInterval(interval);
      }
      clock.innerHTML = `00:${time}`;
  }, 1000); //1초마다 실행 
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
}); 

