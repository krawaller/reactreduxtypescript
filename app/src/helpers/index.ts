import React from 'react';
import { Action } from 'redux-actions';
import { Dispatch, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { State, Thunk } from '../../../data';


export type Props<T> = {children?: React.ReactChildren} & T;

export type PFC<T> = React.StatelessComponent<T>;

type ActionUsageMap = {
  [s: string]: (...params: any[]) => Action<any> | Thunk
};

type DispatchMapMaker = (dis: Dispatch<State>) => {
  [s: string]: (...params: any[]) => void
};

export function oldBind( obj: ActionUsageMap ): DispatchMapMaker {
  return bindActionCreators.bind(null, obj);
}

export function bind<M extends ActionCreatorsMapObject>(actionCreator: M): (dispatch: Dispatch<any>) => M {
  return (dispatch: Dispatch<any>): M => bindActionCreators(actionCreator, dispatch);
}

import { connect, MapDispatchToPropsObject, MapStateToPropsParam, ComponentDecorator } from 'react-redux';

type GenericObject = {[key: string]: any};

// tslint:disable-next-line: max-line-length
export const myConnect = <TStateProps, TDispatchProps, TOwnProps>(mapStateToProps: (app: State) => Object, mapDispatchtoProps: MapDispatchToPropsObject) => {
    const mapper = (app: State, own: TOwnProps) => ({
      ...<Object> own,
      ...<Object> mapStateToProps(app),
    }) as TStateProps & TOwnProps;
    return connect(mapper, bind(mapDispatchtoProps));
};

// https://www.silviogutierrez.com/blog/react-redux-and-typescript-typed-connect/


export interface Disp {
  <R>(asyncAction: (dispatch: Disp, getState: () => State) => R): R;
  <R>(asyncAction: (dispatch: Disp) => R): R;
  // (neverAction: (dispatch: Disp, getState: () => GetState) => never): never;
  (action: object): void;
  // (action: Thunk): ; // thunks in this app must return a promise
}

// We use generic inference.
export function typedConnect<OwnProps, StateProps, DispatchProps>(
    // And "capture" the return of mapStateToProps
    mapStateToProps: (state: object, ownProps: OwnProps) => StateProps,
    // As well as the return of mapDispatchToProps.
    // Or in case you use the shorthand literal syntax, capture it as is.
    mapDispatchToProps?: DispatchProps | ((dispatch: Disp, ownProps: OwnProps) => DispatchProps),
) {
    // We combine all generics into the inline component we'll declare.
    // tslint:disable-next-line: max-line-length
    return function componentImplementation(component: React.StatelessComponent<OwnProps & StateProps & DispatchProps>) {
        // Finally, we double assert the real connect to let us do anything we want.
        // And export a component that only takes OwnProps.
        // tslint:disable-next-line: max-line-length
        return connect(mapStateToProps, mapDispatchToProps as any)(component) as any as React.StatelessComponent<OwnProps>;
    };
}
