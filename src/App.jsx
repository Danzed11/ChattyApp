import React, {Component} from 'react';

import MessageList from './MessageList.jsx';           //Going to need to render the MessageList (Which will itself handle the Message)
import ChatBar from './ChatBar.jsx';

export default class App extends Component {

  addMessage(newMessage) {
    newMessage.id = this.state.messages.length +1;
    this.setState({messages: this.state.messages.concat(newMessage)});
} 
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Kramer"},
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
    console.log("componentDidMount invoked, 3 second delay incoming");
    const newMessage = {id: 3, username: 'Michelle', content: 'Wassa wassa wassa WASSSSUUUPPP BITCONNNEEEEEEEEECT'};
    const messages = this.state.messages.concat(newMessage);
    //Update the state of the app component.
    //Calling setState() will re-render in App.jsx and all child components
    setTimeout(() => {
      this.setState( {messages: messages} )
    }, 3000);

  };

  render() {
    console.log("Rendering <App/>");
  
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty App</a>
        </nav>
          <MessageList messages={this.state.messages} />
          <ChatBar name={this.state.currentUser.name}
          onNewMessage={this.addMessage.bind(this)} />
      </div>
    );
  }
}
