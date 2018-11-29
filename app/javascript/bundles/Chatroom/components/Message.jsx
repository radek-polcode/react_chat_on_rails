import React from 'react';

const Message = ({message}) =>
  <div>
    <p className={message.className}>{message.user.name}: {message.body}</p>
  </div>

export default Message