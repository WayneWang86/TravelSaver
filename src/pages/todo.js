import React, {Component} from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './timeline.css' 
import Quarantine from './quarentineInfo'
import { Timeline } from './timeline'
export class Todo extends Component {
    render() {
        return (
            <div className="timeline">
                <div className="travelInfo">
                    <h3>Trip To: <span className="location">Shanghai</span></h3> 
                    <h3>Departure From: <span className="location">Seattle</span></h3> 
                </div>
                <div className="title-n-option">
                    <h1 className="title">To-do List</h1>
                    <h3><a href="timeline"> Change to Planning Mode</a></h3>
                </div>
                <div className="timelineDetail">
                    <div className="prep">
                        <div className="box">
                            <h3>Preparation</h3>
                        </div>
                        <ol>
                            <li>
                                <input type="checkbox" id="1"></input>
                                <label for="1">Report personal health status on WeChat mini app .</label>
                            </li>
                        </ol>
                    </div>

                    <div className="test">
                        <div className="box">
                            <h3>Testing</h3>
                        </div>
                        <ol>
                            <li>
                                <input type="checkbox" id="2"></input>
                                <label for="2">Make appointment.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="3"></input>
                                <label for="3"> Nucleic acid and IgM anti-body tests.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="4"></input>
                                <label for="4">Fetch testing results.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="5"></input>
                                <label for="5">Submit both testing results and apply for a green health code from Chinese Embassy.</label>
                            </li>
                        </ol>
                    </div>
                        

                    <div className="flight">
                        <div className="box">
                            <h3>Flights</h3>
                        </div>
                        <ol>
                            <li>
                                <input type="checkbox" id="6"></input>
                                <label for="6">Arrive to airport.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="7"></input>
                                <label for="7">Body temperature check.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="8"></input>
                                <label for="8">Fill out required documents before boarding.</label>
                            </li>
                        </ol>
                    </div>
                        


                    <div className="quar">
                        <div className="box">
                            <h3>Quarantine</h3>
                        </div>
                        <ol>
                            <li>
                                <input type="checkbox" id="9"></input>
                                <label for="9">Arrival to China.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="10"></input>
                                <label for="10">Entry document and health document check.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="11"></input>
                                <label for="11">Nucleic acid and IgM anti-body tests at airport.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="12"></input>
                                <label for="12">Luggage reclaim.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="13"></input>
                                <label for="13">Passenger Group assignment.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="14"></input>
                                <label for="14">Quarantine Hotel assignment.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="15"></input>
                                <label for="15">Arrival to quarantine hotel.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="16"></input>
                                <label for="16">Report entry informaiont and status to community staff .</label>
                            </li>
                            <li>
                                <input type="checkbox" id="17"></input>
                                <label for="17">Nucleic acid test at 12th day of quarantine.</label>
                            </li>
                            <li>
                                <input type="checkbox" id="18"></input>
                                <label for="18">Receive nucleic acid test result.</label>
                            </li>
                        </ol>
                    </div>

                </div>
            </div>
        )
    }
}

