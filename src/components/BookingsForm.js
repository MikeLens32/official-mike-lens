import React, { useState } from 'react'

const BookingsForm = () => {

    const [bookingData, setBookingData] = useState({
        user: '',
        email: '',
        service: '',
        budget: 0.00,
        
    })

    return(
        <form action="Mike-Lens:mike.a.dwyer32@gmail.com" method="post" enctype="text/plain">
            <label>Full Name</label>
            <input 
            required type="text"
            value={bookingData.user}
            />
            <label>Email Address</label>
            <input 
            required type="email"
            value={bookingData.email}
            />
            <label>Services</label>
            <input 
            required type="text"
            value={bookingData.service}
            /><br/>
            <label>Budget</label>
            <select required>
                <option value="Individual">Individual</option>
                <option value="Small Group">Small Group</option>
                <option value="Small Event">Small Event</option>
                <option value="Large Event">Large Event</option>
                <option value="Short Promo Video">Short Promo Video</option>
                <option value="Feature Film">Feature Film</option>
                <option value="Docu-series">Docu-series</option>
                <option value="Vloging">Vloging</option>
            </select>
            {/* Create a section for possible date of event/service request */}
            <input 
            type="number" 
            step="0.01"
            value={bookingData.budget}
            /><br />
            <input type="submit" value="Create Request"/>
        </form>
    )
}

export default BookingsForm;