So, we tried this

MessagingState doesn't propagate, annoying! :/

https://github.com/acdlite/redux-actions/issues/84

```typescript
export const messagingReducerOld = handleActions<MessagingState>(
  {
    [addUIMessage.toString()]: (state, action: Action<addUIMessage>): MessagingState => ({
      nextId: state.nextId + 1,
      messages: [{...action.payload, id: state.nextId}].concat(state.messages)
    }),
    [dismissUIMessage.toString()]: (state, action: Action<dismissUIMessage>): MessagingState => ({
      ...state,
      messages: state.messages.filter(m => m.id !== action.payload)
    })
  },
  initialState.messaging
);
```
