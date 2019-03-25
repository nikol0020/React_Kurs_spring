import React, {Component} from "react";
import './App.scss';
import dumbData from '../dumbData.js';
import PropTypes from 'prop-types';
import ErrorBoundary from '../error-boundary';

import Header from '../header';
import Footer from '../footer';
import List from "../list";


export default class App extends Component {

    render() {
        return (

            <div className="app">
                <ErrorBoundary>
                    <Header data={dumbData}/>
                    <List data={dumbData}/>
                    <Footer/>
                </ErrorBoundary>
            </div>
        )
    }
};

App.propTypes = {
    dumbData: PropTypes.arrayOf(PropTypes.object).isRequired
};