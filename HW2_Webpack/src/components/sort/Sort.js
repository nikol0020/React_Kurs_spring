import React, {Component} from 'react';
import './Sort.scss';
import { movieShape } from '../propTypes';
import PropTypes from 'prop-types';

import Button from '../button';

export default class Sort extends Component {
    render() {
        return (
            <div className="sort">
                <span className="sort__text">Sort by</span>
                <Button className="button" value="rel-s date"/>
                <Button className="button" value="rating"/>
            </div>
        )
    }
}

Sort.propTypes = {
    data: PropTypes.arrayOf(movieShape)
};