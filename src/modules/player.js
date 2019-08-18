// (maybe) import {store} later from 'redux'
import { connect } from 'react-redux'
// in store, we want to store health, (?)[gold, lvl, xp]


export default class Player {
  constructor(name) {
    //lvl 1 data should be changed seldomly, but needs high access
    this.name = name;
    this.maxHealth = healthData[this.lvl];
    this.maxMana = manaData[this.lvl];
    // should I use state here, or just store the data?
    // maybe can use later, for now Ill use as a data store, no state
    // lvl 2 data makes most senes for state, needs more frequent updates
    this.xp = 0;
    this.gold = 0;
    this.lvl = 0;
    this.damage = 3;  // hardcoding for now
    this.inventory = {  // ignoring for now
      items: [],
      weapons: [],
      armor: [],
      pets: []
    }
    this.state = {
      health: this.maxHealth,
      mana: this.maxMana
    }
  }

  takeDamage(damage) {
    this.setState({
      health: this.state.health - damage,
    })
    return this.state.health;
  }

  getHealth() {
    return this.state.health;
  }

  startHeal() {
    // player will heal when 'resting' at a given rate (i.e. max health in 30 minutes)
  }

  potionHeal(hp) {
    this.setState({
      health: this.state.health + hp < this.maxHealth ? this.state.health + hp : this.maxHealth
    })
  }

  addBattleReward(xp, gold, items = []) {
    this.xp += xp;
    this.gold += gold;
    items.forEach(item => {
      this.inventory.items.push(item);
    });
  }

  // implement later
  levelUp() { }
  purchaseInventory(cost) { }

}

const healthData = [
  100, 120, 140, 160, 180, 200
];
const manaData = [
  200, 240, 280, 320, 360
];