import React from 'react'
import ServiceCard from './ServiceCard'

function ServicesContainer({ photogrpahy, videography, addToCart }) {

    return (
        <div style={{border:"flex", flexWrap:"warp"}}>
            {photogrpahy.map((photograph) => <ServiceCard key={photograph.id} photgraph={photograph}/>)}
            {videography.map((videograph) => <ServiceCard key={videograph.id} videograph={videograph}/>)}
        </div>
    )
}

export default ServicesContainer
