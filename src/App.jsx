import React, {Component} from 'react';

import MessageList from './MessageList.jsx';           //Going to need to render the MessageList (Which will itself handle the Message)
import ChatBar from './ChatBar.jsx';

export default class App extends Component {
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
// Called after component is rendered and attached to DOM, but not yet visible.
// componentDidMount() {
//   console.log("componentDidMount invoked, commencing 3 second delay")
//   setTimeout(() => {
//     this.setState( /* PLACE HOLDER */ )
//   }, 3000);
// };

  render() {
    console.log("Rendering <App/>");
  
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty App</a>
        </nav>
          <MessageList messages={this.state.messages} />
          <ChatBar name={this.state.currentUser.name}/>
      </div>
    );
  }
}
