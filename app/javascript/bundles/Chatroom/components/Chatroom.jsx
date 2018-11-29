import PropTypes from 'prop-types';
import React from 'react';

export default class Chatroom extends React.Component {
  /**
   * @param props - Comes from your rails view.
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { name: this.props.name };
    console.log(this.props)
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
