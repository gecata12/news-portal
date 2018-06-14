import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Article from './components/Article';
import './_articleList.scss';

class ArticleList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            openArticleId: null
        };
    }

    render() {
        const articleInstance = this.props.articles.map(article =>
            <li key={article.id} className="articleList__item">
                <Article
                    article={article}
                    isOpened = {this.state.openArticleId == article.id}
                    onClick={this.handleVisibilityToggle(article.id)}
                />
            </li>
        );

        return (
            <ul className='articleList'>
                {articleInstance}
            </ul>
        );
    }

    handleVisibilityToggle = (openArticleId) => () => {
        this.setState({
            openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
        });
    }
}

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
};

export default ArticleList;