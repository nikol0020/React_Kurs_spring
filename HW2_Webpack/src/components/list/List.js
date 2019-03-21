import React, { Component }from "react";
import './List.scss';
import ListItem from '../list-item';

export default class List extends Component {
    render(){
        return(
            <ul className="list">
                <li className="list__item"><ListItem/></li>
                <li className="list__item"><ListItem/></li>
                <li className="list__item"><ListItem/></li>
            </ul>
        )
    }
}