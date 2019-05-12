import React, {Component} from "react";
import './App.scss';
import ErrorBoundary from '../error-boundary';
import ErrorPage from '../error-page';
import {connect} from 'react-redux';
import{fetchMovies} from '../../store/actions'

import Header from '../header';
import Footer from '../footer';
import List from '../list';
import ListDetails from '../list/ListDetails';
import {Route, Switch, Link} from 'react-router-dom';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchMovies());
    }

    render() {
        return (

            <div className="app">
                <ErrorBoundary>
                    <Header/>
                    <Link to="/errorPage" >Test Error Link</Link>
                    <Switch>
                        < Route exact path='/' component={List}/>
                        < Route exact path='/movie/:id' component={ListDetails}/>
                        < Route component={ErrorPage}/>
                    </Switch>
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