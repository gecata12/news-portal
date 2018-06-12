import React, { Component } from 'react';
import ArticleList from 'Containers/ArticleList';
import articles from '../fixtures';

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className="page-title">News portal</h1>
                <ArticleList articles = {articles} />
            </div>
        );
    }
}