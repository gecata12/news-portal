import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';

import './_comment.scss';

const Comment = (props) => {
    const {comment, onCommentRemove, isHidden} = props;

    if (isHidden) return null;

    return (
        <div className="comment">
            <div className="actions">
                <Button
                    disabled='false'
                    onButtonClick={onCommentRemove}
                    label='Remove comment'
                    className='button button--remove'
                />
            </div>
            <span className="comment__author">{comment.user}</span>
            <p className="comment__text">{comment.text}</p>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
    isHidden: PropTypes.bool,
    onCommentRemove: PropTypes.func
};

Comment.propTypes = {
    isHidden: false,
    onCommentRemove: () => {}
};

export default Comment;