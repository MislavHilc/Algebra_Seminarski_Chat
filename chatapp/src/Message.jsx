import React from "react";

class Message extends React.Component {
  render() {
    const { message, currentMember } = this.props;
    console.log(message);
    const { text, member } = message;

    return (
      <li className={`Messages-message ${member.id === currentMember.id ? 'is-self' : ''}`}>
        <div className="Message-content">
          <div className="username">{member.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

export default Message;
