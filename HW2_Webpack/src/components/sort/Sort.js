import React, {Component} from 'react';
import './Sort.scss';
import Button from '../button';
import '../propTypes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sortByDate} from '../../store/actions/index';

class Sort extends Component {

//     sortMoviesByDate = this.props.movies.sort( (a, b) => {
//     return (a.release_date < b.release_date ? 1 : -1);
// });

    sortByDate = () => {
        return this.props.sortByDate(
            this.props.movies.sort((a, b) => {
                return (a.release_date < b.release_date) ? 1 : -1;
            })
        );
    };

    sortByRating = () => {
        return this.props.sortByDate(
            this.props.movies.sort((a, b) => {
                return (a.vote_average < b.vote_average) ? 1 : -1;
            })
        );
    };


    render() {
        return (
            <div className="sort">
                <span className="sort__text">Sort by</span>
                <Button className="button"
                        value="rel-s date"
                        onClick={() => {this.sortByDate()}}
                />
                <Button className="button"
                        value="rating"
                        onClick={() => {this.sortByRating()}}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({sortByDate: sortByDate}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Sort);