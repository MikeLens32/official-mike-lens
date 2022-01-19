import React, { useState, useEffect} from 'react'
// import './HomeCommentary.css'
import HomeCommentsList from './HomeCommentsList'
import HomeForm from './HomeForm'

function HomeContainer() {

    const [comments, setComments] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/commentary')
        .then(r => r.json())
        .then((commentData) => setComments(commentData))
        .catch((err) => alert(err))
    }, [])

    return(
        <div>
            <HomeForm setComment={setComments}/>
            <HomeCommentsList commentary={comments} />
        </div>
    )
}

export default HomeContainer;