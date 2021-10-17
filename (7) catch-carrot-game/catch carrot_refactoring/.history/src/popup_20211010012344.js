'use strict';

//PouUp 클래스: only popup 기능 정의 
//export default: 외부에서도 이 클래스를 보고 수정가능 
export default class PopUp {
  constructor() {
    this.popUp = document.querySelector('.pop-up');
    this.popUpText = document.querySelector('.pop-up_message');
    this.popUpRefresh = document.querySelector('.pop-up_refresh');
  }

}
