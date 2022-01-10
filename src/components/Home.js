import React from "react";
import PhotoCategories from './PhotoCategories';
import HomeCommentary from './HomeCommentary';


function Home() {

    return(
        <div>
            <h1>
                Home
            </h1>
            <PhotoCategories />
            <HomeCommentary />
        </div>
    )
}

export default Home