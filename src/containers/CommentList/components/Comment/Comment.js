import React from 'react';
import './_comment.scss';

const Comment = (props) => {
    const {comment} = props;

    return (
        <div className="comment">
            <span className="comment__author">{comment.user}</span>
            <p className="comment__text">{comment.text}</p>
        </div>
    );
};

export default Comment;