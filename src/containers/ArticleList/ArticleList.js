import React, {PureComponent} from 'react';
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

export default ArticleList;