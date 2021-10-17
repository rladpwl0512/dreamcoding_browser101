//함수단위로 코딩하면서 부족한 것 하나씩 메꿔나가기(꿀팁)
'use strict';
import PouUp from './popup.js'
import Game from './game.js';
import PopUp from './popup.js';

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  startGame();
});

const game = new Game(20, 20, 20);
game.setGameStopListener((reason) => {
  console.log(reason);
});