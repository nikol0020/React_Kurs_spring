import React, {Component} from "react";
import './App.scss';
import dumbData from '../dumbData.js';

import Header from '../header';
import Footer from '../footer';
import Container from "../container/Container";

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <h1>React Todo App!</h1>
                <Header/>
                <Container data={dumbData}/>
                <Footer/>
            </div>
        );
    }
}
