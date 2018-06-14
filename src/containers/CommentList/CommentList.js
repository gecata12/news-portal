import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Comment from './components/Comment';
import Button from 'Components/Button';
import './_commentList.scss';

class CommentList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isCommentsOpened: false
        };
    }

    componentDidUpdate() {
        if (!this.props.isOpened) {
            this.setState({
                isCommentsOpened: false
            });
        }
    }

    render() {
        const commentListLabel = (this.state.isCommentsOpened) ? 'Hide comments' : 'Show comments (' + this.props.comments.length + ')';
        const commentInstance = this.props.comments.map(comment =>
            <li key={comment.id} className="commentList__item"><Comment comment={comment} /></li>
        );

        return (
            <ul className='commentList'>
                <li className='commentList__actions'>
                    <Button
                        disabled='false'
                        onButtonClick={this.handleVisibilityToggle}
                        label={commentListLabel}
                        className="button button--secondary"
                    />
                </li>
                {(this.state.isCommentsOpened) &&
                    commentInstance
                }
            </ul>
        );
    }

    handleVisibilityToggle = () => {
        this.setState({
            isCommentsOpened: !this.state.isCommentsOpened
        });
    }
}

CommentList.propTypes = {
    comments: PropTypes.object.isRequired,
    isOpened: PropTypes.bool
};

CommentList.defaultProps = {
    isOpened: false
};

export default CommentList;