import ReactOnRails from 'react-on-rails';

import Chatroom from '../bundles/Chatroom/components/Chatroom';

// This is how react_on_rails can see the Chatroom in the browser.
ReactOnRails.register({
  Chatroom,
});
