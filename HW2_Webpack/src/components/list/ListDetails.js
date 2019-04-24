import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ListDetails.scss';


class ListDetails extends Component {
    render() {

        if (!this.props.movie) {
            return (
                <p>Choose movie</p>
            )
        }

        //  const genre = this.props.movie.genres.map(item => `${item} `);
        return (
            <div className='list-details'>
                <div className='list-details__picture'>
                    <img className='list-details__img' src={this.props.movie.poster_path} alt={this.props.movie.title}/>
                </div>
                <div className='list-details__detail'>
                    <h3 className='list-details__title'>{this.props.movie.title}</h3>
                    <div className='list-details__time-release'>
                        <span className='list-details__release-date'>{this.props.movie.release_date}</span>
                        <span className='list-details__time'>{this.props.movie.runtime} min</span>
                    </div>
                    <p className='list-details__overview'>{this.props.movie.overview}</p>
                </div>
                <div className='list-details__genre'>Film by {this.props.movie.genres.map(item => `${item} `)}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movie: state.active
    }
}

export default connect(mapStateToProps)(ListDetails);