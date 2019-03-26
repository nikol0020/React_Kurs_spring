import React from "react";
import './App.scss';
import dumbData from '../dumbData.js';
import ErrorBoundary from '../error-boundary';

import Header from '../header';
import Footer from '../footer';
import List from "../list";


const App = () => {

    return (

        <div className="app">
            <ErrorBoundary>
                <Header data={dumbData}/>
                <List data={dumbData}/>
                <Footer/>
            </ErrorBoundary>
        </div>
    )
};

export default App;
