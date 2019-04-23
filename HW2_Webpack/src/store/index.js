import {combineReducers} from 'redux';
//import dataDB from './reducers';
import DataReducer from '../components/dumbData'

const allReducers = combineReducers({
    movies: DataReducer
});

export default allReducers;
