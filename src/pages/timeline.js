import React, {Component} from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './timeline.css' 
import Quarantine from './quarentineInfo'
export class Timeline extends Component {
    render() {
        return (
            <div className="timeline">
                <div className="travelInfo">
                    <h3>Trip To: <span className="location">Shanghai</span></h3> 
                    <h3>Departure From: <span className="location">Seattle</span></h3> 
                </div>
                <div className="title-n-option">
                    <h1 className="title">Timeline</h1>
                    <h3><NavLink to="/todo" class="activeLink">Change to Travel Mode</NavLink></h3>
                </div>
                <div className="timeline-body">
                    <div className="time-stamp">
                    </div>
                    <div className="timelineDetail">
                        <div className="prep">
                            <div className="date-box">
                                <hr></hr>
                                <p className="date">Day1 <br></br> 5/26</p>
                            </div>
                            <div className="box">
                                <h3>Preparation</h3>
                            </div>
                            <ol>
                                <li>- Report personal health status on WeChat mini app continuously for 14 days.</li>
                            </ol>
                        </div>

                        <div className="test">
                            <div className="date-box">
                                <hr></hr>
                                <p className="date">Day1 <br></br> 5/26</p>
                            </div>
                            <div className="box">
                                <h3>Preparation</h3>
                            </div>
                            <ol>
                                <li>- Select testing facility to make appointment nucleic acid and IgM anti-body test.</li>
                                <li>- Take Nucleic acid and IgM anti-body tests.</li>
                                <li>- Go the testing location with a valid ID and insurance card/voucher.</li>
                                <li>- <a href="https://hr.cs.mfa.gov.cn/help_two/help-two/" target="_blank">Apply for green health code from the Chinese embassy.</a></li>
                            </ol>
                        </div>
                            

                        <div className="flight">
                            <div className="date-box">
                                <hr></hr>
                                <p className="date">Day1 <br></br> 5/26</p>
                            </div>
                            <div className="box">
                                <h3>Flights</h3>
                            </div>
                            <ol>
                                <li>- Arrive airport with valid passport, green health code and negative test results.</li>
                                <li>- <a href="http://health.customsapp.com/home/pages/index/index.html" target="_blank">Fill out the required entry documents before boarding.</a></li>
                                <li>- Keep masks on all the time through the flight.</li>
                            </ol>
                        </div>

                        <div className="quar">
                            <div className="quarantine-date">
                                <div className="date-box">
                                    <hr></hr>
                                    <p className="date">Day1 <br></br> 5/26</p>
                                </div>
                                <div className="date-box">
                                    <hr></hr>
                                    <p className="date">Day1 <br></br> 5/26</p>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Quarantine</h3>
                            </div>
                            <ol>
                                <li>- Arrive to China.</li>
                                <li>- Wait for epidemic prevention personnel to check entry documents.</li>
                                <li>- Receive Nucleic acid and IgM anti-body tests at airport.</li>
                                <li>- Assign to groups and wait for quarantine hotel assignment.</li>
                                <li>- Transport to quarantine hotel.</li>
                                <li>- <a href="./quarantine">Quarantine policy and Hotel quarantine roles.</a></li>
                                <li>- Arrive at quarantine hotel.</li>
                                <li>- Report entry information to community staff and local police station.</li>
                                <li>- Take Nucleic acid test at the 12th day of quarantine.</li>
                                <li>- Receive negative testing resolt of nucleic acid test.</li>
                                <li>- Check-out.</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

