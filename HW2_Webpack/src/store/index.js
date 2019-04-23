import {combineReducers} from 'redux';
import dataDB from './reducers';
//import dumbData from '../components/dumbData'

const allReducers = combineReducers({
    movies: dataDB
});

export default allReducers;
