import { useState } from "react";
import BookingsForm from "./BookingsForm";
import Services from "./Services";
import { Photogrpahy, Videography } from './ServiceCategories'

function Bookings() {

    const [serviceCart, setServiceCart] = useState([])

    const addToCart = (service) => {
        
    }

    return(
        <div>
            <h1>
                Bookings
            </h1>
            <Services photography={Photogrpahy} videography={Videography} addToCart={addToCart}/>
            <BookingsForm />
        </div>
    )
}

export default Bookings