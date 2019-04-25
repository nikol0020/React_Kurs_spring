import {combineReducers} from 'redux';
//import dataDB from './reducers';
import DataReducer from '../../components/dumbData';
import ActiveMovie from './movieActive';
import SearchReducer from './searchMovies';


const allReducers = combineReducers({
    movies: DataReducer,
    active: ActiveMovie,
    searchFilter: SearchReducer
});

export default allReducers;
