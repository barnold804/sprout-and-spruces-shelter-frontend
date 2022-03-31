import React from 'react'
import { FiTrash, FiEdit3 } from "react-icons/fi";

function CommentDisplay({oneComment, handleDelete, id, handleEditComment, setComments}) {


    function handleDeleteBtn() {
        fetch(`http://localhost:9292/comments/${id}` , {
            method: 'DELETE',
        })
        handleDelete(id)
    };

    function handleAnswerChange(e) {
        handleEditComment(id, parseInt(e.target.value));
    }
    
    return (
        <div className="comment-display">
            <h5>{oneComment.comments}</h5>
            <form className='edit-form'>
                <input onChange={(e) => setComments(e.target.value)}
                />
                    <button className='delete-bttn' onClick={handleDeleteBtn}><FiTrash /></button>
                    <button className='edit-bttn' onSubmit={handleAnswerChange}><FiEdit3 /></button>
            </form>
        </div> 
    )
}

export default CommentDisplay
