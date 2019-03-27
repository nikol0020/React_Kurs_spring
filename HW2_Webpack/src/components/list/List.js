import React from "react";
import './List.scss';
import '../propTypes';
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

export default List;