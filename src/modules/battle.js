// imports
import Monster from '../data/monsters';

export default class Battle {
  constructor(player) {
    this.player = player;
    this.monster = new Monster(player.lvl);
    this.state = {
    }
    this.whoseTurn = Math.floor(Math.random() * 2) === 0 ? this.state.player : this.state.monster; //
    this.winner = false;
  }

  startBattle() {
    while (!this.winner) {
      if (this.whoseTurn === 0) {
        // player moves first
        this.startRound(this.player, this.monster)
        if (!this.winner)
          this.startRound(this.monster, this.player)
      } else {
        // monster moves first
        this.startRound(this.monster, this.player)
        if (!this.winner)
          this.startRound(this.player, this.monster)
      }
    }
    console.log('battle ended');
  }
  //determine who goes first (luck)  <-- pass as parameters to gameLoop() function
  startRound(attacker, defender) {
    console.log(attacker.damage)
    this.winner = defender.takeDamage(attacker.damage) > 0 ? false : true;
    this.whoseTurn === 0 ? this.whoseTurn = 1 : this.whoseTurn = 0;
  }

  //gameLoop will keep alternating turns until battle over [use 'checkVictor()']

  //sendAttack() and doDamage() functions

  //changeWeapon(), useItem(), summonPet() functions  <-- these will not change the turn

  //checkVictor(), endGame() functions  <-- use at the end of the player's turn

}