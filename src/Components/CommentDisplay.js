import React from 'react'
import { FiTrash } from "react-icons/fi";

function CommentDisplay({oneComment, handleDelete, id}) {

    function handleDeleteBtn() {
        fetch(`http://localhost:9292/comments/${id}` , {
            method: 'DELETE',
        })
        handleDelete(id)
    };
    
    return (
        <div className="comment-display">
            <h5>{oneComment.comments}</h5>
            <button className='delete-bttn' onClick={handleDeleteBtn}><FiTrash /></button>
        </div> 
    )
}

export default CommentDisplay
