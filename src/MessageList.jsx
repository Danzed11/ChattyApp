import React, { Component } from 'react';

import Message from './Message.jsx';

export default class MessageList extends Component {
  render() {
    const messages = this.props.messages.map((message) => {         //messages.map() really comes from the attribute messages that I passed to <MessageList />
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