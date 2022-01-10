import React from "react";

function Contact() {
    return(
        <div>
            <h1>
                Contact
            </h1>
            <form >
            <label>Full Name</label>
            <input required type="text"/>
            <label>Email Address</label>
            <input required type="email"/>
            <label>Services</label>
            <input required type="text"/>
        </form>
        </div>
    )
}

export default Contact