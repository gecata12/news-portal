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
        linesToShow: PropTypes.number,
        onClick: PropTypes.func
    };

    static defaultProps = {
        isOpened: false,
        linesToShow: 3,
        onClick: () => {}
    };

    render() {
        const {article, isOpened, linesToShow, onClick} = this.props;

        const buttonLabel = isOpened ? 'Hide article' : 'Show article';
        const articleClasses = isOpened ? 'article' : 'article article--hidden';

        return (
            <section className={articleClasses}>
                <header className='article__header'>
                    <h3 className='article__title'>{article.title}</h3>
                    <Button
                        disabled='false'
                        onButtonClick={onClick}
                        label={buttonLabel}
                        className='article__button button button--secondary'
                    />
                </header>
                <main>
                    <Truncate className='article__text' text={article.text} lines={isOpened ? false : linesToShow}/>
                    {isOpened &&
                        <React.Fragment>
                            <div className='article__date'>{article.date}</div>
                            {article.comments &&
                                <CommentList comments={article.comments} isOpened={isOpened} />
                            }
                        </React.Fragment>
                    }
                </main>
            </section>
        );
    }
}

export default Article;
