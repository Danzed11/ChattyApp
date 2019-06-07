import React, { Component } from 'react';

export default class Chatbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.name
    }
  }
  
  componentDidMount() {
    const chatBar = this;
    const chatbarInput = document.querySelector('.chatbar-message');
    // Event Listener on keypress Enter
    chatbarInput.addEventListener('keypress', (e) => {
      const username = document.querySelector('.chatbar-username').value;
      if (e.keyCode === 13 && e.target.value !== '') {
        // Sets properties for new message
        this.props.onNewMessage({
          username: (username.length === 0) ? 'Anonymous': username,
          content: e.target.value
        });
        e.target.value ="";
      };
    });

    const chatbarUsername = document.querySelector('.chatbar-username');
      chatbarUsername.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        console.log('this name chatbar:', this.state.user)
        let oldUsername = this.props.name ? this.props.name : 'Anonymous';
       let notification = oldUsername + " has changed their username to " + e.target.value
       console.log(this.props, e.target.value);
       let input = {
        username: e.target.value, //(this.state.user === 0) ? 'Anonymous': this.state.user,
        content: notification
      }
        this.props.onNewUsername(input);
      };
    });
  };

  
  render() {
    console.log("Rendering <ChatBar/>");
    return (
    <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.name} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer>
    );
  };
};
