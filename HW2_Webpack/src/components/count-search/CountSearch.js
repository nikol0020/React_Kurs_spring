import React, { Component } from 'react';
import './CountSearch.scss';

export default class CountSearch extends Component {
    render(){
        return (
            <div className="count-search">
                <div className="count-search__count">7</div>
                <span className="count-search__text">movies found</span>
            </div>
        )
    }
}