import React, { Component } from 'react';
import './Container.scss';

import List from '../list';


export default class Container extends Component {
    render(){
        return (
            <div className='container'>
                <List data={ this.props.data }/>
            </div>
        )
    }
}