import React, { Component } from "react";
// import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    // this.state = { firstName: "", lastName: "", number: "", email: "" };
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.name);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="firstName"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Family:
            <input
              type="text"
              name="lastName"
              value={this.state.family}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone-number:
            <input
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email-adress:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;