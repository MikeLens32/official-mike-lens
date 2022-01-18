import "./ServiceCard.css"

const ServiceCard = ({ media }) => {

    const {service, description, image, alt} = media

    return (
        <div className="Card-Container" >
            <div className="Image-Contaner">
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
