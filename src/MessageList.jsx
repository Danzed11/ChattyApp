import React, { Component } from 'react';

import Message from './Message.jsx';

export default class MessageList extends Component {           //Notification
  render() {
    const messages = this.props.messages.map((message) => {
      return <Message key={message.id} username={message.username} content={message.content} />
    });
    return (
      <div id="messages">
        {messages}  
      </div>
    );
  };
}

// export defaul MessageList;