import React, { Component } from 'react';

import ArticleList from 'Containers/ArticleList';
import Switch from 'Components/Switch';

import articles from '../fixtures';

export const SwitchContext = React.createContext();

export default class App extends Component {
    state = {
        isActionsVisible: true
    };

    toggleActionsVisibility = () => {
        this.setState({
            isActionsVisible: !this.state.isActionsVisible
        });
    };

    render() {
        return (
            <div className='container'>
                <h1 className="page-title">News portal</h1>
                <SwitchContext.Provider value={this.state} >
                    <Switch onStateChange={this.toggleActionsVisibility} />
                    <ArticleList articles = {articles} />
                </SwitchContext.Provider>
            </div>
        );
    }
}