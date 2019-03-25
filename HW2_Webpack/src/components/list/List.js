import React, {Component} from "react";
import './List.scss';
import ListItem from '../list-item';
import PropTypes from 'prop-types';
import ErrorBoundary from '../error-boundary';

export default class List extends Component {

    render() {

        const elements = this.props.data.map((item) => {

            const {id, ...itemProps} = item;

            return (
                <li key={id}>
                    <ErrorBoundary>
                        <ListItem {...itemProps} />
                    </ErrorBoundary>
                </li>
            )
        });

        return (
            <ul className="list">
                {elements}
            </ul>
        )
    }
};

List.propTypes = {
    elements: PropTypes.node
};