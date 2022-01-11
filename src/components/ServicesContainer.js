import React from 'react'
import ServiceCard from './ServiceCard'

function ServicesContainer({ photography, videography }) {

    return (
        <div style={{border:"flex", flexWrap:"warp"}}>
            {photography.map((photograph) => <ServiceCard key={photograph.id} media={photograph} />)}
            {videography.map((videograph) => <ServiceCard key={videograph.id} media={videograph} />)}
        </div>
    )
}

export default ServicesContainer
