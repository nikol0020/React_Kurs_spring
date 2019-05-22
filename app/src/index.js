import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/index";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import allReducers from './store/reducers/index';
import {BrowserRouter} from 'react-router-dom';

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composedEnhancers(applyMiddleware(thunk));
const store = createStore(allReducers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));


/*
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

render((
        <Router>
            <App movies={window.__PRELOADED_STATE__}/>
        </Router>),
    document.getElementById('root')
);
*/
