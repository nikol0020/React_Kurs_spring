import React, {Component} from "react";
import './App.scss';
import ErrorBoundary from '../error-boundary';
import {connect} from 'react-redux';
import{fetchMovies} from '../../store/actions'

import Header from '../header';
import Footer from '../footer';
import List from '../list';
import ListDetails from '../list/ListDetails';
import {Route} from 'react-router-dom';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchMovies());
    }

    render() {
        return (

            <div className="app">
                <ErrorBoundary>
                    <Header/>
                    < Route exact path='/' component={List}/>
                    < Route exact path='/movie/:id' component={ListDetails}/>
                    <Footer/>
                </ErrorBoundary>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    movies: state.movies.movies,
});

export default connect(mapStateToProps)(App);