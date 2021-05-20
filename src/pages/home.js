import React, {Component, useState} from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './home.css' 
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Home() {

    const [startDate, setStartDate] = useState(new Date());
    const [departure, setDeparture] = useState('Seattle');
    const [destination, setDestination] = useState('Shanghai');
    const [infoValue, setInfoValue] = useState('');
    // const [lcStorage, setLcStorage] = useState(localStorage.getItem('infoLocalStorage') || '');

    const [lcDate, setLcDate] = useState(localStorage.getItem('localDate') || '');

    const [lcMonth, setLcMonth] = useState(localStorage.getItem('localMonth') || '');

    const [lcDep, setLcDep] = useState(localStorage.getItem('localDep') || '');

    const [lcDes, setLcDec] = useState(localStorage.getItem('localDes') || '');

    const [lcRawDate, setlcRawDate] = useState(localStorage.getItem('localRawDate') || new Date());


    const handleChangeDate = date => {
        setStartDate(date)
        // console.log(date.getMonth());
        // console.log(date.getDate());
        // let info = date.getMonth() + "/" + date.getDate() + " " + departure + " " + destination
        // setInfoValue(info)
    };

    const handleDeparture = dep => {
        // console.log(dep.target.value);
        setDeparture(dep.target.value);
        // let info = startDate.getMonth() + "/" + startDate.getDate() + " " + dep + " " + destination
        // setInfoValue(info)
    }

    const handleDestination = des => {
        // console.log(des.target.value);
        setDestination(des.target.value);
        // let info = startDate.getMonth() + "/" + startDate.getDate() + " " + departure + " " + des
        // setInfoValue(info)
    }

    const handleSaveInfo = () => {
        console.log(startDate.getMonth() + 1 + "/" + startDate.getDate() + " " + departure + " " + destination);
        // let localDate = startDate.getMonth() + 1 + "/" + startDate.getDate();
        localStorage.setItem('localMonth', startDate.getMonth() + 1)
        localStorage.setItem('localDate', startDate.getDate());
        localStorage.setItem('localRawDate', startDate);
        localStorage.setItem('localDep', departure);
        localStorage.setItem('localDes', destination);
    }


    return(
        <div className="home">
            <h1>Wanna return back to China? <br></br> We are here to help.</h1>
            <table>
                <tr>
                    <th className="form-group">
                        {/* <label className="departure-logo" for="departure"><img src="../res/departure.png" alt="departure-logo"></img></label> */}
                        <div className="departure-logo"></div>
                        <select id="departure" name="departure" onChange = {dep => handleDeparture(dep)}>
                            <option value="" disabled selected>Departure Location</option>
                            <option value="Seattle">Seattle</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="New York">New York</option>
                            <option value="Detroit">Detroit</option>
                        </select>
                    </th>
                    <th className="form-group">
                        <div className="destination-logo"></div>
                        <select id="destination" name="destination" onChange = {des => handleDestination(des)}>
                            <option value="" disabled selected>Destination</option>
                            <option value="Shanghai">Shanghai</option>
                            <option value="Beijing">Beijing</option>
                            <option value="Guangzhou">Guangzhou</option>
                            <option value="Shenzhen">Shenzhen</option>
                            <option value="Shenyang">Shenyang</option>
                        </select>
                    </th>
                    <th className="form-group">
                        <div className="calendar-logo"></div>
                        {/* <DatePicker selected={startDate} minDate={new Date()} onChange={date => setStartDate(date)} onSelect={date => handleChangeDate(date)}/> */}
                        <DatePicker selected={startDate} minDate={new Date()} onChange={date => handleChangeDate(date)}/>
                    </th>
                    <th className="submit">
                        <button onClick={handleSaveInfo()}><NavLink to="/timeline" class="activeLink">Make a plan</NavLink></button>
                        {/* <button><NavLink to="/timeline" class="activeLink">Make a plan</NavLink></button> */}

                    </th>
                    {/* <th>
                        <input value={Date.parse(lcRawDate)} type="text"/>
                    </th> */}
                </tr>
            </table>
        </div>
    )
}

export {Home}