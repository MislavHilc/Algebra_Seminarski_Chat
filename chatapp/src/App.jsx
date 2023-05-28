import React, { Component } from "react";
import Messages from "./Messages";
import Input from "./Input"

function randomName() {
  const names = ["Ana", "Ivan", "Mia", "Luka", "Ema", "Marko", "Lana", "Petar", "Lara", "Filip", "Sara", "Nikola", "Elena", "Matija", "Lorena", "Stjepan", "Eva", "Leon", "Lea", "Ante", "Marta", "Marin", "Maja", "Ivano", "Dora", "Josip", "Tina", "Toni", "Ivana", "Leo", "Marta", "Patrik", "Nina", "Lovro", "Ela", "Ivo", "Barbara", "David", "Lena", "Domagoj", "Laura", "Borna", "Klara", "Dino", "Magdalena", "Robert", "Lucija", "Filip", "Ana", "Tin", "Andrea", "Dominik"];
  return names[Math.floor(Math.random() * names.length)];
};

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
};

class App extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor()
    }
  };

  render() {
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