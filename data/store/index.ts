import { createStore, applyMiddleware } from 'redux';

import { reducer } from './reducers';

// A super-simple logger
const logger = store => next => action => {
  console.log('dispatching', action.type, action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

export const store = applyMiddleware(logger)(createStore)(reducer);
