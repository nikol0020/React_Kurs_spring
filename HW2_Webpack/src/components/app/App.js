import React, {Component} from "react";
import './App.scss';
import dumbData from '../dumbData.js';
import ErrorBoundary from '../error-boundary';

import Header from '../header';
import Footer from '../footer';
import List from "../list";


export default class App extends Component {


    render() {
    return (
        <div className="app">
            <ErrorBoundary>
                <h1>React Todo App!!!</h1>
                <Header data={dumbData} />
                <List data={dumbData}/>
                <Footer/>
            </ErrorBoundary>
        </div>
    )};
};

