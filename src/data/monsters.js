// imports

export default class Monster {
  constructor(playerLevel, maxLevelGap = 0) {
    this.monster = monsterData[Math.floor(Math.random() * monsterData.length)];
    this.monsterLevel = (playerLevel - 1) + Math.floor(Math.random() * (maxLevelGap * 2) - maxLevelGap); //will + or - by the maxLevelGap at random
    this.state = {
      health: 1,
    }
  }
  birthMonster() {
    // modifies monster object based on monsterLevel
    this.damage = this.monster.baseDamage + this.monsterLevel * 2;  // add 2 damage for every level
    this.setState({
      health: this.monster.baseHealth + this.monsterLevel * 3
    });  // add 3 health for every level
    this.reward = Math.floor(Math.random() * 6 * this.monsterLevel * 3); //reward between 0-6, but adds 3 for every monster level
  }
  getHealth() {
    return this.state.health;
  }
  takeDamage(damage) {
    this.setState({
      health: this.state.health - damage
    });
    return this.state.health;
  }
}

const monsterData = [
  {
    name: 'punisher',
    baseDamage: 2,
    baseHealth: 6,
  },
  {
    name: 'snape',
    baseDamage: 1,
    baseHealth: 9,
  },
  {
    name: 'algore',
    baseDamage: 3,
    baseHealth: 5,
  },
  {
    name: 'zombumpkin',
    baseDamage: 4,
    baseHealth: 8
  },
  {
    name: 'ratresse',
    baseDamage: 1,
    baseHealth: 4,
  }
];