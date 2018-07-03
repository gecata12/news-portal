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
        const { articles, hiddenElements, openModal} = this.props;
        const { openArticleId } = this.state;

        const articleInstance = articles.map(article =>
            <li key={article.id} className="articleList__item">
                <Article
                    article={article}
                    isOpened = {openArticleId === article.id}
                    isHidden = {hiddenElements.indexOf(article.id) >= 0}
                    onExpand={this.toggleVisibility(article.id)}
                    onRemove={() => { openModal(article.id); }}
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