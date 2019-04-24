import {combineReducers} from 'redux';
//import dataDB from './reducers';
import DataReducer from '../../components/dumbData';
import ActiveMovie from './movieActive';


const allReducers = combineReducers({
    movies: DataReducer,
    active: ActiveMovie
});

export default allReducers;
