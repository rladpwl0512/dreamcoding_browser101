//함수단위로 코딩하면서 부족한 것 하나씩 메꿔나가기(꿀팁)
'use strict';
import {GameBuilder, Reason } from './game.js';
import PopUp from './popup.js';
import * as sound from './sound.js'; //sound라는 이름으로 sound.js의 전부를 가져옴

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .withGameDuration(10)
  .withCarrotCount(10)
  .withBugCount(10)
  .build();

game.setGameStopListener(reason => {
  let message;
  switch(reason) {
    case Reason.cancel: 
      message = 'Replay❓';
      sound.playAlert();
      break;
    case Reason.win:
      message = 'YOU WON 🎉';
      sound.playWin();
      break;
    case Reason.lose:
      message = 'YOU LOST 💩';
      sound.playBug();
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});