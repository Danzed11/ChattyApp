import React, {Component} from 'react';

import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
const ws = new WebSocket("ws://0.0.0.0:3001");


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 
        {name: ""},
      usercount: 0,
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
  
  //Any new message
  addMessage = (newMessage) => {
    newMessage.id = this.state.messages.length +1;
    newMessage.type = "message"
     ws.send(JSON.stringify(newMessage));
    console.log(newMessage);
} 

  addCreateNotification = (notification) => {
  const newMessage = {
    type: 'incomingNotification',
    content: notification
  };
    this.ws.send(JSON.stringify(newMessage));
}

  addUsername = (newUsername) => {
    newUsername.classification = "system";
    this.setState({currentUser : {name : newUsername.username}});
    ws.send(JSON.stringify(newUsername));
  }
  
  componentDidMount() {

    ws.onopen = (ws) => {
      console.log("Succesfully connected Chatty to WebSocket Server");
    };
    
    //User count feature
    ws.onmessage = (broadcast) => {
      let broadcastMessage = JSON.parse(broadcast.data);
      if (broadcastMessage.type === 'usercount') 
        {this.setState({usercount: broadcastMessage.content}) }
      else {
      // console.log(broadcast.Message);
      let messages = this.state.messages.concat(broadcastMessage);
      this.setState( {messages: messages} );
      };
    };
  };

  //HTML to be rendered
  render() {
    console.log("Rendering <App/>",this.state);
  
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">ChattyApp</a>
        <div className="usercountTicker">{this.state.usercount} Users Online</div>
        </nav>
          <MessageList messages={this.state.messages} />
          <ChatBar 
            name={this.state.currentUser.name}
            onNewMessage={this.addMessage.bind(this)}
            onNewUsername={this.addUsername.bind(this)}
            currentUser={this.state.currentUser.name}
            addCreateNotification={this.addCreateNotification} 
            />
      </div>
    );
  }
}
