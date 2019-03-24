import React, {Component} from "react";
import './Search.scss';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {data: this.props.data.data};

        this.filterList = this.filterList.bind(this);
    }

    filterList(e) {
        const filteredList = this.props.data.data.filter((item) => {
            return item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });
        this.setState({data: filteredList, count: filteredList.length});
    };


    render() {
         return (
             <div className="search__box">
                 <span className="search__text">FIND YOUR MOVIE</span>
                 <br/>
                 <input className="search__input" type="text" placeholder="SEARCH" onChange={this.filterList}/>
                 <hr/>
                 <div className="search__buttons">
                     <div className="search__buttons-wraper">
                         <span>SEARCH BY</span>
                         <input className="search__button" type="button" value="TITLE"/>
                         <input className="search__button" type="button" value="GENRE"/>
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
