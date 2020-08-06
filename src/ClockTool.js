import React from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';
import './css/ClockTool.css';
import Clock from './Clock.js';

class ClockTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEvent: 'Christmas',
            eventDate: '26 December, 2020'
        }
    }
    changeDate() {
        this.setState({ eventDate: "27 November, 2020", isEvent: "Diwali" })
    }

    render() {
        return (
            <div className="timePanel centerAlign">
                <div className="fs-H2">Countdown Timer</div>
                <div className="fs-H">For {this.state.isEvent}</div>
                <Clock
                    eventDate={this.state.eventDate}
                />
                <div className="changeDate">
                    <input className="form-control inputCss" type="text" placeholder="Enter Event Name"
                        onChange={ev => this.setState({ isEvent: ev.target.value })}
                    />
                    <input className="form-control inputCss" type="text" placeholder="Enter Event Date"
                        onChange={ev => this.setState({ eventDate: ev.target.value })}
                    />
                </div>
                <div>
                    <Button variant="outline-danger">Submit</Button>
                    {/* <button className="buttonCss fs-C" onClick={()=>this.changeDate()}>Change</button> */}
                </div>
            </div>
        )
    }
}

export default ClockTool;