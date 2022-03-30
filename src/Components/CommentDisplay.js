import React from 'react'

function CommentDisplay({oneComment}) {
    // console.log(oneComment)
    return (
        <div className="comment-display">
            <h5>{oneComment.comments}</h5>
        </div> 
    )
}

export default CommentDisplay