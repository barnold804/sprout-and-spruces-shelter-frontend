import React, { useState } from 'react'
import { FiTrash, FiEdit3 } from "react-icons/fi";

function CommentDisplay({oneComment, handleDelete, id, handleClickEditBtn, setComments, comments, onSubmitEditComment, handleChangeEditComment}) {
    const [commentEditBool, setCommentEditBool] = useState(false)

    function handleClickEditState(e) {
        e.preventDefault()
        setCommentEditBool(true)
        console.log(comments);
    }

    function handleDeleteBtn() {
        fetch(`http://localhost:9292/comments/${id}` , {
            method: 'DELETE',
        })
        handleDelete(id)
    };

    function setEditBack(e) {
        e.preventDefault()
        setCommentEditBool(false);
    }

    return (
        <div className="comment-display">
            {commentEditBool ? <input className='edit-comment-input' defaultValue={oneComment.comments} onChange={handleChangeEditComment}></input> : <div className='one-commment-display'>{oneComment.comments}</div>}
            <form className='edit-form' id={id} onSubmit={(e) => {
                onSubmitEditComment(e)
                setEditBack(e)
            }}>
                <button className='delete-bttn' onClick={handleDeleteBtn}><FiTrash /></button>
                <button className='edit-bttn' onClick={(e) => {
                    handleClickEditState(e);
                    handleClickEditBtn(e);
                }}><FiEdit3 /></button>
                {commentEditBool && <button className='save-button'>Save</button>}
            </form>
        </div> 
    )
}

export default CommentDisplay
