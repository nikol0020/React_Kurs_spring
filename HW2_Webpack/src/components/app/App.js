import React, {Component} from "react";
import './App.scss';
import ErrorBoundary from '../error-boundary';
import ErrorPage from '../error-page';
import EmptyPage from '../empty-page';
import {connect} from 'react-redux';
import{fetchMovies} from '../../store/actions'

import Header from '../header';
import Footer from '../footer';
import List from '../list';
import ListDetails from '../list/ListDetails';
import {Route, Switch, Link, Redirect} from 'react-router-dom';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchMovies());
    }

    render() {
        return (
            <div className="app">
                <ErrorBoundary>
                    <Header/>
                    <Link to="/404" >Test Error Link</Link>
                    <Link to="/wrongPath" >Test Wrong Path</Link>
                    <Switch>
                        {/*< Route exact path='/' component={EmptyPage}/>*/}
                        < Route exact path='/' component={List}/>
                        < Route exact path='/movie/:id' component={ListDetails}/>
                        < Route exact path='/404' component={ErrorPage}/>
                        < Redirect to="/404"/>
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