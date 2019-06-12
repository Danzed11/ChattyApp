import React, { Component } from 'react';

import Message from './Message.jsx';
import Notification from './Notification.jsx';

export default class MessageList extends Component {
  render() {
    const messages = this.props.messages.map((message) => {         //messages.map() really comes from the attribute messages that I passed to <MessageList />
      return message.username ? (
        <Message 
          key={message.id} 
          type={message.type}
          username={message.username} 
          content={message.content} />
        )
        : (
          <Notification
            key={message.id}
            content={message.content}
          />
        )
    });
    return (
      <div id="messages">
        {messages}
      </div>
    );
  };
}

// export defaul MessageList;