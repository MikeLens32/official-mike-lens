import { useState } from "react";
import BookingsForm from "./BookingsForm";
import Services from "./Services";
import { Photography, Videography } from './ServiceCategories'

function Bookings() {

    const [serviceCart, setServiceCart] = useState([])

    return(
        <div>
            <h1>
                Bookings
            </h1>
            <Services photography={Photography} videography={Videography} />
            <BookingsForm />
        </div>
    )
}

export default Bookings