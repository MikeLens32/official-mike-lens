import ServicesContainer from "./ServicesContainer";

function Services({ photography, videography, addToCart }) {

    return(
        <div>
            <h1>Services</h1>
            <ServicesContainer photography={photography} videography={videography} addToCart={addToCart} />
        </div>
    )
}

export default Services;