import React from 'react';
import CommentDisplay from './CommentDisplay';


function Comments({handleCommentFormSubmit, commentArray, name, setName, comments, setComments,onDelete}) {

    

    const showComments = commentArray.map((oneComment) => <CommentDisplay key={oneComment.id} oneComment={oneComment} handleDelete={onDelete} id={oneComment.id} />)

    


    return (
        <div>
            <div className='comment-box'>
                {showComments}
            </div>
            
            <form className="comments-form" onSubmit={(e)=>{handleCommentFormSubmit(e)}}>
                <div className='comment-box-name'>
                    {/* <span>Name:</span>
                        <input type = 'text' name = 'name' value = {name} onChange={(e) => setName(e.target.value)} /> */}
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

