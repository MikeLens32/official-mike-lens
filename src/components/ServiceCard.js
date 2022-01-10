import React from 'react'

const ServiceCard = ({ media:{service, description} }) => {
    return (
        <div style={{border:"solid", width:"300px", margin:"auto"}}>
            <h3>{service}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard
