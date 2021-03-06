import ServiceCard from './ServiceCard'
import ".//CSS/ServiceContainer.css"

function ServicesContainer({ photography, videography }) {

    return (
        <div className="Service-Container" style={{border:"flex", flexWrap:"warp"}}>
            {photography.map((photograph) => <ServiceCard key={photograph.id} media={photograph} />)}
            {videography.map((videograph) => <ServiceCard key={videograph.id} media={videograph} />)}
        </div>
    )
}

export default ServicesContainer
