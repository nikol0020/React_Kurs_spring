import React, {Component} from "react";
import './Search.scss';
import Button from '../button';
import '../propTypes';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: 'TITLE',
            searchTxt: ''
        };
    }

    getFilteredData = filter => {
        const key = filter.toLowerCase();
        const filteredList = this.props.data.data.filter((item) => {

            return ( key === 'title') ? (item.title.toLowerCase().search(this.state.searchTxt.toLowerCase()) !== -1 ) :
                (item.genres.some((elem) => elem.toLowerCase().search(this.state.searchTxt.toLowerCase()) !== -1));
        });
        return filteredList
    };

    changeFilter = e => {
        this.setState({filter: e.target.value});
    };

    changeSearchTxt = e => {
        this.setState({searchTxt: e.target.value});
    };

    render() {
        const filteredData = this.getFilteredData(this.state.filter);
        return (
            <div className="search__box">
                <span className="search__text">FIND YOUR MOVIE</span>
                <br/>
                <input className="search__input" type="text" placeholder="SEARCH" onChange={this.changeSearchTxt}/>
                <hr/>
                <div className="search__buttons">
                    <div className="search__buttons-wrapper">
                        <span>SEARCH BY</span>
                        <Button
                            value="TITLE"
                            active={"TITLE" === this.state.filter}
                            onClick={this.changeFilter}
                        />
                        <Button
                            value="GENRE"
                            active={"GENRE" === this.state.filter}
                            onClick={this.changeFilter}
                        />
                    </div>
                    <Button
                        value="SEARCH"
                        active={"SEARCH" === this.state.filter}
                        onClick={this.changeFilter}
                        />
                </div>
                <div className="search__count">
                    <span className="search__count-qty">{filteredData.length}</span>
                    <span className="search__text">movies found</span>
                </div>
            </div>
        )
    }
};

