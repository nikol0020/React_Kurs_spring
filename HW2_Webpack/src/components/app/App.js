import React, {Component} from "react";
import './App.scss';
import dumbData from '../dumbData.js';

import Header from '../header';
import Footer from '../footer';
import List from "../list";

const App = () => {

    return (
        <div className="app">
            <h1>React Todo App!</h1>
            <Header/>
            <List data={dumbData}/>
            <Footer/>
        </div>
    );
}

export default App;
