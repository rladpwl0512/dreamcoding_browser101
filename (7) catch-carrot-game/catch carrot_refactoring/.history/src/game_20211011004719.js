'use strict';

export default class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.gameTimer = document.querySelector('.game_timer');
    this.gameScore = document.querySelector('.game_score');
    this.gameBtn = document.querySelector('.game_button');
    this.gameBtn.addEventListener('click', () => {
      if(started) { 
        this.stop();
      } else {
        this.start();
      }
    });

    this.gameField = new Field(carrotCount, bugCount);
    this.gameField.setClickListener(this.onItemClick);
    
    this.started = false; //게임의 상태(게임 시작됐는지 안됐는지)
    this.score = 0; //점수
    this.timer = undefined; //시간 얼마나 남았는지 (게임 시작하지 않았으면 undefined), global으로 만들어줘야함 
  }

  //바인딩
  onItemClick = (item) => {
    if(!this.started) return; //게임 시작하지 않았다면 return
    //matches를 통해 css 일치하는지 확인 
    if(item === 'carrot') {
      this.score++;
      this.updateScoreBoard();
      if(score === CARROT_COUNT) {
        this.finishGame(true); //이겼으니까 true 넘김(좋지않은코드, 이후 리팩토링)
      }
    }  else if(item === 'bug') {
      this.finishGame(false); //졌으니까 false 넘김 
    }
  }
}