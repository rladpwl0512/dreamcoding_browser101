'use strict';
import Field from './field.js';

//타입 보장
export const Reason = Object.freeze({
  win: 'win',
  lose: 'lose',
  cancel: 'cancel'
});
//Builder Pattern
//Builder Pattern을 활용해서 game을 만들 수 있음(직접적으로 game 못만듦)
export class GameBuilder {
  withGameDuration(duration) {
    this.gameDuration = duration;
    return this;
  }
  withCarrotCount(num) {
    this.carrotCount = num;
    return this;
  }
  withBugCount(num) {
    this.bugCount = num;
    return this;
  }
  build() {
    return new Game(
      this.gameDuration,
      this.carrotCount,
      this.bugCount
    );
  }
}
class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.gameTimer = document.querySelector('.game_timer');
    this.gameScore = document.querySelector('.game_score');
    this.gameBtn = document.querySelector('.game_button');
    this.gameBtn.addEventListener('click', () => {
      if(this.started) { 
        this.stop(Reason.cancel); //Game.stop()과 같음(Game.stopGame()은 효율적이지 않은 이름)
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
  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
  }
  //this.start()
  start() {
    this.started = true;
    this.initGame();
    this.showStopButton(); //stop button 보여짐
    this.showTimerAndScore();
    this.startGameTimer();
    sound.playBackground();
  }
  //this.stop()
  stop(reason) {
    this.started = false;
    this.stopGameTimer();
    this.hideGameButton();
    sound.stopBackground();
    this.onGameStop && this.onGameStop(reason); //게임이 멈춘 이유 설명(cancel)
  }

  //바인딩
  onItemClick = (item) => {
    if(!this.started) return; //게임 시작하지 않았다면 return
    //matches를 통해 css 일치하는지 확인 
    if(item === 'carrot') {
      this.score++;
      this.updateScoreBoard();
      if(this.score === this.carrotCount) {
        this.stop(Reason.win); //이겼으니까 true 넘김(좋지않은코드, 이후 리팩토링)
      }
    }  else if(item === 'bug') {
      this.stop(Reason.lose); //졌으니까 false 넘김 
    }
  };

  showStopButton() {
    const icon = this.gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    this.gameBtn.style.visibility = 'visible';
  }
  
  hideGameButton() {
    this.gameBtn.style.visibility = 'hidden';
  }
  
  showTimerAndScore() {
    this.gameTimer.style.visibility = 'visible';
    this.gameScore.style.visibility = 'visible';
  }
  
  startGameTimer() {
    let remainingTimeSec = this.gameDuration; //지정한 초수만큼만 유지
    this.updateTimerText(remainingTimeSec);
    this.timer = setInterval(() => {
      if(remainingTimeSec <= 0) {
        clearInterval(this.timer);
        this.finish(this.carrotCount === this.score? Reason.win : Reason.lose); //지정된 시간안에 당근 먹으면 won, 아니라면 lost
        return; 
      }
      this.updateTimerText(--remainingTimeSec);
    }, 1000);
  }
  stopGameTimer() {
    clearInterval(this.timer);
  }
  
  updateTimerText(time) {
    const minutes = Math.floor(time / 60); 
    const seconds = time % 60;
    this.gameTimer.innerText = `${minutes}:${seconds}`;
  }
  
  initGame() {
    this.score = 0;
    this.gameScore.innerText = this.carrotCount;
    this.gameField.init();
  }
  
  
  updateScoreBoard() {
    this.gameScore.innerText = this.carrotCount - this.score; //남은 수를 출력
  }
}