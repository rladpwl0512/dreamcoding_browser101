'use strict';

export default class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.gameBtn = document.querySelector('.game_button');
    this.gameTimer = document.querySelector('.game_timer');
    this.gameScore = document.querySelector('.game_score');
    

    this.gameField = new Field(carrotCount, bugCount);
    this.gameField.setClickListener(onItemClick);
    
    this.started = false; //게임의 상태(게임 시작됐는지 안됐는지)
    this.score = 0; //점수
    this.timer = undefined; //시간 얼마나 남았는지 (게임 시작하지 않았으면 undefined), global으로 만들어줘야함 
  }
}