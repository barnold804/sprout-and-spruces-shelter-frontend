import React from 'react'

function CommentDisplay({oneComment, handleDelete, id}) {

    function handleDeleteBtn() {
        console.log();
        fetch(`http://localhost:9292/comments/${id}` , {
            method: 'DELETE',
        })
        handleDelete(id)
    };
    // console.log(oneComment)
    return (
        <div className="comment-display">
            <h5>{oneComment.comments}</h5>
            <button className='delete-bttn' onClick={handleDeleteBtn}></button>
        </div> 
    )
}

export default CommentDisplay