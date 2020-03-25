import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: "",
      emailSent: "",
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
      emailSent: false
    });
  }

  render() {
    return(
      <div>
        <Hero title={this.props.title} />

        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">E-Mail</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control id="message" name="message" as="textarea"rows="4" value={this.state.message} onChange={this.handleChange}/>
            </Form.Group>

            <Button class="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
              Send
            </Button>

            {this.state.emailSent === true && <p className="d-inline success-msg">E-Mail Sent!</p>}
            {this.state.emailSent === false && <p className="d-inline error-msg">E-Mail Not Sent!</p>}

          </Form>
        </Content>
      </div>
      );
    }

}

export default ContactPage;