import ".//CSS/Bookings.css"
import Services from "./Services";
import BookingsForm from "./BookingsForm";
import { Photography, Videography } from './ServiceCategories'

function Bookings() {
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