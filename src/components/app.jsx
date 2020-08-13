import React from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="https://dwj199mwkel52.cloudfront.net/assets/lewagon-logo-square-fe76916e1b923ade71e253ae6dc031d936e5e8eebac4e26b0fbac650ea6ee360.png" alt=""/>
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
