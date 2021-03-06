import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Mike from "../MIKELENS.png";
import ".//CSS/Contact.css"

function Contact() {

    const [contactInfo, setContactInfo] = useState({
        user: "",
        email: "",
        comment: "",
    })

    const form = useRef()
    
    const sendEmail = e => {
        e.preventDefault();

    emailjs.sendForm('service_trm8u9n', 'template_96w3xuh', form.current, 'user_KcoiB4CQfQi7iIeZbWu2j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
    }

    function handleUser(e) {
        setContactInfo(e.target.value)
    }

    function handleEmail(e) {
        setContactInfo(e.target.value)
    }
    
    function handleComment(e) {
        setContactInfo(e.target.value)
    }

    return(
        <div>
            <h1>
                Contact
            </h1>
            <img className="Mike-Lens" src={Mike} alt="Mike-Lens"/> 
            <form className="Form" ref={form} onSubmit={sendEmail}>
            <label>Full Name</label>
            <input 
            required type="text"
            name={"user" || contactInfo.user}
            onChange={handleUser}
            value={contactInfo.user}/>
            <label>Email Address</label>
            <input 
            required type="email"
            name={"email" || contactInfo.email}
            onChange={handleEmail}
            value={contactInfo.email}/>
            <br/>
            <label>Services</label>
            <br/>
            <textarea 
            cols="80"
            rows="5"
            required type="text"
            name={"comment" || contactInfo.comment}
            onChange={handleComment}
            value={contactInfo.comment}/>
            <br/>
            <input className="Text-Field" type="submit" value="Create Request"/>
        </form>
        </div>
    )
}

export default Contact