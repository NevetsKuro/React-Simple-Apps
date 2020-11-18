import React, { Component } from "react";
import { Button, Card, Form, Jumbotron } from "react-bootstrap";
import { firebaseApp } from "../firebase";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  signUp() {
    const { email, password } = this.state;
    console.log("state", this.state);
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  }
  render() {
    return (
      <Jumbotron className="p-5 vh-100">
        <Card style={{ width: "40%", margin: "10px auto" }}>
          <Card.Body>
            <Card.Title>Sign up</Card.Title>
            <div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => this.signUp()}
                >
                  Sign up
                </Button>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </Jumbotron>
    );
  }
}

export default SignUp;
