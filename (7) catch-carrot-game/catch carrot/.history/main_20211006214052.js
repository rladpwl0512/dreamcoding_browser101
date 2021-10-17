const btn = document.querySelector('.btn');

//클릭이 되었을 때 
btn.addEventListener('click', () => {
  //1. 중지버튼으로 변경 
  btn.innerHTML=`
  <i class="fas fa-play"></i>
  <!-- <i class="fas fa-pause"></i> -->
  <span class="blind">pause button</span>
  `
}); 