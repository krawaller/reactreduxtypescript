import * as React from 'react';
import { connect } from 'react-redux';

import { actions, State } from '../../../data';

import { UIMessageItem } from './uimessage';

const mapStateToProps = (state: State) => ({
  messages: state.messaging.messages
});

const mapDispatchToProps = (dispatch) => ({
  dismissUIMessage: (num) => dispatch(actions.dismissUIMessage(num))
});

export const UIMessages = connect(mapStateToProps, mapDispatchToProps)(props => {
  const messages = props.messages.map( msg =>
    <UIMessageItem message={msg} delete={e => props.dismissUIMessage(msg.id)} />
  );
  return <ul>{messages}</ul>;
});
