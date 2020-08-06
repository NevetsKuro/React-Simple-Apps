import React from 'react';
import './css/index.css';
import ClockTool from './ClockTool';
import MusicMaster from './MusicMaster';
import Loading from './Loading';
import { Tabs, Tab } from 'react-bootstrap';

export default class MainBody extends React.Component {
    render() {
        return (
            <div className="App">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Countdown Timer">
                        <ClockTool />
                    </Tab>
                    <Tab eventKey="profile" title="Music Master">
                        <MusicMaster />
                    </Tab>
                    <Tab eventKey="nApp" title="Next App" >
                        <Loading />
                    </Tab>
                </Tabs>
                {/* <Tabs >
                    <TabList>
                        <Tab>Countdown Clock</Tab>
                        <Tab>Music Master</Tab>
                        <Tab>App 3</Tab>
                        <Tab>App 4</Tab>
                    </TabList>
                    <TabPanel >
                        <ClockTool />
                    </TabPanel>
                    <TabPanel >
                        <MusicMaster />
                    </TabPanel>
                    <TabPanel >
                        <Loading />
                    </TabPanel>
                    <TabPanel >
                        <Loading />
                    </TabPanel>
                </Tabs> */}
            </div>
        )
    }
}
