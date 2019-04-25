import React, {Component} from 'react';
import './Sort.scss';

import Button from '../button';

class Sort extends Component {
    render() {
        return (
            <div className="sort">
                <span className="sort__text">Sort by</span>
                <Button className="button"
                        value="rel-s date"
                        onClick={()=> this.sortData}
                />
                <Button className="button" value="rating"/>
            </div>
        )
    }
}

/*function mapStateToProps(state) {

    return {
        movies: state.movies,
    }
};*/

export default Sort;