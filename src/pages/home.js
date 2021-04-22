import React, {Component} from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './home.css' 

export class Home extends Component {
    render() {
        return(
            <div className="home">
                <h1>Wanna go back to China? <br></br> We are here to help.</h1>
                <div className="query">
                    <label for="from">From Where:</label>
                    <input type="text" id="from" name="from"></input>

                    <label for="to">Where to in China</label>
                    <input type="text" id="to" name="to"></input>

                    <label for="ticket">Ticket Number:</label>
                    <input type="text" id="ticket" name="ticket"></input>

                    <br></br>

                    <label for="datet">Date:</label>
                    <input type="text" id="date" name="date"></input>

                    <label for="passenger">Number of Passenger:</label>
                    <input type="text" id="passenger" name="passenger"></input>


                    <a href="/timeline"><input type="submit" value="Submit"></input></a>
                </div>
            </div>
        )
    }
}