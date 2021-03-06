import {combineReducers} from 'redux';
import DataReducer from './dataReducer';
import ActiveMovie from './movieActive';
import SearchReducer from './searchMovies';


const allReducers = combineReducers({
    movies: DataReducer,
    active: ActiveMovie,
    searchFilter: SearchReducer
});

export default allReducers;
