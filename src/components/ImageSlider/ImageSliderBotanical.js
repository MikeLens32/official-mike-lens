import React, { useState } from 'react';
import SliderBotanicalData from "../SliderData/SliderBotanical"


function ImageSliderBotanical({ botanical }) {

    const [currentBo, setCurrentBo] = useState(0)
    const length = botanical.length

    const nextSlid = () => {
        setCurrentBo(currentBo === length  -1 ? 0 :
            currentBo + 1)
    }
    
    if(!Array.isArray(botanical) || botanical.length <= 0) {
        return null
    }

    return (
        <section className="Botanical-Garden">
            <h3 className="Section-Heading">Botanical</h3>
            {SliderBotanicalData.map((botGarden, index) => {
                return(
                    <div
                    className={index === currentBo ? "botanical-active" : "botanical"}
                    key={index}
                    >
                        {index === currentBo && (<img src={botGarden.image} alt={botGarden.alt} 
                        onClick={nextSlid}
                        className="Botanical-Image"/>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSliderBotanical;
