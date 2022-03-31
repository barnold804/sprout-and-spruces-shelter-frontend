import React, { useState } from 'react';
import CommentDisplay from './CommentDisplay';


function Comments({handleCommentFormSubmit, commentArray, name, setName, comments, handleChange, onDelete, onEditComment}) {

    const [updatedComment, setComments] = useState(commentArray.comments)
    const showComments = commentArray.map((oneComment) => <CommentDisplay 
        key={oneComment.id} 
        oneComment={oneComment}
        handleDelete={onDelete}
        id={oneComment.id}
        handleEditComment={onEditComment}
        setComments={setComments}
        handleEditBtn={handleEditBtn}
    />)

    function handleEditBtn(e) {
        e.preventDefault()

        fetch(`http://localhost:9292/comments/${commentArray.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comments: updatedComment 
            })
        })
        .then((r) => r.json())
        .then(updatedComment => {
            onEditComment(updatedComment)
        })
    }

    return (
        <div>
            
            <form className="comments-form" onSubmit={(e)=>{handleCommentFormSubmit(e)}}>
                {/* <div className='comment-box-name'>
                    <span>Name:</span>
                        <input type = 'text' name = 'name' value = {name} onChange={(e) => setName(e.target.value)} />
                </div> */}

                <div className='comment-box-comment'>
                    <h1 className='leave-comment'>Leave a Comment</h1>
                    <input 
                        className='comment-input-box' 
                        type='text' 
                        id='comment' 
                        value={comments} 
                        onChange={(e)=>handleChange(e)} 
                    />
                </div>
                
                <button className= 'bttn-card' type='submit'> Add Comment</button>
            </form>

            <div className='comment-box'>
                {showComments}
            </div>
            

        </div>
    )
}

export default Comments

