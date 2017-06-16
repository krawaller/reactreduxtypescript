import * as React from 'react';
import { UIMessage } from '../../../data';

import { Props, PFC } from '../helpers';

interface UIMessageProps {
  message: UIMessage;
  delete: () => void;
}

const UIMessageItem: PFC<UIMessageProps> =
  (props) => (
    <div className={'ui-message ui-message' + props.message.type}>
      {props.message.text} <span onClick={e => props.delete()}>delete</span>
    </div>
  );

export default UIMessageItem;