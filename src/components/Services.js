import ServicesContainer from "./ServicesContainer";

function Services({ photography, videography, addToCart }) {

    return(
        <div>
            <ServicesContainer photography={photography} videography={videography} addToCart={addToCart} />
        </div>
    )
}

export default Services;