// imports

export default class Monster {
  constructor(playerLevel, maxLevelGap = 0) {
    this.monster = monsterData[Math.floor(Math.random() * monsterData.length)];
    this.monsterLevel = playerLevel + Math.floor(Math.random() * (maxLevelGap * 2) - maxLevelGap); //will + or - by the maxLevelGap at random
    this.name = this.monster.name;
    this.health = this.monster.baseHealth + this.monsterLevel;
    this.damage = this.monster.baseDamage + this.monsterLevel;
  }
  birthMonster() {
    // modifies monster object based on monsterLevel
    this.damage = this.monster.baseDamage + this.monsterLevel * 2;  // add 2 damage for every level
    this.health = this.monster.baseHealth + this.monsterLevel * 3; // add 3 health for every level
    this.reward = Math.floor(Math.random() * 6 * this.monsterLevel * 3); //reward between 0-6, but adds 3 for every monster level
  }
  getHealth() {
    return this.health;
  }
  takeDamage(damage) {
    this.health -= damage;
    return this.health;
  }
}

// name, baseDamage, baseHealth
const monsterData = [
  {
    name: 'punisher',
    baseDamage: 2,
    baseHealth: 15,
    reward: 5,
  },
  {
    name: 'snape',
    baseDamage: 1,
    baseHealth: 12,
    reward: 3,
  },
  {
    name: 'algore',
    baseDamage: 3,
    baseHealth: 12,
    reward: 5,
  },
  {
    name: 'zombumpkin',
    baseDamage: 4,
    baseHealth: 20,
    reward: 8,
  },
  {
    name: 'ratresse',
    baseDamage: 2,
    baseHealth: 7,
    reward: 3,
  }
];