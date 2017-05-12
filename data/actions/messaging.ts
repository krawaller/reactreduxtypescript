import { createAction } from 'redux-actions';

import { UIMessageType, UIMessage } from '../types';
import { ADD_UI_MESSAGE, DISMISS_UI_MESSAGE } from '../constants';

export interface addUIMessage {
  text: string;
  type: UIMessageType;
}
export const addUIMessage = createAction<addUIMessage, string, UIMessageType>(
  ADD_UI_MESSAGE, (text, type) => ({text, type})
);

export type dismissUIMessage = number;
export const dismissUIMessage = createAction<dismissUIMessage, number>(
  DISMISS_UI_MESSAGE, id => id
);
