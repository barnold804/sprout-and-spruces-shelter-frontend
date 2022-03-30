import React from 'react';
import CommentDisplay from './CommentDisplay';

function Comments({ oneAnimal }) {
    return (
        <div>
            <CommentDisplay />
            {/* <form className="comments-form">
                <input 
                type="text"
                id="comment"
                placeholder="Comments"
                value=""
                onchange={""}
                />
                <button type="submit"> Submit </button>
            </form> */}
        </div>
    )
}

export default Comments
