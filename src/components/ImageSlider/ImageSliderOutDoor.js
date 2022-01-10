import React, { useState} from 'react'
import { SliderOutDoorData } from '../SliderData/SliderOutDoorData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSliderOutDoor = ({ outdoor }) => {

    const [currentImg, setSurrentImg] = useState(0)
    const length = outdoor.length
    // destructored outdoor as a prop for SliderOutDoorData in the partent '../components/Home' component so it would be able to read here
    const nextSlide = () => {
        setSurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
    }
    // If the the array is connected and the currentImg is equal to length - 1. Since it counts starting from 0  this would be correct. That why I put "0" so it can reset when it reaches the highest number else it will be currentImg + 1
    // console.log(currentImg);
    // I tested out the currentImg on the click for next firstto see if the function worked with the number of images

    const prevSlide = () => {
        setSurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
    }
    // If current is equal to zero/back to the original image THEN I want to set the length to be - 1 else I'm setting currentImg to - 1

    if(!Array.isArray(outdoor) || outdoor.length <= 0) {
        return null
    }
    //just incase theres no data on the incoming file with the array I'm currently (outdoor being a prop of SliderOutDoorData) using then it will return null/nothing

    return (
        <section className='OutDoor'>
            <FaArrowAltCircleLeft className='left-previous' onClick={prevSlide}/>
            {SliderOutDoorData.map((out, index) => {
                return(
                    <div
                    className={index === currentImg ? 'outdoor active' : 'outdoors'}
                    key={index}
                    >
                        {index === currentImg && (<img src={window.location.origin + "/images" + out.image} alt={out.alt} className='OutDoor-Image'/>
                        )}
                    </div>
                ) ;
            })}
            <FaArrowAltCircleRight className='right-next' onClick={nextSlide}/>
        </section>
    )
}

export default ImageSliderOutDoor
