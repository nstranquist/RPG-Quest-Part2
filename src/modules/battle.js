// imports
import Monster from '../data/monsters';

export default class Battle {
  constructor(player) {
    // get player
    this.player = player;
    // get monster
    this.monster = new Monster(this.player.stats.lvl);
    this.monster.birthMonster();
    // game logic
    this.winner = false;
    this.whoWon = '';
  }

  startBattle() {
    this.printStats();
  }

  checkGameOver() {
    if (this.monster.health <= 0 || this.player.health <= 0)
      return true;
    return false;
  }

  getReward() {
    return this.monster.reward;
  }

  startRound() {
    //this.monster.takeDamage(this.player.damage) > 0 ? this.logRound(this.player, this.monster) : this.endGame(this.player.name);
    this.monster.takeDamage(this.player.damage);
    this.logRound(this.player, this.monster);
    return this.checkGameOver();
    //this.startMonsterRound(); // add dealy eventually with UI
  }
  startMonsterRound() {
    //this.player.takeDamage(this.monster.damage) > 0 ? this.logRound(this.monster, this.player) : this.endGame(this.monster.name);
    this.player.takeDamage(this.monster.damage);
    this.logRound(this.monster, this.player);
    return this.checkGameOver();
  }

  logRound(attacker, defender) {
    console.log(attacker.name + ' attacks ' + defender.name);
    console.log('deals ' + attacker.damage + ' damage, leaving ' + defender.health + ' health');
  }

  printStats() {
    console.log(this.player.name + ' versus ' + this.monster.name + '!');
    console.log(this.player.health + ' versus ' + this.monster.health + ' health!');
    console.log(this.player.damage + ' versus ' + this.monster.damage + ' damage!');
  }
}

// game logic for a simulated game:

/*while (!this.winner) {
  if (this.playersTurn) {
    // player moves first
    this.startRound(this.player, this.monster)
    if (!this.winner) {
      this.startRound(this.monster, this.player);
      this.whoWon = this.player.name;
    }
  } else {
    // monster moves first
    this.startRound(this.monster, this.player)
    if (!this.winner) {
      this.startRound(this.player, this.monster);
      this.whoWon = this.monster.name;
    }
  }
}
console.log('battle ended. ' + this.whoWon + ' won!');*/

// automated version startRound() function:
/*
startRound(attacker, defender) {
  defender.takeDamage(attacker.damage) > 0 ? this.winner = false : this.winner = true;
  console.log(attacker.name + ' attacks ' + defender.name);
  console.log('deals ' + attacker.damage + ' damage, leaving ' + defender.health + ' health');
  this.playersTurn ? this.playersTurn = false : this.playersTurn = true;
}
*/

// original battle notes:
  //gameLoop will keep alternating turns until battle over [use 'checkVictor()']
  //sendAttack() and doDamage() functions
  //changeWeapon(), useItem(), summonPet() functions  <-- these will not change the turn
  //checkVictor(), endGame() functions  <-- use at the end of the player's turn