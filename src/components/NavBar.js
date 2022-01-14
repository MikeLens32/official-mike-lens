import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {

    const style = {
        width: "2em",
        margin: "1em",
    }

    return(
        <div className="NavBar">
            <img className="Logo" src="/public/images/MIKELENS.png" alt="Logo" />
           <NavLink 
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
           </NavLink>
        </div>
    )
}

export default NavBar;