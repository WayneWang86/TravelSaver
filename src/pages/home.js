import React, {Component} from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './home.css' 
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// export class Home extends Component {

//     Example = () => {
//         const [startDate, setStartDate] = useState(new Date());
//         return (
//           <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
//         );
//       };

//     render() {
//         return(
//             <div className="home">
//                 <h1>Wanna return back to China? <br></br> We are here to help.</h1>
//                 <div className="query">
//                     <label for="from">From Where:</label>
//                     <input type="text" id="from" name="from"></input>

//                     <label for="to">Where to in China</label>
//                     <input type="text" id="to" name="to"></input>

//                     <br></br>

//                     <label for="datet">Date:</label>
//                     <input type="text" id="date" name="date"></input>


//                     <a href="/timeline"><input type="submit" value="Submit"></input></a>

//                     <DatePicker
//                         selected={date}
//                         onSelect={handleDateSelect} //when day is clicked
//                         onChange={handleDateChange} //only when value has changed
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

function Home() {

    // Example = () => {
    //     const [startDate, setStartDate] = useState(new Date());
    //     return (
    //       <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    //     );
    //   };

    return(
        <div className="home">
            <h1>Wanna return back to China? <br></br> We are here to help.</h1>
            {/* <div className="query">
                <label for="from">From:</label>
                <input type="text" id="from" name="from"></input>

                <label for="to">To:</label>
                <input type="text" id="to" name="to"></input>

                <br></br>

                <label for="datet">Date:</label>
                <input type="text" id="date" name="date"></input>


                <a href="/timeline"><input type="submit" value="Submit"></input></a>

                <DatePicker
                    selected={date}
                    onSelect={handleDateSelect} //when day is clicked
                    onChange={handleDateChange} //only when value has changed
                />
            </div> */}
            <table>
                <tr>
                    <th className="form-group">
                        {/* <label className="departure-logo" for="departure"><img src="../res/departure.png" alt="departure-logo"></img></label> */}
                        <div className="departure-logo"></div>
                        <select id="departure" name="departure">
                            <option value="" disabled selected>Departure Location</option>
                            <option value="Seattle">Seattle</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="New York">New York</option>
                            <option value="Detroit">Detroit</option>
                        </select>
                    </th>
                    <th className="form-group">
                        <div className="destination-logo"></div>
                        <select id="destination" name="destination">
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

                    </th>
                    <th className="submit">
                        <button><a href="/timeline">Make a Plan</a></button>
                        {/* <a href="/timeline"><input type="submit" value="Make a plan"></input></a> */}
                    </th>
                </tr>
            </table>
        </div>
    )
}

export {Home}