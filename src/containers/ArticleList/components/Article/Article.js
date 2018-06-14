import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import CommentList from 'Containers/CommentList';
import './_article.scss';

class Article extends Component {
    render() {
        const {article, isOpened, onClick} = this.props;

        const buttonLabel = isOpened ? 'Hide article' : 'Show article';
        const articleClasses = isOpened? 'article' : 'article article--hidden';

        return (
            <section className={articleClasses}>
                <header className='article__header'>
                    <div className='article__title'>{article.title}</div>
                    <Button
                        disabled='false'
                        onButtonClick={onClick}
                        label={buttonLabel}
                        className='article__button button button--secondary'
                    />
                </header>
                {isOpened &&
                    <main>
                        <div className='article__text'>{article.text}</div>
                        <div className='article__date'>{article.date}</div>

                        {article.comments &&
                            <CommentList comments={article.comments} isOpened={isOpened} />
                        }
                    </main>
                }
            </section>
        );
    }
}


Article.propTypes = {
    article: PropTypes.object.isRequired,
    isOpened: PropTypes.bool,
    onClick: PropTypes.func
};

Article.defaultProps = {
    isOpened: false,
    onClick: () => {}
};

export default Article;
