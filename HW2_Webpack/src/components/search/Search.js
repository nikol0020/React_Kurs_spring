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
    };


    changeFilter = e => {
        this.setState({filter: e.target.value});
    };

    changeSearchTxt = e => {
        const filteredData = this.props.setFilteredData(this.state.filter);
        this.setState({searchTxt: e.target.value});
        this.props.setFilteredData ( filteredData);
    };

    render() {
        return (
            <div className="search__box">
                <span className="search__text">FIND YOUR MOVIE</span>
                <br/>
                <input className="search__input" id="searchInput" type="text" name="searchInput" placeholder="SEARCH" onChange={this.changeSearchTxt}/>
                <hr/>
                <div className="search__buttons">
                    <div className="search__buttons-wrapper">
                        <span>SEARCH BY</span>
                        <Button
                            value="TITLE"
                            active={"TITLE" === this.state.filter}
                            onClick={this.changeFilter}
                            id="buttonTitle"
                        />
                        <Button
                            value="GENRE"
                            active={"GENRE" === this.state.filter}
                            onClick={this.changeFilter}
                            id="buttonGenre"
                        />
                    </div>
                    <Button
                        value="SEARCH"
                        active={"SEARCH" === this.state.filter}
                        onClick={this.changeFilter}
                        />
                </div>
                <div className="search__count">
                    <span className="search__count-qty"></span>
                    <span className="search__text">movies found</span>
                </div>
            </div>
        )
    }
};

