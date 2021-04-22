import logo from './logo.svg';
import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import { Home } from './pages/home';
import { Timeline } from './pages/timeline';
import { Todo } from './pages/todo';
import { Testing } from './pages/testing';
import QuarantineInfo from './pages/quarentineInfo';
import './App.css';
import QuarantineDetail from './pages/quarantinedetail';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>    
    { /* header section */} 
    <header className="py-5">
        <AboutNav />
    </header>
    
    { /* main section */}
    <main>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/timeline" component={Timeline}></Route>
        <Route path="/todo" component={Todo}></Route>
        <Route path="/testing" component={Testing}></Route>
        <Route path="/quarantine" component={QuarantineInfo}></Route>
        <Route path="/quarantinedetail" component={QuarantineDetail}></Route>
        {/* <Redirect to="/" /> */}
        </Switch>
    </main>

    { /* footer section */}
    <footer>
        <p>This app is created by UW students from INFO 491.</p>
        <p>&copy; Travel Saver. By Wayne, Chris, Han, and Harry</p>
                                <address>
                                    Report Inapporiate Content: <a href="report@fs.com">report@TravelSaver.com</a>, or at <a href="tel:800-888-888">(800) 888-888</a>.
                                </address>
    </footer>
</div>
  );
}

// create navigation bar
function AboutNav() {
  return (
    <nav>
      <h1 className="logo"> <NavLink to="/" class="activeLink">TravelSaver</NavLink></h1>
      <ul>
        <li class="container container/1"><NavLink to="/timeline" class="activeLink">Planner</NavLink></li>
        <li class="container container2"><NavLink to="/quarantine" class="activeLink">Information Update (Live)</NavLink></li>
        {/* <li class="container container3"><NavLink to="/testing" class="activeLink">Testing</NavLink></li>
        <li class="container container4"><NavLink to="/todo" class="activeLink">To-Do List Before Trip</NavLink></li> */}
      </ul>
    </nav>
  );
}



export default App;
