import React, { Component } from "react";
import Messages from "./Messages";
import Input from "./Input";
import UserForm from "./UserForm";

class App extends Component {
  state = {
    messages: [],
    member: null,
  };

  render() {
    if (this.state.member === null) {
      return <UserForm onUserSubmit={this.onUserSubmit} />;
    } else {
      return (
        <div className="App">
          <div className="App-header">
            <h1>Chat</h1>
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
  }

  onUserSubmit = (member) => {
    this.setState({ member });
  
    this.drone = new window.Scaledrone("NmKR0z2Yk7epHuQY", {
      clientData: this.state.member
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
        console.log('Received data:', data);
        if (data.member === undefined) {
          console.log('data.member is undefined for this message:', data);
        } else {
          const messages = this.state.messages;
          messages.push({ member: data.member, text: data.text });
          this.setState({ messages });
        }
      });                      
    });
  }
  
  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message: {
        text: message,
        member: this.state.member,
      },
    });
  };  
}

export default App;
