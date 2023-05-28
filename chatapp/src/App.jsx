import React, { Component } from "react";
import Messages from "./Messages";

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
        <Messages messages={this.state.messages} currentMember={this.state.member} />
      </div>
    );
  }
}

export default App;
