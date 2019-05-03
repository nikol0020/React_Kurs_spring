import React, {Component} from 'react';
import './Sort.scss';
import Button from '../button';
import '../propTypes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sortMovies} from '../../store/actions/index';

class Sort extends Component {

    sortByDate = () => {

        return this.props.sortMovies(
            this.props.movies.sort((a, b) => {
                return (a.release_date < b.release_date) ? 1 : -1;
            })
        );
    };

    sortByRating = () => {
        return this.props.sortMovies(
            this.props.movies.sort((a, b) => {
                return (a.vote_count < b.vote_count) ? 1 : -1;
            })
        );
    };


    render() {
        return (
            <div className="sort">
                <span className="sort__text">Sort by</span>
                <Button className="button"
                        value="rel-s date"
                        active={false}
                        onClick={() => {
                            this.sortByDate()
                        }}
                />
                <Button className="button"
                        value="rating"
                        active={false}
                        onClick={() => {
                            this.sortByRating()
                        }}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.movies
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({sortMovies: sortMovies}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Sort);