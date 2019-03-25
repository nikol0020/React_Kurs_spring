import React, {Component} from "react";
import './Search.scss';
import PropTypes from 'prop-types';



export default class Search extends Component {

    // static propTypes = {
    //     count: (props, propName, componentName) => {
    //         const value = props[propName];
    //
    //         if (typeof  value === 'number' && !isNaN(value)) {
    //             return null;
    //         }
    //
    //         return new TypeError(`${componentName}: ${propName} must be number`);
    //     }
    // };

    constructor(props) {
        super(props);
        this.state = {data: this.props.data.data};

        this.filterList = this.filterList.bind(this);
    }

    filterList(e) {

        const key = e.target.value.toLowerCase();
        const val = document.getElementById('inputSearch').value;
        const filteredList = this.props.data.data.filter((item) => {

            return ( key === 'title') ? (item.title.toLowerCase().search(val.toLowerCase()) !== -1 ) :
                (item.genres.some((elem) => elem.toLowerCase().search(val.toLowerCase()) !== -1));
        });

        this.setState({data: filteredList, count: filteredList.length});
    };

    render() {
        return (
            <div className="search__box">
                <span className="search__text">FIND YOUR MOVIE</span>
                <br/>
                <input className="search__input" type="text" placeholder="SEARCH" id="inputSearch"/>
                <hr/>
                <div className="search__buttons">
                    <div className="search__buttons-wraper">
                        <span>SEARCH BY</span>
                        <input className="search__button" type="button" value="TITLE" onClick={this.filterList}/>
                        <input className="search__button" type="button" value="GENRE" onClick={this.filterList}/>
                    </div>
                    <input type="button" className="search__button search__button-search" value="SEARCH"/>
                </div>
                <div className="search__count">
                    <span className="search__count-qty">{this.state.count}</span>
                    <span className="search__text">movies found</span>
                </div>
            </div>
        )
    }
};
