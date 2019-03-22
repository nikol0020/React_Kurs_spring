import React, {Component} from 'react';
import './ListItem.scss';

export default class ListItem extends Component {

    render() {

        const {id, title, genres, release_date} = this.props;
        return (

            <div className="list-item" key={ id }>
                <img src="#" alt="picture" className="list-item__image"/>
                <p className="list-item__short-description">
                    <h4 className="list-item__title">{ title }</h4>
                    <span className="list-item__genre">{ genres }</span>
                    <span className="list-item__year">{ release_date }</span>
                </p>
            </div>

        )
    }
}
