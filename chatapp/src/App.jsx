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
    messages: [],
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
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  constructor() {
    super();
    this.drone = new window.Scaledrone("NmKR0z2Yk7epHuQY", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
      const room = this.drone.subscribe("observable-room");
      room.on('data', (data, member) => {
        const messages = this.state.messages;
        messages.push({member, text: data});
        this.setState({messages});
      });
    });
  }
}

export default App;
