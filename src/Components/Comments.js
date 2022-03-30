import React, { useState } from 'react';
import CommentDisplay from './CommentDisplay';


function Comments({handleCommentFormSubmit, commentArray}) {

    const [comments, setComments] = useState("");
    // console.log(commentArray)
    const [name, setName] = useState("");


    const showComments = commentArray.map((oneComment) => {
        // console.log(oneComment)
        return <CommentDisplay key={oneComment.id} oneComment={oneComment} />
    })

    


    return (
        <div>
            <div className='comment-box'>
                {showComments}
            </div>
            
            <form className="comments-form" onSubmit={(e)=>{handleCommentFormSubmit(e)}}>
                <div className='comment-box-name'>
                    <span>Name:</span>
                        <input type = 'text' name = 'name' value = {name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='comment-box-comment'>
                    <span>Comment:</span>
                    <input type = 'text' name = 'comment' value = {comments} onChange={(e) => setComments(e.target.value)} />
                </div>
                
                <button className = 'bttn-card' type = 'submit'> Submit Comment</button>
            </form>
            

        </div>
    )
}

export default Comments

