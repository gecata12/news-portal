import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import withModal from 'Hoc/withModal';

import Article from './components/Article';
import './_articleList.scss';

class ArticleList extends PureComponent {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        openModal: PropTypes.func,
        hiddenElements: PropTypes.array
    };

    static defaultProps = {
        openModal: () => {},
        hiddenElements: []
    };

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
                    isOpened = {this.state.openArticleId === article.id}
                    isHidden = {this.props.hiddenElements.indexOf(article.id) >= 0}
                    onExpand={this.toggleVisibility(article.id)}
                    onRemove={() => { this.props.openModal(article.id); }}
                />
            </li>
        );

        return (
            <ul className='articleList'>
                {articleInstance}
            </ul>
        );
    }

    toggleVisibility = (openArticleId) => () => {
        this.setState({
            openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
        });
    }
}

const ArticleListWithModal = withModal(ArticleList);

export default ArticleListWithModal;