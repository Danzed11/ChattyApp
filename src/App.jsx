import React, {Component} from 'react';

import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
const ws = new WebSocket("ws://0.0.0.0:3001");


export default class App extends Component {

  // app = (input) => {
  //   setState({currentUser: input})
  // }
  
  addMessage = (newMessage) => {
    newMessage.id = this.state.messages.length +1;
    newMessage.classification = "chat"
     ws.send(JSON.stringify(newMessage));
    console.log(newMessage);
} 

  addCreateNotification = (notification) => {
  const newMessage = {
    type: 'notification',
    content: notification
  };
  this.ws.send(JSON.stringify(newMessage));
}

  addUsername = (newUsername) => {
    newUsername.classification = "system";
    this.setState({currentUser : {name : newUsername.username}});
    console.log(this.state, "AAAAHAHAHAHAHAH",newUsername);

    ws.send(JSON.stringify(newUsername));
  }
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: ""},
      messages: [
        {
          id: 1,
          username: "Kramer",
          content: "Myanmar? What is that the discount pharmacy?"
        },
        {
          id: 2,
          username: "Anonymous",
          content: "You doofus"
        }
      ]
    };
  };
  
  componentDidMount() {

    ws.onopen = (ws) => {
      console.log("Succesfully connected Chatty to WebSocket Server");
    };
    ws.onmessage = (broadcast) => {
      let broadcastMessage = JSON.parse(broadcast.data);
      // console.log(broadcast.Message);
      let messages = this.state.messages.concat(broadcastMessage);
      console.log(this.setState( {messages: messages} ));
    };
  };

  render() {
    console.log("Rendering <App/>",this.state);
  
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty App</a>
        </nav>
          <MessageList messages={this.state.messages} />
          <ChatBar 
            name={this.state.currentUser.name}
            onNewMessage={this.addMessage.bind(this)}
            onNewUsername={this.addUsername.bind(this)}
            addCreateNotification={this.addCreateNotification} 
            />
      </div>
    );
  }
}
