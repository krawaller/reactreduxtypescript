import { handleActions } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

import { Action } from '@types/redux-actions';

import { initialState } from '../initialstate';
import { addUIMessage, dismissUIMessage } from '../../actions/messaging';
import { ADD_UI_MESSAGE, DISMISS_UI_MESSAGE } from '../../constants';
import { MessagingState } from '../../types';

export const messagingReducer = handleActions<MessagingState>(
  {
    [ADD_UI_MESSAGE]: (state, action: Action<addUIMessage>): MessagingState => ({
      nextId: state.nextId + 1,
      messages: [{...action.payload, id: state.nextId}].concat(state.messages)
    }),
    [DISMISS_UI_MESSAGE]: (state, action: Action<dismissUIMessage>): MessagingState => ({
      ...state,
      messages: state.messages.filter(m => m.id !== action.payload)
    })
  },
  initialState.messaging
);
