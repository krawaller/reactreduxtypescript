import { Reducer, Action } from 'redux-actions';
import { ActionCreator } from 'redux';

type builderObject<TState> = {
  handle: <TPayload>(
    creator: ActionCreator<Action<TPayload>>,
    reducer: Reducer<TState, TPayload>) => builderObject<TState>,
  done: () => Reducer<TState, Action<any>>
};

export function buildReducer<TState>(): builderObject<TState> {
  let map: { [action: string]: Reducer<TState, any>; } = {};
  return {
    // tslint:disable-next-line: typedef
    handle(creator, reducer) {
      const type = creator.toString();
      if (map[type]) {
        throw new Error (`Already handling an action with type ${type}`);
      }
      map[type] = reducer;
      return this;
    },
    done() {
      const mapClone = Object.assign({}, map);
      return (state: TState = {} as any, action: Action<any>) => {
        let handler = mapClone[action.type];
        return handler ? handler(state, action) : state;
      };
    }
  };
}


import { ThunkAction } from 'redux-thunk';
import { State } from '../types';

export type Thunk = ThunkAction<void, State, void>;
