import "./Services.css"
const ServiceCard = ({ media:{service, description}}) => {

    const style = {
        border:"solid", 
        width:"20em", 
        display:"flex"
    }

    return (
        <div className={service} style={style}>
            <div id="Service-Card">
                <h3>{service}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard;
