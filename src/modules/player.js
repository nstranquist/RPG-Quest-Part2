// (maybe) import {store} later from 'redux'
import { connect } from 'react-redux'
// in store, we want to store health, (?)[gold, lvl, xp]
// health/mana data
const healthData = [
  50, 55, 60, 65, 70, 75
];
const manaData = [
  200, 240, 280, 320, 360
];

export default class Player {
  constructor(name) {
    //lvl 1 data should be changed seldomly, but needs high access
    this.name = name;
    // should I use state here, or just store the data?
    // maybe can use later, for now Ill use as a data store, no state
    // lvl 2 data makes most senes for state, needs more frequent updates
    this.stats = {
      xp: 0,
      gold: 0,
      lvl: 0,
    }
    // HUD bar stats
    this.maxHealth = healthData[this.stats.lvl];
    this.maxMana = manaData[this.lvl];
    this.health = this.maxHealth;
    this.mana = this.maxMana;

    // other battle stats
    this.damage = 3;  // hardcoding for now
    this.inventory = {  // ignoring for now
      items: [],
      weapons: [],
      armor: [],
      pets: []
    }
  }

  takeDamage(damage) {
    this.health -= damage;
    return this.health;
  }

  getHealth() {
    return this.health;
  }
  getMaxHealth() {
    return this.maxHealth;
  }

  startHeal() {
    // player will heal when 'resting' at a given rate (i.e. max health in 30 minutes)
  }

  potionHeal(hp) {
    this.health + hp < this.maxHealth ? this.health += hp : this.health = this.maxHealth;
  }

  addBattleReward(xp, gold, items = []) {
    this.stats.xp += xp;
    this.stats.gold += gold;
    // if items were found
    items.forEach(item => {
      this.inventory.items.push(item);
    });
  }

  // implement later
  levelUp() { }
  purchaseInventory(cost) { }

}