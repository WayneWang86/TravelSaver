import React, { Component }  from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import  QuarantineDetail from './quarantinedetail';
import './quarantineInfo.css';
class QuarantineInfo extends React.Component {
    constructor (props) {
      super(props)
  
      this.state = {
        recipedata: ''
      }
    }
  
    componentDidMount () {
      var recipe = this.props.location.state
  
      this.setState({
        
      })
    }
  
      render = () => {
        var ingredients = this.state.recipedata.ingredientLines
        //  console.log('ingredients', typeof (ingredients))
  
        return (
          
          <div>
                <h1>Qurantine</h1>
                <div class="row">
                  <div class="column">
                    <h2>Destination Airport to Quarantine Hotel</h2>
                    <h2>Hotel Quarantine Guidelines</h2>
                    <ul>
                      <li>Food will be delivered at door at 8AM, 12PM and 6PM during the quarantine.</li>
                      <li>You are required to report body temperature 1 hour after each meal.</li>
                      <li>No take-out food is allowed</li>
                      <li>You are required to stay in the room all the time expect pick up food at door.</li>
                    </ul>
                  </div>
                  
                  <div class="column">
                    <h2>Quarantine Policy</h2>
                    <ul>
                      <li>Upon arrival, passengers need to show health declaration QR code, temperature checks, form-filling and QR code scanning. A COVID test (NAT) will be taken from each traveler and sent for testing.</li>
                      <li>Passengers need to have all documents ready and prepare to fill in multiple forms and declarations for each person. </li>
                      <li>A special bus to transfer passengers to your assigned hotel for quarantine.</li>
                      <li>Quarantine policy may vary based on passengers’ situations. (More details in Quarantine policy page).</li>
                      <li>
                        <Route path="/quarantinedetail" component={QuarantineDetail}>Quarantine policy in details.</Route>
                        <AboutNav />
                      </li>
                    </ul>
                  </div>
                </div>
                
          </div>
        )
      }
  }

  function AboutNav() {
    return (
      <nav>
        <ul>
          
          <li><NavLink to="/quarantinedetail" activeClassName="activeLink">Quarantine policy in details.</NavLink></li>
        </ul>
      </nav>
    );
  }
  
  export default QuarantineInfo;