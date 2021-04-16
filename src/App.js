import logo from './logo.svg';
import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import { Home } from './pages/home';
import { Timeline } from './pages/timeline';
import { Todo } from './pages/todo';
import { Testing } from './pages/testing';
import { Quarentine } from './pages/quarentineInfo';
import './App.css';

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
        <Route path="/quarentine" component={Quarentine}></Route>
        <Redirect to="/" />
        </Switch>
    </main>

    { /* footer section */}
    <footer>
        <p>This app is created by UW students for INFO 490/491.</p>
        <p>&copy; 2021 Han Chen, Wayne Wang, Yixuan Wen, Harry Zhan.</p>
    </footer>
</div>
  );
}

// create navigation bar
function AboutNav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/timeline" activeClassName="activeLink">Planner</NavLink></li>
        <li><NavLink to="/quarentine" activeClassName="activeLink">Information Update (Live)</NavLink></li>
      </ul>
    </nav>
  );
}

export default App;
