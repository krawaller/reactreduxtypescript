/*
The action creators are made like this:
createAction<PayloadType, ...PayloadCreatorArgTypes>(
  TYPE_CONSTANT, PayloadCreator
)
*/

import { createAction } from 'redux-actions';
import { UIMessageType } from '../types';
import { ADD_UI_MESSAGE, DISMISS_UI_MESSAGE } from '../constants';

export type addUIMessagePayload = {
  text: string;
  type: UIMessageType;
};
export const addUIMessage = createAction<addUIMessagePayload, string, UIMessageType>(
  ADD_UI_MESSAGE, (text, type) => ({text, type})
);

export type dismissUIMessagePayload = number;
export const dismissUIMessage = createAction<dismissUIMessagePayload, number>(
  DISMISS_UI_MESSAGE, id => id
);


/*
Thunk creators don't need any types, since they aren't caught anywhere.
So they are just a regular function with 0 or more parameters, and that returns a thunk.
Get the typing for the thunk by annotating the creator with the `Thunk` helper type.
This will give you full inferred typing of dispatch and getState in the thunk.
*/

import { Thunk } from '../helpers';

export const addTempUIMessage = (text: string, type: UIMessageType): Thunk => (dispatch, getState) => {
  dispatch(addUIMessage(text, type));
  let id = getState().messaging.lastMessage;
  setTimeout(() => dispatch(dismissUIMessage(id)), 2000);
};
