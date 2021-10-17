const field = document.querySelector('.game_field');
const fieldRect = field.getBoundingClientRect(); //필드의 전체적 사이즈, 포지션 알 수 있다 

function initGame() {
  //벌레와 당근을 생성한 뒤 field에 추가 
  console.log(fieldRect);
}

initGame();