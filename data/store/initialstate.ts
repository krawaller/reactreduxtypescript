import { State } from '../interfaces';

export const initialState: State = {
  messaging: {
    messages: [{type: 'info', text: 'Welcome!', id: 1}],
    nextId: 2
  }
};