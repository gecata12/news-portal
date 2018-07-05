import uuid from 'uuid/v1';

import {
    ARTICLE_ADD,
    ARTICLE_REMOVE,
    COMMENT_ADD,
    COMMENT_REMOVE
} from '../store/constants';

// actionCreators
export const addArticle = articleText => ({
    type: ARTICLE_ADD,
    articleText
});

export const removeArticle = articleId => ({
    type: ARTICLE_REMOVE,
    articleId
});

export const addComment = commentText => ({
    type: COMMENT_ADD,
    commentText
});

export const removeComment = commentId => ({
    type: COMMENT_REMOVE,
    commentId
});

// initialState
const initialState = {
    articles: []
};

// actionHandlers
const actionHandlers = {
    [ARTICLE_ADD]: (state, action) => {
        const { articleTitle, articleText } = action;
        const newArticle = {
            id: uuid(),
            title: articleTitle,
            text: articleText,
            date: Date.now()
        };

        console.log('add task reducer ----- ', articleText);

        return {
            ...state,
            articles: state.articles.concat([newArticle])
        };
    },
    [ARTICLE_REMOVE]: (state, action) => {
        const { articleId } = action;

        console.log('remove task reducer ----- ', articleId);
        return {
            ...state,
            articles: state.articles.filter(t => t.id !== articleId)
        };
    },
    [COMMENT_ADD]: (state, action) => {
        const { articleId, commentText, commentUser } = action;
        const newComment = {
            id: uuid(),
            text: commentText,
            user: commentUser
        };

        const newArticleArray = state.articles.concat([newComment]);

        console.log('add comment reducer ----- ', commentText, articleId);

        return {
            ...state,
            articles: newArticleArray
        };
    },
    [COMMENT_REMOVE]: (state, action) => {
        const { articleId, commentId } = action;

        console.log('remove comment reducer ----- ', commentId, articleId);
        return {
            ...state,
            articles: state.articles.filter(t => t.id !== commentId)
        };
    },
};

const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type];
    return handler ? handler(state, action) : state;
};

export default reducer;
