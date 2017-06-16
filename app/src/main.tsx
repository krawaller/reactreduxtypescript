import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from '../../data';
import UIMessages from './components/uimessages';

ReactDOM.render(
  <Provider store={store}>
    <UIMessages verbose={true} />
  </Provider>,
  document.getElementById('app')
);
