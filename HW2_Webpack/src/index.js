import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/index";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './store/reducers/index';

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(allReducers, devTool);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));
