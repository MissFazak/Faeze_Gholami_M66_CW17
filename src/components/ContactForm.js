import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddContact(this.state.name);
  }
  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)} className="mb-5">
        <Form.Group controlId="fullNameInput">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              this.handleChangeInput(e);
            }}
            name="name"
          ></Form.Control>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              this.handleChangeInput(e);
            }}
            name="lastName"
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
    );
  }
}
