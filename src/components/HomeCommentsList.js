import React from 'react'
import ".//CSS/HomeCommentList.css"

const HomeCommentsList = ({ commentary=[] }) => {

    console.log(commentary)

    return (
        <div className="Comment-List">
            {commentary.map((comment) => (
                <div > 
                <div className="User">
                    <h4>{comment.who}</h4>
                </div>
                <div className="Commentary">
                    <p>{comment.category}</p>
                    <p>{comment.comment}</p>
                </div>
                </div>
            ))}
        </div>
    )
}

export default HomeCommentsList
