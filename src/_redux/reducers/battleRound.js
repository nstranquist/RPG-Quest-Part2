import { TAKE_DAMAGE, LOSE_LIFE } from '../actionTypes'

const initializeState = {
  //what's this?
  playerHealth: 100,
  monsterHealth: 100,
  winner: false
}

/*export default function (state, action) {
  switch (action.type) {
    case TAKE_DAMAGE: {
      const { damage, who } = action.payload;  //what's the 'payload'?
      return {
        ...state,
        playerHealth: [...state.playerHealth, damage],
      }
    }
  }
}*/