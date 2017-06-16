import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import { actions, State } from '../../../data';
import { bind, oldBind, Props, PFC, myConnect, typedConnect } from '../helpers';
import UIMessageItem from './uimessage';

/*
const mapDispatchToProps = (dispatch) => {
  console.log('Setting up dispatch');
  return {
    dismissUIMessage: (num) => dispatch(actions.dismissUIMessage(num)),
    tempUIMessage: () => dispatch(actions.addTempUIMessage('Riiiing! (will soon disappear)', 'info'))
  };
};
*/

/*
const mapDispatchToProps = oldBind({
  dismissUIMessage: (num) => actions.dismissUIMessage(num),
  tempUIMessage: () => actions.addTempUIMessage('Riiiing! (will soon disappear)', 'info')
});
*/

/*
const mapDispatchToProps = dispatch => ({
  dismissUIMessage: actions.dismissUIMessage,
  tempUIMessage: actions.addTempUIMessage
});
*/

/*
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    dismissUIMessage: actions.dismissUIMessage,
    tempUIMessage: () => actions.addTempUIMessage('Riiiing! (will soon disappear)', 'info')
  },
  dispatch
);
*/

/*
const mapDispatchToProps = {
  dismissUIMessage: actions.dismissUIMessage,
  tempUIMessage: () => actions.addTempUIMessage('Riiiing! (will soon disappear)', 'info')
};
*/

const actionObj = {
  dismissUIMessage: actions.dismissUIMessage,
  tempUIMessage: () => actions.addTempUIMessage('Riiiing! (will soon disappear)', 'info')
};

type UIMessagesProps = {
  verbose: Boolean;
};


const mapStateToProps = (state: State, own: UIMessagesProps) => ({
  ...own,
  messages: state.messaging.messages
});

const simpleMapper = (state: State) => ({
  messages: state.messaging.messages
});

// const mapStateToProps = makeStateMapper(state => ({messages: state.messaging}))

const mapDispatchToProps = bind(actionObj);

// export default myConnect(simpleMapper, actionObj)(props => {
export default connect(mapStateToProps, mapDispatchToProps)(props => {
// export default typedConnect(mapStateToProps, actionObj)(props => {
  const messages = props.verbose ? props.messages : props.messages.filter(m => m.type !== 'info');
  const renderedMessages = messages.map( msg =>
    <UIMessageItem key={msg.id} message={msg} delete={() => props.dismissUIMessage(msg.id)} />
  );
  return (
    <div>
      <button onClick={e => props.tempUIMessage()}>Ring the bell</button>
      <ul>{renderedMessages}</ul>
    </div>
  );
});
