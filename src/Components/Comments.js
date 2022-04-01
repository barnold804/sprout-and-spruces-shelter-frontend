import React from 'react';
import CommentDisplay from './CommentDisplay';


function Comments({handleCommentFormSubmit, commentArray, name, setName, comments, handleChange, onDelete, handleClickEditBtn,onSubmitEditComment, handleChangeEditComment}) {
    
    const showComments = commentArray.map((oneComment) => <CommentDisplay 
        key={oneComment.id} 
        oneComment={oneComment}
        handleDelete={onDelete}
        id={oneComment.id}
        handleClickEditBtn={handleClickEditBtn}
        comments={comments}
        onSubmitEditComment={onSubmitEditComment}
        handleChangeEditComment={handleChangeEditComment}
    />)

    return (
        <div className='comments-bg'>
            <form className="comments-form" onSubmit={(e)=>{handleCommentFormSubmit(e)}}>
                <div className='comment-box-comment'>
                    <h1 className='leave-comment'>Leave a Comment</h1>
                    <input 
                        className='comment-input-box' 
                        type='text' 
                        id='comment' 
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

