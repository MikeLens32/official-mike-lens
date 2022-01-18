import "./NavBar.css"
import Home from "./Home";
import About from "./About";
import Bookings from "./Bookings";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap"
import image from "../White ML Logo.png"


function NavBar() {

    return(
        <Router>
        <div className="NavBar">
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand path="/">
              <img className="ML" src={image}/>
            </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/Bookings"}>Bookings</Nav.Link>
                <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
        <div>
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
        </div>
           {/* <NavLink 
           exact to="/"
           style={style}
           >
               Home
           </NavLink>
           <NavLink 
           to="/About"
           style={style}
           >
               About
           </NavLink>
           <NavLink 
           to="/Bookings"
           style={style}
           >
               Bookings
           </NavLink>
           <NavLink 
           to="/Contact"
           style={style}
           >
               Contact
           </NavLink> */}
        </Router>
    )
}

export default NavBar;