//필드에 아이템 배치
//아이템 클릭됨
'use strict';
import * as sound from './sound.js'; //sound라는 이름으로 sound.js의 전부를 가져옴


export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector('.game_field');
    this.fieldRect = this.field.getBoundingClientRect(); 
    //this.onClick = this.onClick.bind(this);
    this.field.addEventListener('click', this.onClick); 
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }
  
  onClick = (event) => {
    const target = event.target;
    //matches를 통해 css 일치하는지 확인 
    if(target.matches('.carrot')) {
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick('carrot');
    }  else if(target.matches('.bug')) {
      this.onItemClick && this.onItemClick('bug');
    }
  }

  init() {
    this.field.innerHTML = ''; //새롭게 리셋되면서 추가
    //벌레와 당근을 생성한 뒤 field에 추가 
    this._addItem('carrot', this.carrotCount, 'img/carrot.png', 80); //carrot.png을 5개
    this._addItem('bug', this.bugCount, 'img/bug.png', 50); 
  }

  _addItem(className, count, imgPath, imgSize) {
    const x1 = 0; 
    const y1 = 0;
    const x2 = this.fieldRect.width - imgSize; //반드시 carrot_size 빼줘야함(노트 참고), 
    const y2 = this.fieldRect.height - imgSize;
    
    for(let i=0; i<count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute'; //game_field기준
      const x = randomNumber(x1, x2); //x1~x2까지 아무숫자 받아옴
      const y = randomNumber(y1, y2); 
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }
}


function randomNumber(min, max) {
  return Math.random() * (max - min) + min; //min~max인데 max포함하지 않은 숫자
}