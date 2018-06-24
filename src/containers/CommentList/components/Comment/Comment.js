import React from 'react';
import PropTypes from 'prop-types';

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

Comment.propTypes = {
    comment: PropTypes.object.isRequired
};

export default Comment;