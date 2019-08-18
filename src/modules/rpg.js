// imports
import Battle from './battle'

export default class RPG {
  constructor() {
    this.questData = questData;
    this.questProgessIndex = 0;  // questData[questProgressIndex] will be on the message board
    this.playerLifetimeStats = {  //lifetime battles, kills, deaths, etc
      battles: 0,
      kills: 0,
      deaths: 0,
    };
    this.monsterBook = [];  //can see all the monsters you've encountered (not implemented)
    this.gameManual = []; //a walkthrough/reference for new players (optional)
  }

  newBattle(player) {
    const newBattle = new Battle(player);
    newBattle.startBattle();
  }
}

const questData = [];
