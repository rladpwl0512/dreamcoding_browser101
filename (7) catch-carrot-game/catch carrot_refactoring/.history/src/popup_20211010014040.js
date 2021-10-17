'use strict';

//PouUp 클래스: only popup 기능 정의 
//export default: 외부에서도 이 클래스를 보고 수정가능 
export default class PopUp {
  constructor() {
    this.popUp = document.querySelector('.pop-up');
    this.popUpText = document.querySelector('.pop-up_message');
    this.popUpRefresh = document.querySelector('.pop-up_refresh');
    this.popUpRefresh.addEventListener('click', () => {
      this.onClick && this.onClick();
      this.hide();
    })
  }
  startGame(onClick) {
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popUpText.innerText = text;
    this.popUp.classList.remove('pop-up-hide'); //class list중에 pop-up_hide 지움
  }
  hide() {
    this.popUp.classList.add('pop-up-hide'); //class list중에 pop-up_hide 지움
  }

}
