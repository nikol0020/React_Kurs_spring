import React, {Component} from "react";
import './Search.scss';
import Button from '../button';
import '../propTypes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchFilter} from '../../store/actions/index';

class Search extends Component {

    getFilteredData (filterSearch) {
        //   const key = changeSearchTxt().toLowerCase();
        console.log('seartTXT--------',  filterSearch);
        const filteredList = this.props.movies.filter((item) => {

            //    return ( key === 'title') ?
            return   (item.title.toLowerCase().search(filterSearch.toLowerCase()) !== -1 );
            //          (item.genres.some((elem) => elem.toLowerCase().search(this.state.changeSearchTxt.toLowerCase()) !== -1));
        });
        console.log('seartDATA--------',  filteredList);
     //   this.props.searchFilter = {filteredList};
    //    this.setState({searchFilter: filteredList});
        return this.props.searchFilter(filteredList);
    };



    // changeFilter = e => {
    //     this.setState({filter: e.target.value});
    // };


//  dataFilter = ()=> state.movies.filter((item) => {
//
// (item.title.toLowerCase().search((this.changeSearchInput.value).toLowerCase()) !== -1 )
//      console.log('dataFilter', {dataFilter})
// });



    changeSearchTxt() {
        /*  const filteredData = this.props.movies.getFilteredData(this.state.filter);
          this.setState({searchTxt: e.target.value});
          this.props.getFilteredData ( filteredData);*/
        console.log('seartTXT--------',  this.changeSearchInput.value);
        return this.changeSearchInput.value;
        //  console.log('seart!!!!!!!!!--------',  csearchTxt(this.changeSearchInput.value));
        // this.changeSearchInput.values = '';
        // return {
        //     searchTxt: e.target.value
        // }

    };

    render() {
        /*     if (!this.props.searchFilter) {
                 return (
                     <p>search movies</p>
                 )
             }*/
        //const filteredData = this.getFilteredData(this.state.filter);
        return (
            <div className="search__box">
                <span className="search__text">FIND YOUR MOVIE</span>
                <br/>
                {/*  <input className="search__input" type="text" placeholder="SEARCH" onChange={this.changeSearchTxt}/>*/}
                <input className="search__input" type="text"
                       placeholder="SEARCH"
                       ref={(input) => {this.changeSearchInput = input}}
                />
                <hr/>
                <div className="search__buttons">
                    <div className="search__buttons-wrapper">
                        <span>SEARCH BY</span>
                        <Button
                            value="TITLE"
                           //    active={"TITLE" === this.state.filter}
                           //   onClick={this.changeFilter}
                        />
                        <Button
                            value="GENRE"
                            //   active={"GENRE" === this.state.filter}
                            //    onClick={this.changeFilter}
                        />
                    </div>
                    <Button
                        value="SEARCH"
                        //        active={"SEARCH" === this.state.filter}
                        //   onClick={this.changeFilter}
                        //   onClick={() => this.changeSearchTxt(this.changeSearchInput.value)}
                        onClick={()=> this.getFilteredData(this.changeSearchInput.value)}
                    />
                </div>
                <div className="search__count">
                    <span className="search__count-qty">{this.props.movies.length}</span>
                    <span className="search__text">movies found</span>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({searchFilter: searchFilter}, dispatch)
};


export default connect(mapStateToProps, matchDispatchToProps)(Search);

