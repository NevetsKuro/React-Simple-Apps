import React, { Component } from "react";
import {
  Accordion,
  Card,
  Row,
  Col,
  Container,
  Jumbotron,
} from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddGoal from "./AddGoal";
import CompleteGoalList from "./CompleteGoalList";
import GoalList from "./GoalList";
import "../css/goalCss.css";

class GoalCoach extends Component {
  render() {
    return (
      <Jumbotron className="goalCss">
        <Container className="vh-100">
          <Row className="justify-content-center">
            <Col sm={6}>
              <h2>Goal Coach</h2>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Link} variant="link" eventKey="0">
                      Add Goals
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <AddGoal />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Link} variant="link" eventKey="0">
                      All Goals
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <GoalList />
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Link} variant="link" eventKey="0">
                      Completed Goals
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <CompleteGoalList />
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

function mapStateToProps(state) {
  console.log("GoalCoach:state", state);
  return {
    log: state,
  };
}

export default connect(mapStateToProps, null)(GoalCoach);
