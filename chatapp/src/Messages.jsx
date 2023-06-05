import React from "react";
import Message from "./Message";

class Messages extends React.Component {
  render() {
    const { messages, currentMember } = this.props;

    return (
      <ul className="Messages-list">
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            currentMember={currentMember}
          />
        ))}
      </ul>
    );
  }
}

export default Messages;