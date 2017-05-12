import { combineReducers } from 'redux';

import { State } from '../../types';

import { messagingReducer } from './messaging';

export const reducer = combineReducers<State>({
  messaging: messagingReducer
});
