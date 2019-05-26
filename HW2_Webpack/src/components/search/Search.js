import React, {Component} from "react";
import './Search.scss';
import Button from '../button';
import '../propTypes';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {searchFilter} from '../../store/actions/index';
import {changeFilter} from '../../store/actions/index';

class Search extends Component {
    getFilteredData(filterSearch, changeFilter) {
        const filteredList = this.props.movies.filter((item) => {
            return ( changeFilter.toLowerCase() === 'title') ?
                (item.title.toLowerCase().search(filterSearch.toLowerCase()) !== -1 ) :
                (item.genres.some((elem) => elem.toLowerCase().search(filterSearch.toLowerCase()) !== -1));
        });
        return this.props.searchFilter(filteredList);
    };

    getSearchType = (value) => {
        return this.props.changeFilter(value);
    };

    render() {
        return (
            <div className="search__box">
                <span className="search__text">FIND YOUR MOVIE</span>
                <br/>
                <input className="search__input"
                       type="text"
                       placeholder="SEARCH"
                       ref={(input) => {
                           this.changeSearchInput = input
                       }}
                />
                <hr/>
                <div className="search__buttons">
                    <div className="search__buttons-wrapper">
                        <span>SEARCH BY</span>
                        <Button
                            value="TITLE"
                            active={"TITLE" === this.props.typeFilter}
                            onClick={() => this.getSearchType(event.target.value)}
                        />
                        <Button
                            value="GENRE"
                            active={"GENRE" === this.props.typeFilter}
                            onClick={() => this.getSearchType(event.target.value)}
                        />
                    </div>
                    <Link to={`/movies`}>
                        <Button
                            value="SEARCH"
                            // active={"SEARCH" === this.state.filter}
                            onClick={() => this.getFilteredData(this.changeSearchInput.value, this.props.typeFilter)}
                        />
                    </Link>
                </div>
                <div className="search__count">
                    <span className="search__count-qty">{this.props.count}</span>
                    <span className="search__text">movies found</span>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        movies: state.movies.movies,
        typeFilter: state.searchFilter.changeFilter,
        count: state.searchFilter.movies == null ? 0 : state.searchFilter.movies.length
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        searchFilter: searchFilter,
        changeFilter: changeFilter
    }, dispatch)
};


export default connect(mapStateToProps, matchDispatchToProps)(Search);

