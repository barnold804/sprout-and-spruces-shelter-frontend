import React from 'react'
import { FiTrash, FiEdit3 } from "react-icons/fi";

function CommentDisplay({oneComment, handleDelete, id, handleEditComment}) {

    // const [updatedComment, setComments] = useState(oneComment.comments)

    function handleDeleteBtn() {
        fetch(`http://localhost:9292/comments/${id}` , {
            method: 'DELETE',
        })
        handleDelete(id)
    };

    // function handleEditBtn(e) {
    //     e.preventDefault()

    //     fetch(`http://localhost:9292/comments/${id}`,{
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             comments: updatedComment 
    //         })
    //     })
    //     .then((r) => r.json())
    //     .then(updatedComment => {
    //         handleEditComment(updatedComment)
    //     })
    // }
    
    return (
        <div className="comment-display">
            <h5>{oneComment.comments}</h5>
            {/* <form className='edit-form' onSubmit={(e) =>{handleEditBtn(e)}}>
                <input onChange={(e) => setComments(e.target.value)}> */}
                    <button className='delete-bttn' onClick={handleDeleteBtn}><FiTrash /></button>
                    <button className='edit-bttn'><FiEdit3 /></button>
                {/* </input>
            </form> */}
        </div> 
    )
}

export default CommentDisplay
