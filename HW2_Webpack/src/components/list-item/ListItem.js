import React, {Component} from 'react';
import './ListItem.scss';

import PropTypes from 'prop-types';

const ListItem = (props) => {

    const {title, genres, release_date, poster_path} = props;
    const genre = genres.map(item => `${item} `);

    return (

        <div className="list-item" >
            <img src={poster_path} alt="picture" className="list-item__image"/>
            <div className="list-item__short-description">
                <h4 className="list-item__title">{ title }</h4>
                <span className="list-item__genre">{ genre }</span>
                <span className="list-item__year">{ release_date }</span>
            </div>
        </div>
    )
};

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired
};

export default ListItem;
