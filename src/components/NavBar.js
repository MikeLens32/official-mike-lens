import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    const style = {
        width: "2em",
        margin: "1em",
    }

    return(
        <div>
           <NavLink 
           exact to="/"
           activeStyle={{
               fontWeight:"bold",
               color:"navy"
           }}
           style={style}
           >
               Home
           </NavLink>
           <NavLink 
           to="/About"
           activeStyle={{
               fontWeight:"bold",
               color:"navy"
           }}
           style={style}
           >
               About
           </NavLink>
           <NavLink 
           to="/Bookings"
           activeStyle={{
               fontWeight:"bold",
               color:"navy"
           }}
           style={style}
           >
               Bookings
           </NavLink>
           <NavLink 
           to="/Contact"
           activeStyle={{
               fontWeight:"bold",
               color:"navy"
           }}
           style={style}
           >
               Contact
           </NavLink>
        </div>
    )
}

export default NavBar;