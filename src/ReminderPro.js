import React, { Component } from 'react';
import './css/remindClass.css';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from './actions';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Form, Col, Button } from 'react-bootstrap';

class ReminderPro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder() {
        console.log('Reminder', this);
        this.props.addReminder(this.state.text, this.state.dueDate);
        // console.log('this.state.dueDate', this.state.dueDate);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-5 m-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="card card-body my-1 p-2 card-items rounded">
                                <div className="row ">
                                    <div className="col-10">
                                        <p className="h6 text-secondary font-weight-bold text-left">{moment(new Date(reminder.dueDate)).format('h:mm a')}</p>
                                    </div>
                                    <div
                                        className="delete-button cursorOnHover col-2"
                                        onClick={() => this.deleteReminder(reminder.id)}
                                    >
                                        <span
                                        >
                                            &#x2715;
                                        </span>
                                    </div>
                                    <div className="col-12">
                                        <div className="text-left font-weight-bold">{reminder.text}</div>
                                    </div>
                                    <div className="col-12">
                                        <div className="text-left"><small>{moment(new Date(reminder.dueDate)).fromNow()}</small></div>
                                    </div>
                                    
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="remindClass">
                <div className="title">
                    <p className="h3 text-light">Reminder Pro</p>
                </div>
                <hr className="hrClass"/>
                <div className="form-inline">
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="I have to..."
                                    // value="Buy Pokeballs"
                                    onChange={event => this.setState({
                                        text: event.target.value
                                    })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="datetime-local"
                                    onChange={event => this.setState({ dueDate: event.target.value })}
                                />
                            </Col>
                            <Col>
                                <Button variant="success"
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => this.addReminder()}
                                > Add Reminder</Button>{' '}
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
                { this.renderReminders()}
                <div
                    className="btn btn-danger cursorOnHover"
                    onClick={() => this.props.clearReminders()}
                >
                    Clear Reminders
        </div>
            </div>
        )
    }
}

// function mapDispatch(dispatch) {
//     return bindActionCreators({ addReminder }, dispatch);
// }

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(ReminderPro);