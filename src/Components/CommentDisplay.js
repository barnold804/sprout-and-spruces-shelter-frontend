import React from 'react'

function CommentDisplay({oneComment, handleDelete, id}) {

    function handleDeleteBtn() {
        fetch(`http://localhost:9292/comments/${id}` , {
            method: 'DELETE',
        })
        handleDelete()
    };
    
    return (
        <div className="comment-display">
            <h5>{oneComment.comments}</h5>
            <button className='delete-bttn' onClick={handleDeleteBtn}>X</button>
        </div> 
    )
}

export default CommentDisplay
