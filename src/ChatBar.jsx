import React, { Component } from 'react';

export default class Chatbar extends Component {
  clearField() {
    const clear = document.querySelector('.chatbar-message');
    return clear.value = "";
  }
  
  render() {
    console.log("Rendering <ChatBar/>");
    return (
    <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.name} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer>
    );
  };
  
  componentDidMount() {
    const chatbarInput = document.querySelector('.chatbar-message');
    // Event Listener for when ENTER/RETURN key is pressed in chatbar
    chatbarInput.addEventListener('keypress', (e) => {
      const username = document.querySelector('.chatbar-username').value;
      // Ensures message can't be blank
      if (e.keyCode === 13 && e.target.value !== '') {
        // Sets properties for new message
        this.props.onNewMessage({
          username: (username.length === 0) ? 'Anonymous': username,
          content: e.target.value
        });
        e.target.value ="";
      };
    });
  };
};
function enter () {
  const newInput = {id: this.state.messages[0] +1, username: this.props.name, content: this.props.username};
}