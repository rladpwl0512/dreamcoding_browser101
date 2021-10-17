'use strict';

class PopUp {
  //생성자 
  constructor() {
    this.popUp = document.querySelector('.pop-up');
    this.popUpText = document.querySelector('.pop-up_message');
    this.popUpRefresh = document.querySelector('.pop-up_refresh');
    this.popUpRefresh.addEventListener('click', () => {
      this.onClick && this.onClick(); //멤버변수 onclick이있을 때만, onClick()함수 호출
      hide();
    });
  }

  //사용자가 PopUp에 setClickListenr을 등록하면, onclick호출 
  setClickListener(onClick) {
    this.onClick = onClick; //onClick에 매개변수로 전달받은 onClick 할당 
  }

  hide() {
    this.popUp.classList.add('pop-up-hide');
  }
}
