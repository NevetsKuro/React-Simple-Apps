import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { setCompleted } from "../actions";
import { completeGoalRef } from "../firebase";

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on("value", (snap) => {
      let completeGoals = [];
      snap.forEach((completeGoal) => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title });
      });
      this.props.setCompleted(completeGoals);
    });
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return (
      <div>
        <ListGroup>
          {this.props.completeGoals.map((completeGoal, index) => {
            const { title, email } = completeGoal;
            return (
              <ListGroup.Item key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <button
          className="btn btn-block btn-primary m-3"
          onClick={() => this.clearCompleted()}
        >
          Clear All
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals,
  };
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
