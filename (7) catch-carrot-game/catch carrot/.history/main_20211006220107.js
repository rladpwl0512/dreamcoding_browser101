const btn = document.querySelector('.btn');
const clock = document.querySelector('.clock');
let time = 10; //10초

function timer() {
  time--; 
  if(time === 0) {
    console.log('10초 끝!');
    return;
  }
  clock.innerHTML = `<span>00:${time}</span>`;
}
//클릭이 되었을 때 버튼 변경 
btn.addEventListener('click', () => {
  //1. 중지버튼으로 변경 
  btn.innerHTML=`
    <i class="fas fa-square"></i>
    <span class="blind">pause button</span>
  `;
  //2. 타이머 실행
  setInterval(timer, 1000); //1초마다 실행 
  //3. 카운터 실행(클릭 카운터)
}); 