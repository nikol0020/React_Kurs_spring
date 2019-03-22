import React, {Component} from 'react';
import './Sort.scss';

export default class Sort extends Component {
    render() {
        return (
            <div className="sort">
                <span>Sort by</span>
                <input className="sort__buttons" type="button" value="release date"/>
                <input className="sort__buttons" type="button" value="rating"/>
            </div>
        )
    }
}