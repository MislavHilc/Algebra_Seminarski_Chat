import React, { Component } from "react";

class UserForm extends Component {
  state = {
    username: "",
    color: "#000000",
  };

  render() {
    return (
      <>
      <h1>Unesite Vaše podatke</h1>
      <form onSubmit={this.onSubmit} className="initiate">
        <label className="initial">
          Vaše ime:
          <input
            name="username"
            type="text"
            value={this.state.username}
            className="ime"
            onChange={this.onChange}
            required
          />
        </label>
        <label className="initial">
          Željena boja:
          <input
            name="color"
            type="color"
            value={this.state.color}
            onChange={this.onChange}
          />
        </label>
        <button className="init" type="submit">Spremi</button>
      </form>
      </>
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
