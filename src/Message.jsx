import React, { Component } from 'react';



export default class Message extends Component {           //Notification
  render() {
    // const message = this.props.messages(message => {})        //Not sure about this line yet
    return (
      <div className="message">
        <span className="message-username">{this.props.username}</span>
        <span className="message-content">{this.props.content}</span>
      </div>
    );
  };
}

