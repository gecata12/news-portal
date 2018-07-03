import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import Truncate from 'Components/Truncate';
import CommentList from 'Containers/CommentList';
import './_article.scss';

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpened: PropTypes.bool,
        isHidden: PropTypes.bool,
        onExpand: PropTypes.func,
        onRemove: PropTypes.func,
        linesToShow: PropTypes.number
    };

    static defaultProps = {
        isOpened: false,
        isHidden: false,
        onExpand: () => {},
        onRemove: () => {},
        linesToShow: 3
    };

    render() {
        const {article, isOpened, isHidden, linesToShow, onExpand, onRemove} = this.props;

        const buttonLabel = isOpened ? 'Hide article' : 'Show full article';
        const articleClasses = isOpened ? 'article' : 'article article--hidden';

        if (isHidden) return null;

        return (
            <section className={articleClasses}>
                <header className='article__header'>
                    <h3 className='article__title'>{article.title}</h3>
                    <div className="actions">
                        <Button
                            disabled='false'
                            onButtonClick={onExpand}
                            label={buttonLabel}
                            className='article__button button button--secondary'
                        />
                        <Button
                            disabled='false'
                            onButtonClick={onRemove}
                            label='Remove article'
                            className='article__button button button--remove'
                        />
                    </div>
                </header>
                <main>
                    <Truncate className='article__text' text={article.text} lines={isOpened ? false : linesToShow}/>
                    {isOpened &&
                    <React.Fragment>
                        <div className='article__date'>{article.date}</div>
                        {article.comments &&
                        <CommentList comments={article.comments} isOpened={isOpened}/>
                        }
                    </React.Fragment>
                    }
                </main>
            </section>
        );
    }
}

export default Article;
