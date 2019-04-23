import React, {Component} from "react";
import './App.scss';
import dumbData from '../dumbData.js';
import ErrorBoundary from '../error-boundary';
import { bindActionCreators } from 'react-redux';
import { connect } from 'react-redux';

import Header from '../header';
import Footer from '../footer';
import List from "../list";


class App extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         data: { dumbData }
    //     }
    // }

    // getFilteredData = filter => {
    //     const key = filter.toLowerCase();
    //     const filteredList = this.props.data.data.filter((item) => {
    //
    //         return ( key === 'title') ?
    //             (item.title.toLowerCase().search(this.state.searchTxt.toLowerCase()) !== -1 ) :
    //             (item.genres.some((elem) => elem.toLowerCase().search(this.state.searchTxt.toLowerCase()) !== -1));
    //     });
    //     return this.setState ({ data: { filteredList }})
    // };

    render() {
    return (

        <div className="app">
            <ErrorBoundary>
                <Header data={dumbData} filteredItems={this.props.getFilteredData}/>
                <List data={dumbData}/>
                <Footer/>
            </ErrorBoundary>
        </div>
    )};
};

function mapStateToProps(state) {
    return {
        data: state.movies
    };
};

export default connect(mapStateToProps)(App);


