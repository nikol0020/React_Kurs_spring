import React from "react";
import './List.scss';
import '../propTypes';
import ListItem from '../list-item';
import ErrorPage from '../error-page'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../../store/actions/index';

const List = (props) => {

    if (props.error) {
        return (
            <ErrorPage error='Page not found 404'/>
        )
    }

    const elements = () => {
        return props.movies.map((item) => {

            const {id, ...itemProps} = item;
            return (
                <li onClick={() => props.select(item)} key={id}>
                    <ListItem {...itemProps} > </ListItem>
                </li>
            )
        });
    };

    return (
        <ul className="list">
            {elements()}
        </ul>
    )
};

function mapStateToProps(state) {
    return {
        movies: state.searchFilter.movies ? state.searchFilter.movies : state.movies.movies,
        error: state.movies.error
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({select: select}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(List);
