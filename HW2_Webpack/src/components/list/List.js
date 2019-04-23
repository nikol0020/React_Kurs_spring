import React, {Component}from "react";
import './List.scss';
import '../propTypes';
import ListItem from '../list-item';
//import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class List extends Component {

    elements() {
        return this.props.movie.map((item) => {

            const {id, ...itemProps} = item;
            return (
                <li key={id}>
                    <ListItem {...itemProps} > </ListItem>
                </li>
            )
        });
    };

    render() {
        return (
            <ul className="list">
                {this.elements()}
            </ul>
        )
    }
}
;

function mapStateToProps(state) {
    return {
        movie: state.movies
    };
};

export default connect(mapStateToProps)(List);