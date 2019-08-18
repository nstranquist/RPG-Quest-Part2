import { TAKE_DAMAGE, GET_REWARD, LOSE_LIFE } from './actionTypes'

let nextSomething = 0;
export const takeDamage = (who, damage) => ({
  type: TAKE_DAMAGE,
  payload: {

  }
});

export const getReward = reward => ({
  // reward comprised of xp, gold, and (sometimes) an item
  type: GET_REWARD,
  payload: {}
});

export const loseLife = () => ({
  type: LOSE_LIFE,
  payload: {}
})