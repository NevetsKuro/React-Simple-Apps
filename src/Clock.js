import React from 'react';
import './css/Clock.css';
import './css/ClockTool.css';

class Clock extends React.Component{
    constructor(props){
        super(props)   
        this.state = {
            days:0,
            hours:0,
            mins:0,
            secs:0
        }
    }
    getTimeUtil(date){
        // console.log("date: ", date);
        const time = Date.parse(date) - Date.parse(new Date());
        // console.log("time",time);

        const secs = Math.floor((time/1000) % 60);
        const mins = Math.floor((time/1000/60) % 60);
        const hrs = Math.floor((time/(1000*60*60)) % 24);
        const days = Math.floor((time/(1000*60*60*24)));

        this.setState({days:days});
        this.setState({hours:hrs});
        this.setState({mins:mins});
        this.setState({secs:secs});
        // console.log(this.state)
    }

    componentWillMount(){
        this.getTimeUtil(this.props.eventDate);
    }
    componentDidMount(){
        setInterval(()=>this.getTimeUtil(this.props.eventDate),1000);
    }
    leading0(n){
        return n<10?"0"+n:n;
    }
    render(){
        return(
            <div className="Time fs-C">
                <div className="countDays">{this.leading0(this.state.days)} <span>Days</span></div>
                <div className="countHrs">{this.leading0(this.state.hours)} <span>Hours</span></div>
                <div className="countMins">{this.leading0(this.state.mins)} <span>Minutes</span></div>
                <div className="countSecs">{this.leading0(this.state.secs)} <span>Seconds</span></div>
            </div>
        )
    }
}

export default Clock;
