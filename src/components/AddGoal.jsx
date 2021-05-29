import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { firebaseGoals } from "../firebase";

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  addGoal() {
    console.log("AddGoal:state", this.state);
    console.log("AddGoal:props", this.props);
    const { email } = this.props;
    var k = firebaseGoals.push({ email: email, title: this.state.title }).key;
    console.log("key", k);
  }

  render() {
    return (
      <Form>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="4" className="font-weight-bold">
            Next Goal
          </Form.Label>
          <Col sm="4">
            <Form.Control
              plaintext
              className="border border-bottom p-2"
              onChange={(event) => this.setState({ title: event.target.value })}
            />
          </Col>
          <Col sm="4">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.addGoal()}
            >
              Add Goal
            </button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  console.log("addgoal", state);
  const { email } = state.logReducer;
  return {
    email,
  };
}

export default connect(mapStateToProps, null)(AddGoal);
