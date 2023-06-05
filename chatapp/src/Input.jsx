import React, { Component } from "react";

class Input extends Component {
  state = {
    text: "",
    username: "",
    color: "",
  };

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Unesite Vašu poruku..."
            autoFocus={true}
          />
          <button><i class="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
    );
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ text: "" });
    this.props.onSendMessage({
      text: this.state.text,
      username: this.state.username,
      color: this.state.color,
    });
  }  
}

export default Input;
