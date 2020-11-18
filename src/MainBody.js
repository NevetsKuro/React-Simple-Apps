import React from 'react';
import './css/index.css';
import ClockTool from './ClockTool';
import MusicMaster from './MusicMaster';
import Loading from './Loading';
import ReminderPro from './ReminderPro';
import { Jumbotron, Badge, Tabs, Tab, Button, Row, Col } from 'react-bootstrap';
import GoalCoach from './components/GoalCoach';
import { firebaseApp } from './firebase';
import { connect } from 'react-redux';

class MainBody extends React.Component {

    constructor(props) {
        super(props);
    }

    logout() {
        firebaseApp.auth().signOut();
    }

    render() {
        console.log('state1', this.props);
        return (
            <Row className="App">
                <Col sm={2}>
                </Col>
                <Col sm={8} className="text-center">
                    <span className="display-4">Simple Tools</span>
                    <span className="small"><Badge variant="secondary">Made By React</Badge></span>
                </Col>
                <Col sm={2} className="text-center">
                    <span className="p-2">Signed In: {this.props.email}</span>
                    <Button variant="danger" type="button" size="sm"
                        onClick={() => this.logout()}
                    >Logout</Button>
                </Col>
                <Col sm={12}>
                    <Jumbotron className="bg-light p-1">
                        <Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Countdown Timer">
                                <ClockTool />
                            </Tab>
                            <Tab eventKey="profile" title="Music Master">
                                <MusicMaster />
                            </Tab>
                            <Tab eventKey="rpro" title="Reminder Pro" >
                                <ReminderPro />
                            </Tab>
                            <Tab eventKey="goalcoach" title="Goal Coach" >
                                <GoalCoach />
                            </Tab>
                        </Tabs>
                    </Jumbotron>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state) {
    console.log("MainBody:state", state);
    const { email } = state.logReducer
    return {
        email,
    };
}

export default connect(mapStateToProps, null)(MainBody);