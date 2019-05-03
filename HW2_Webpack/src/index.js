import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/index";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import allReducers from './store/reducers/index';

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composedEnhancers ( applyMiddleware(thunk));
const store = createStore(allReducers, middleware);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));
