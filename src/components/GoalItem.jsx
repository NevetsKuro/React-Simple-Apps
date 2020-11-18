import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { completeGoalRef, firebaseGoals } from "../firebase";

class GoalItem extends Component {
  completeGoal() {
    // add to complete goals on the database
    // remove this goal from the goals reference
    const { email } = this.props.logReducer;
    const { title, serverKey } = this.props.goal;
    firebaseGoals.child(serverKey).remove();
    completeGoalRef.push({ email, title });
  }

  render() {
    const { email, title } = this.props.goal;
    return (
      <ListGroup.Item style={{ margin: "5px" }}>
        <strong>{title}</strong>
        <span style={{ marginRight: "5px" }}>
          {" "}
          submitted by <em>{email}</em>
        </span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
        >
          Complete
        </button>
      </ListGroup.Item>
    );
  }
}

function mapStateToProps(state) {
  const { logReducer } = state;
  return {
    logReducer,
  };
}

export default connect(mapStateToProps, null)(GoalItem);
