const btn = document.querySelector('.btn');
const timer = document.querySelector('.timer');
const time = 10; //10초

function timer() {
  time--; 
  if(count === 0) {
    console.log('10초 끝!');
  }
  timer.innerHTML = `00:${count}`;
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