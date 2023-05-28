import React, { Component } from "react";
import Messages from "./Messages";
import Input from "./Input"

function randomName() {
  // Random name generation logic
}

function randomColor() {
  // Random color generation logic
}

class App extends Component {
  state = {
    messages: [
      {
        text: "This is a test message!",
        member: {
          clientData: {
            color: "blue",
            username: "bluemoon"
          }
        }
      }
    ],
    member: {
      clientData: {
        username: randomName(),
        color: randomColor()
      }
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>My Chat App</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }

  onSendMessage = (message) => {
    const messages = this.state.messages
    messages.push({
      text: message,
      member: this.state.member
    })
    this.setState({messages: messages})
  }
}

export default App;
