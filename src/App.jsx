import React, {Component} from 'react';

import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
const ws = new WebSocket("ws://0.0.0.0:3001");
// const wss = new WebSocket.Server({port: 3000});
// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);
//   });
//   ws.send("hey there")
// });

export default class App extends Component {

  addMessage = (newMessage) => {
    newMessage.id = this.state.messages.length +1;
    //this.setState({messages: this.state.messages.concat(newMessage)});
     ws.send(JSON.stringify(newMessage));
     //ws.send(`User ${newMessage.username} said ${newMessage.content}`);
     console.log(newMessage);
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
      let messages = this.state.messages.concat(broadcastMessage);
      console.log(this.setState( {messages: messages} ));
    };
  };

  render() {
    console.log("Rendering <App/>");
  
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty App</a>
        </nav>
          <MessageList messages={this.state.messages} />
          <ChatBar 
            name={this.state.currentUser.name}
            onNewMessage={this.addMessage.bind(this)} 
            />
      </div>
    );
  }
}
