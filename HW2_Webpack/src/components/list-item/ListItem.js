import React, {Component} from 'react';
import './ListItem.scss';

import PropTypes from 'prop-types';

const ListItem = (props) => {

    const {id, title, genres, release_date, poster_path} = props;

    return (

        <div className="list-item" key={ id }>
            <img src={poster_path} alt="picture" className="list-item__image"/>
            <div className="list-item__short-description">
                <h4 className="list-item__title">{ title }</h4>
                <span className="list-item__genre">{ genres }</span>
                <span className="list-item__year">{ release_date }</span>
            </div>
        </div>
    )
};

ListItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    genres: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string
};

export default ListItem;
