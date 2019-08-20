// imports
import Monster from '../data/monsters';

export default class Battle {
  constructor(player) {
    this.player = player; // later change to only include the relevant parts
    this.monster = new Monster(this.player.stats.lvl);
    this.playerFirst = Math.floor(Math.random() * 2) === 0 ? true : false; //player first is true or false, depends on the luck
    this.whoseTurn = this.playerFirst * 1; // experiment with pointer related errors
    this.state = {
      winner: false,
    }
  }

  startBattle() {
    console.log('startBattle()!!!');
    while (!this.winner) {
      if (this.playerFirst) {
        // player moves first
        this.startRound(this.player, this.monster)
        if (!this.state.winner)
          this.startRound(this.monster, this.player)
      } else {
        // monster moves first
        this.startRound(this.monster, this.player)
        if (!this.state.winner)
          this.startRound(this.player, this.monster)
      }
    }
    console.log('battle ended');
  }
  //determine who goes first (luck)  <-- pass as parameters to gameLoop() function
  startRound(attacker, defender) {
    console.log('startRound()!!!');
    console.log(attacker.damage)
    this.winner = defender.takeDamage(attacker.damage) > 0 ? false : true;
    this.whoseTurn === 0 ? this.whoseTurn = 1 : this.whoseTurn = 0;
  }

  //gameLoop will keep alternating turns until battle over [use 'checkVictor()']

  //sendAttack() and doDamage() functions

  //changeWeapon(), useItem(), summonPet() functions  <-- these will not change the turn

  //checkVictor(), endGame() functions  <-- use at the end of the player's turn

}