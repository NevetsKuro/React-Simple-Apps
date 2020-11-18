import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Form, Jumbotron } from "react-bootstrap";
import { firebaseApp } from "../firebase";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        message: "",
      },
    };
  }

  signin() {
    console.log("state", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        this.setState({ error: { message: errorMessage } });
        console.log(errorMessage);
        // ...
      });
  }

  logout() {
    alert("Write the damn code mhn!!!");
  }

  render() {
    return (
      <Jumbotron className="p-5 vh-100">
        <Card style={{ width: "40%", margin: "10px auto" }}>
          <Card.Body>
            <Card.Title>Sign In</Card.Title>
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
                  className="mr-2"
                  type="button"
                  onClick={() => this.signin()}
                >
                  Sign in
                </Button>
                <Button
                  variant="primary"
                  className="mr-2"
                  type="button"
                  onClick={() => this.logout()}
                >
                  Logout
                </Button>
                <div>{this.state.error.mesage}</div>
                <div>
                  <Link to={"/React-Simple-Apps/signup"}>
                    Are You registered?
                  </Link>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </Jumbotron>
    );
  }
}
export default SignIn;
