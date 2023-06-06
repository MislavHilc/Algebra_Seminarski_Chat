import React, { Component } from "react";

class UserForm extends Component {
  state = {
    username: "",
    color: "#000000",
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Vaše ime:
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.onChange}
            required
          />
        </label>
        <label>
          Željena boja:
          <input
            name="color"
            type="color"
            value={this.state.color}
            onChange={this.onChange}
          />
        </label>
        <button type="submit">Spremi</button>
      </form>
    );
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onUserSubmit(this.state);
  };
}

export default UserForm;
