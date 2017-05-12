import { combineReducers } from 'redux';

import { State } from '../../interfaces';

import { messagingReducer } from './messaging';

export const reducer = combineReducers<State>({
  messaging: messagingReducer
});
