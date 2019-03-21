import React, { Component } from "react";
import './Search.scss';

export default class Search extends Component {
    render(){
        return(
            <input className="search" type="text" placeholder="enter data"/>
        )
    }
}