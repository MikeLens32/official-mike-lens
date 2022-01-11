import React from 'react'

const HomeCommentsList = ({ commentary=[] }) => {

    console.log(commentary)

    return (
        <div>
            {commentary.map((comment) => (
                <div> 
                    <h4>{comment.who}</h4>
                    <p>{comment.category}</p>
                    <p>{comment.comment}</p>
            </div>
            ))}
        </div>
    )
}

export default HomeCommentsList
