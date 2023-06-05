import React, { Component } from "react";
import Messages from "./Messages";
import Input from "./Input";

class App extends Component {
  state = {
    messages: [],
    member: {
      username: "",
    },
  };

  handleUsernameChange = (event) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      member: {
        ...prevState.member,
        username: value,
      },
    }));
  };

  onSendMessage = (message) => {
    const { text } = message;

    const updatedMessage = {
      text,
      member: {
        username: this.state.member.username,
      },
    };

    const messages = [...this.state.messages, updatedMessage];
    this.setState({ messages });
  };

  componentDidMount() {
    this.drone = new window.Scaledrone("NmKR0z2Yk7epHuQY", {
      data: this.state.member,
    });

    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
      const room = this.drone.subscribe("observable-room");
      room.on("data", (data, member) => {
        const messages = this.state.messages;
        messages.push({ member, text: data });
        this.setState({ messages });
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Chat</h1>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={this.state.member.username}
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default App;
