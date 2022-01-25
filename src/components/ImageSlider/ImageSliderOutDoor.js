import React, { useState } from 'react';
import { SliderOutDoorData } from '../SliderData/SliderOutDoorData'

const ImageSliderOutDoor = ({ outdoor }) => {

    const [currentImg, setCurrentImg] = useState(0)
    const length = outdoor.length
    const nextSlide = () => {
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
    }

    if(!Array.isArray(outdoor) || outdoor.length <= 0) {
        return null
    }
    //just incase theres no data on the incoming file with the array I'm currently (outdoor being a prop of SliderOutDoorData) using then it will return null/nothing

    return (
        <section className='OutDoor'>
            <h3 className="Section-Heading">OutDoor</h3>
            {SliderOutDoorData.map((out, index) => {
                return(
                    <div
                    className={index === currentImg ? 'outdoor-active' : 'outdoors'}
                    key={index}
                    >
                        {index === currentImg && (<img src={window.location.origin + "/images" + out.image} alt={out.alt} className='OutDoor-Image'
                        onClick={nextSlide}/>
                        )}
                    </div>
                ) ;
            })}
        </section>
    )
}

export default ImageSliderOutDoor
