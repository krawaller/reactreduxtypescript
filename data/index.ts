import { bindActionCreators } from 'redux';

import { actions as nakedActions } from './actions';
import {store} from './store';

export { Thunk } from './helpers';

export * from './store';
export const actions = nakedActions;
export * from './types';

export const boundActions = bindActionCreators(nakedActions, store.dispatch);
