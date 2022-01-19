import "./ServiceCard.css"

const ServiceCard = ({ media:{service, description, image, alt}}) => {

    return (
        <div className="Card-Container" >
            <div className="Image-Container">
                <img src={image} alt={alt}/>
            </div>
            <div className="Card=Content">
                <div className="Service-Title">
                    <h3>{service}</h3>
                </div>
                <div className="Paragraph">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;
