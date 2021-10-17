'use strict';

export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector('.game_field');
    this.fieldRect = field.getBoundingClientRect(); //필드의 전체적 사이즈, 포지션 알 수 있다(필드 범위 내에서 벌레, 당근 위치해야하기 때문에 필요함) 
    this.field.addEventListener('click', this.onClick());
  }
  init() {
    this.field.innerHTML = ''; //새롭게 리셋되면서 추가
    this.addItem('carrot', CARROT_COUNT, 'img/carrot.png', 80); //carrot.png을 5개
    this.addItem('bug', BUG_COUNT, 'img/bug.png', 50);
  }

  //_으로 작성하면, 외부에서 이게 private한 아이라고 인지하고 외부에서 고치지 x(아직 js에서는 private 지정하는 방법이 통용적으로 쓰이지 않음)
  _addItem(className, count, imgPath, imgSize) {
    const x1 = 0; 
    const y1 = 0;
    const x2 = fieldRect.width - imgSize; //반드시 carrot_size 빼줘야함(노트 참고), 
    const y2 = fieldRect.height - imgSize;
    
    for(let i=0; i<count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute'; //game_field기준
      const x = randomNumber(x1, x2); //x1~x2까지 아무숫자 받아옴
      const y = randomNumber(y1, y2); 
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      field.appendChild(item);
    }
  }

  onClick(event) {

  }
}