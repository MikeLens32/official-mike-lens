// import './App.css';
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Bookings from "./Bookings";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch >
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Bookings">
          <Bookings />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
