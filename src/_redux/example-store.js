import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'

// set the initial redux state object
const initialState = {
  counter: 0
}

const reducer = (state = initialState, action => {
  // reducer changes state depending on action.type we are dispatching
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
});

const store = createStore(reducer);

const rootRender = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}

store.subscribe(() => {
  rootRender();
})

rootRender();

// subscribe to store to watch our changes
store.subscribe(() => {
  console.log('Store changed: ', store.getState().counter)
})

store.dispatch({
  type: 'INCREASE'
});
store.dispatch({
  type: 'INCREASE'
});
store.dispatch({
  type: 'DECREASE'
});

export default store;

class App extends Component {

  increase = () => {
    store.dispatch({
      type: 'INCREASE'
    })
  }

  decrease = () => {
    store.dispatch({
      type: 'DECREASE'
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.increase()}>
          +
        </button>

        <button onClick={() => this.decrease()}>
          -
        </button>
        <h1>{`Result: ${store.getState().counter}`}</h1>
      </div>
    )
  }
}

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