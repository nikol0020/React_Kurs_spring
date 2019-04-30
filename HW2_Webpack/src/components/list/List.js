import React, {Component} from "react";
import './List.scss';
import '../propTypes';
import ListItem from '../list-item';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../../store/actions/index';

class List extends Component {

    elements() {
        return this.props.movies.map((item) => {

            const {id, ...itemProps} = item;
            return (
                <li onClick={() => this.props.select(item)} key={id}>
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
};

function mapStateToProps(state) {
    if (state.searchFilter.movies) {
        return {movies: state.searchFilter.movies}
    }
    return {
        movies: state.movies
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({select: select}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(List);


/******переделать на функцию ****/