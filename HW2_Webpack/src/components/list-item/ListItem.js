import React, { Component } from 'react';
import './ListItem.scss';

export default class ListItem extends Component {
    render(){
        return (
            <div className="list-item">
                <img src="#" alt="picture" className="list-item__image"/>
                <p className="list-item__short-description">
                    <h4 className="list-item__title">JFJHKHJGKG</h4>
                    <span className="list-item__genre">ganre</span>
                    <span className="list-item__year">year</span>
                </p>

            </div>
        )
    }
}