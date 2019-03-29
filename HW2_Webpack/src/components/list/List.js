import React from "react";
import './List.scss';
import {movieShape} from '../propTypes';
import PropTypes from 'prop-types';
import ListItem from '../list-item';

const List = (props) => {

    const elements = props.data.map((item) => {

        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                <ListItem {...itemProps} > </ListItem>
            </li>
        )
    });

    return (
        <ul className="list">
            {elements}
        </ul>
    )
};

List.propTypes = {
    data: PropTypes.arrayOf(movieShape)
};

export default List;