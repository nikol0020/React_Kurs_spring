import React, {Component} from "react";
import './Search.scss';

const Search = () => {
    return (
    <div  className="search__box">
        <span className="search__text">FIND YOUR MOVIE</span>
        <br/>
        <input className="search__input" type="text" placeholder="enter data"/>
        <hr/>
        <div className="search__buttons">
            <div className="search__buttons-wraper">
                <span>SEARCH BY</span>
                <input  className="search__button" type="button" value="TITLE" />
                <input  className="search__button" type="button" value="GENRE" />
            </div>
        <input className="search__button search__button-search" type="button" value="SEARCH" />
        </div>
    </div>
    )
};

export default Search;