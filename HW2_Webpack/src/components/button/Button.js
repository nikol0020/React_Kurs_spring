import React, { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
    render(){
        return(
            <button className="button" disabled>some text</button>
        )
    }
}