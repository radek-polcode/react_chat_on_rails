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
      chatroomId: chatroom.id,
      messages: chatroom.messages 
    };
    console.log(this.props)
  }

  updateMessages(message) {
    console.log(message)
  }

  componentDidMount() {
    App.chatroom = App.cable.subscriptions.create({
      channel: 'ChatroomChannel',
      id: this.state.chatroomId
    }, {
      received: function(data) {
        this.updateMessages(data.message)
      }.bind(this)
    });
    
    return;
  }

  render() {
    return (
      <div>
        <MessagesList messages={this.state.messages} />
      </div>
    );
  }
}
