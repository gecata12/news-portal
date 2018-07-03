import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from 'Root/store/createStore';

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
            <Provider store={store}>
                <div className='container'>
                    <h1 className="page-title">News portal</h1>
                    <SwitchContext.Provider value={this.state} >
                        <Switch onStateChange={this.toggleActionsVisibility} />
                        <ArticleList articles = {articles} />
                    </SwitchContext.Provider>
                </div>
            </Provider>
        );
    }
}