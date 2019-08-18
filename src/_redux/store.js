import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

export default store;

// redux notes:
/*
1) Redux is 1 Global State, the only state, and it's the single source of truth
2) emitting an action is the only way to change the state
  - action is an object that describes what should change
  - Action Creators are functions that are dispatched to emit a change
    - they just return an action
3) A Reducer is thefunction that actually changes the state appropriate to that action
  - or just returns existing state if no action is applicable to that reducer
4) Reducers are 'pure functions', they shouldn't mutate state, only return a modified copy
5) reducers are combined to the 'root reducer' to create the properties of the state
6) 
*/