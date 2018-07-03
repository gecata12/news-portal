import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import withModal from 'Hoc/withModal';

import Comment from './components/Comment';
import Button from 'Components/Button';
import './_commentList.scss';

class CommentList extends PureComponent {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        isOpened: PropTypes.bool,
        openModal: PropTypes.func,
        hiddenElements: PropTypes.array
    };

    static defaultProps = {
        isOpened: false,
        hiddenElements: []
    };

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
        const commentCount = this.props.comments.length - this.props.hiddenElements.length;
        const commentListLabel = (this.state.isCommentsOpened) ? 'Hide comments' : 'Show comments (' + commentCount + ')';
        const commentInstance = this.props.comments.map(comment =>
            <li key={comment.id} className="commentList__item">
                <Comment
                    comment={comment}
                    isHidden={this.props.hiddenElements.indexOf(comment.id) >= 0}
                    onCommentRemove={() => { this.props.openModal(comment.id); }}
                />
            </li>
        );

        if (commentCount <= 0) return null;

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

const CommentListWithModal = withModal(CommentList);

export default CommentListWithModal;
