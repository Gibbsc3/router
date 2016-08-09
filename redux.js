var Redux = require('redux');

// The Reducer Function
var countReducer = function(state, action) {
  if (state === undefined) {
    state = {
      count:0
    };
  }
  if (action.type === 'INCREASE') {
    state.count = state.count + action.count
  }
  if (action.type === 'DECREASE') {
    state.count = state.count - action.count
  }

  return state;
}

// Create a store by passing in the reducer
var store = Redux.createStore(countReducer);

// Dispatch our first action to express an intent to change the state
setInterval(function() {
  store.dispatch({
    type: 'INCREASE',
    count:10
  });
  store.dispatch({
    type: 'DECREASE',
    count:3
  });
  store.dispatch({
    type: 'MULTIPLY',
    count:3
  });
  console.log(store.getState());
},1000)

console.log(store.getState());
