import { addUIMessage, dismissUIMessage, addUIMessagePayload, dismissUIMessagePayload } from '../../actions/messaging';
import { MessagingState } from '../../types';

import { buildReducer } from '../../helpers';

export const messagingReducer = buildReducer<MessagingState>()
  .handle(addUIMessage, (state, action) => ({
    lastMessage: state.lastMessage + 1,
    messages: [{...action.payload, id: state.lastMessage + 1}].concat(state.messages)
  }))
  .handle(dismissUIMessage, (state, action) => ({
    ...state,
    messages: state.messages.filter(m => m.id !== action.payload)
  }))
  .done();

/*
import { handleActions, Action } from 'redux-actions';
import { initialState } from '../initialstate';

const messagingReducerOld = handleActions<MessagingState>(
  {
    [addUIMessage.toString()]: (state, action: Action<addUIMessagePayload>): MessagingState => ({
      lastMessage: state.lastMessage + 1,
      messages: [{...action.payload., id: state.lastMessage + 1}].concat(state.messages)
    }),
    [dismissUIMessage.toString()]: (state, action: Action<dismissUIMessagePayload>): MessagingState => ({
      ...state,
      messages: state.messages.filter(m => m.id !== action.payload)
    })
  },
 initialState.messaging
);

*/