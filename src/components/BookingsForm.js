import React, { useState } from 'react'

const BookingsForm = () => {

    const [bookingData, setBookingData] = useState({
        user: '',
        email: '',
        service: '',
        budget: 0.00,
    })

    return(
        <form >
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
                <option value="Photography">Photogrphay</option>
                <option value="Videography">Videography</option>
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