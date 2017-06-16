import { State } from '../types';

export const initialState: State = {
  messaging: {
    messages: [{type: 'info', text: 'Welcome!', id: 1}],
    lastMessage: 1
  }
};