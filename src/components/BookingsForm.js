import React, { useState, useRef } from 'react'
import emailjs from "emailjs-com";

const BookingsForm = () => {

    const [bookingData, setBookingData] = useState({
        user: '',
        email: '',
        service: '',
        budget: 0.00,
        comment: '',
        
    })
    
    const form = useRef()

    const sendEmail = e => {
        e.preventDefault();

    emailjs.sendForm('service_trm8u9n', 'template_1ofhybi', form.current, 'user_KcoiB4CQfQi7iIeZbWu2j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
    }

    function handleUser(e) {
        setBookingData(e.target.value)
    }

    function handleEmail(e) {
        setBookingData(e.target.value)
    }
    
    function handleService(e) {
        setBookingData(e.target.value)
    }
    
    function handleBudget(e) {
        setBookingData(e.target.value)
    }
    
    function handleComment(e) {
        setBookingData(e.target.value)
    }

    return(
        <form ref={form} onSubmit={sendEmail}>
            <label>Full Name</label>
            <input 
            name={"user" || bookingData.user}
            required type="text"
            onChange={handleUser}
            value={bookingData.user}
            />
            <label>Email Address</label>
            <input 
            name={"email" || bookingData.email}
            required type="email"
            onChange={handleEmail}
            value={bookingData.email}
            />
            <label>Services</label>
            <select 
            name={"service" || bookingData.service}
            required
            onChange={handleService}
            value={bookingData.service}>
                <option value="Individual">Individual</option>
                <option value="Small Group">Small Group</option>
                <option value="Small Event">Small Event</option>
                <option value="Large Event">Large Event</option>
                <option value="Short Promo Video">Short Promo Video</option>
                <option value="Feature Film">Feature Film</option>
                <option value="Docu-series">Docu-series</option>
                <option value="Vloging">Vloging</option>
            </select>
            {/* <input 
            required type="text"
            value={bookingData.service}
            /> */}
            <br/>
            <label>Budget</label>
            {/* Create a section for possible date of event/service request */}
            <input 
            name={"budget" || bookingData.budget}
            type="number" 
            step="0.01"
            onChange={handleBudget}
            value={bookingData.budget}
            />
            <label>Date</label>
            <input 
            type="datetime-local" 
            >
            </input>
            <br />
            <label>Additional Details</label>
            <br />
            <textarea
            cols="80"
            rows="5"
            type="text"
            name={"comment" || bookingData.comment}
            onChange={handleComment}
            value={bookingData.comment}/>
            <br />
            <input type="submit" value="Create Request"/>
        </form>
    )
}

export default BookingsForm;