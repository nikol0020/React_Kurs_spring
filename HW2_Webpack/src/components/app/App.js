import React, {Component} from "react";
import './App.scss';
import dumbData from '../dumbData.js';
import PropTypes from 'prop-types';
//import * as axios  from 'axios';

import Header from '../header';
import Footer from '../footer';
import List from "../list";

export default class App extends Component {

    // state = {
    //     dumbData: []
    // };
    //
    // componentDidMount() {
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //         .then(res => {
    //             const dumbData = res.data;
    //             this.setState({ dumbData });
    //         });
    // }

    render() {
        return (

            <div className="app">
                <Header data={dumbData} />
                <List data={dumbData}/>
                <Footer/>
            </div>
        )
    }
};

App.propTypes = {
    dumbData: PropTypes.arrayOf(PropTypes.object).isRequired
};