import React, { useState, useEffect } from 'react'
import './HomeCommentary.css'
// import HomeCommentContainer from './HomeCommentContainer'

function HomeCommentary() {

    const [homeCom, setHomeCom] = useState({
        who: "",
        category: "",
        comment: ""
    })

    function handleChange(e) {
        setHomeCom({
            ...homeCom, 
            [e.target.id]:e.target.value,
        })
        console.log(homeCom);
    }
    // console.log(handleChange)

    function handleSubmit(e) {
        e.preventDefault();
        const homeData = {
            who: homeCom.who,
            category: homeCom.category,
            comment: homeCom.comment,
        }
        // useEffect(() => {
            fetch("http://localhost:3000/commentary", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(homeData)
            })
            .then(r => r.json()) 
            .then(data => console.log(data))
            .catch(error => console.log(error))
            setHomeCom({
                who: "",
                category: "",
                comment: ""
            })
        // }, []
        // )
        // console.log(homeData)
        // continously had an issue with defining the information I need before even getting to the fetch request

    }

    return(
        <div>
            <h1>Mike Lens Wants to Know What Was Your Favorite</h1><br/>
            <form className="HomeCommentaryForm" onSubmit={handleSubmit}>
            <label>Who's Speaking</label>
            <input 
            required type="text"
            id='who'
            value={homeCom.who}
            onChange={handleChange}
            />
            <select 
            required
            id='category'
            value={homeCom.category}
            onChange={handleChange}
            >
                <option value="">Select</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Indoor">Indoor</option>
                <option value="Botanical">Botanical</option>
                <option value="Central">Central</option>
            </select> 
            <br/>
            <label>Comment</label>
            <input 
            required type="text"
            id='comment'
            value={homeCom.comment}
            onChange={handleChange}
            />
            <input type="submit" value="Lets Hear it!"/>
            </form>
        </div>
    )
}

export default HomeCommentary;