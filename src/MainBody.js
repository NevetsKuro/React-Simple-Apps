import React from 'react';
import './css/index.css';
import ClockTool from './ClockTool';
import MusicMaster from './MusicMaster';
import Loading from './Loading';
import ReminderPro from './ReminderPro';
import { Jumbotron, Badge, Tabs, Tab } from 'react-bootstrap';

export default class MainBody extends React.Component {
    render() {
        return (
            <div className="App">
                <h1 className="text-center">
                    Simple Tools <h5><Badge variant="secondary">Made By React</Badge></h5>
                </h1>
                <Jumbotron className="bg-light">
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
                    </Tabs>
                </Jumbotron>
            </div>
        )
    }
}
