import React from 'react';

const Message = ({message}) =>
  <div>
    <p>{message.user.name}: {message.body}</p>
  </div>

export default Message