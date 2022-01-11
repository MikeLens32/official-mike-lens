import React from "react";
import PhotoCategories from './PhotoCategories';
import HomeContainer from './HomeContainer';


function Home() {

    return(
        <div>
            <h1>
                Home
            </h1>
            <PhotoCategories />
            <HomeContainer />
        </div>
    )
}

export default Home