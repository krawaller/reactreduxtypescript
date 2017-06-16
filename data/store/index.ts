import { createStore, applyMiddleware, Store, Middleware, MiddlewareAPI } from 'redux';
import { initialState } from './initialstate';
import { reducer } from './reducers';
import thunk from 'redux-thunk';
import { State } from '../types';

// A super-simple logger
const logger: Middleware = (api: MiddlewareAPI<State>) => next => action => {
  console.log('dispatching', action.type, action);
  let result = next(action);
  console.log('next state', api.getState());
  return result;
};

export const store: Store<State> = applyMiddleware(thunk, logger)(createStore)(reducer, initialState);
