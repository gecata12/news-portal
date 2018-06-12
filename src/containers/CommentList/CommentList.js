import React, {PureComponent} from 'react';
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


    render() {
        const {isOpened} = this.props;
        const commentListLabel = (this.state.isCommentsOpened) ? 'Hide comments' : 'Show comments (' + this.props.comments.length + ')';
        const commentInstance = this.props.comments.map(comment =>
            <li key={comment.id} className="commentList__item"><Comment comment={comment} /></li>
        );

        if (!isOpened) {
            this.setState({
                isCommentsOpened: false
            });
        }

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

export default CommentList;