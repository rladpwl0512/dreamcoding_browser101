const field = document.querySelector('.game_field');
const fieldRect = field.getBoundingClientRect(); //필드의 전체적 사이즈, 포지션 알 수 있다(필드 범위 내에서 벌레, 당근 위치해야하기 때문에 필요함) 

function initGame() {
  //벌레와 당근을 생성한 뒤 field에 추가 
  console.log(fieldRect);
  addItem('carrot', 5, 'img/carrot.png'); //carrot.png을 5개
  addItem('bug', 5, 'img/bug.png');
}
function addItem(className, count, imgPath) {

}

initGame();