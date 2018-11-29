import PropTypes from 'prop-types';
import React from 'react';
import MessagesList from './MessagesList';

export default class Chatroom extends React.Component {
  /**
   * @param props - Comes from your rails view.
   */
  constructor(props, _railsContext) {
    super(props);
    let chatroom = JSON.parse(this.props.chatroom)
    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { 
      messages: chatroom.messages 
    };
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <MessagesList messages={this.state.messages} />
      </div>
    );
  }
}
