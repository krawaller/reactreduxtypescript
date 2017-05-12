import * as React from 'react';
import { UIMessage } from '../../../data';

import { Props } from '../types';

export interface UIMessageProps {
  message: UIMessage;
  delete: Function;
}

export const UIMessageItem =
  (props: Props<UIMessageProps>) => (
    <div className={'ui-message ui-message' + props.message.type}>
      {props.message.text} <span onClick={e => props.delete()}>delete</span>
    </div>
  );
