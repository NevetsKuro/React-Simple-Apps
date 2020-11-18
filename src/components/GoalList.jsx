import React, { Component } from "react";
import { connect } from "react-redux";
import { firebaseGoals } from "../firebase";
import { setGoals } from "../actions";
import GoalItem from "./GoalItem.jsx";
import { ListGroup } from "react-bootstrap";

class GoalList extends Component {
  componentDidMount() {
    firebaseGoals.on("value", (snap) => {
      let goals = [];
      snap.forEach((goal) => {
        const { email, title } = goal.val();
        const serverKey = goal.key;
        goals.push({ email, title, serverKey });
      });
      this.props.setGoals(goals);
    });
  }

  render() {
    return (
      <div>
        {this.props.goals.map((goal, index) => {
          return (
            <ListGroup>
              <GoalItem key={index} goal={goal} />
            </ListGroup>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals,
  };
}

export default connect(mapStateToProps, { setGoals })(GoalList);
