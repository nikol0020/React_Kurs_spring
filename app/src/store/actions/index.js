import axios from 'axios';

export const select = (movie) => {
    return {
        type: "SELECT_MOVIE",
        payload: movie
    }
};

export const searchFilter = (filteredList) => {
    return {
        type: "SEARCH_MOVIES",
        payload: filteredList
    }
};

export const changeFilter = (value) => {
    return {
        type: "SEARCH_TYPE",
        payload: value
    }
};

export const sortMovies = (sortMovies) => {
    return {
        type: "SORT_MOVIES",
        payload: sortMovies.slice()
    }
};

export const fetchMoviesBegin = () => {
    console.log('start action fetchBegin');
    return {
        type: 'FETCH_MOVIES_BEGIN'
    }
};

export const fetchMovieBegin = () => {
    return {
        type: 'FETCH_MOVIE_BEGIN'
    }
};

export const fetchMoviesSuccess = (movies) => {
    return {
        type: 'FETCH_MOVIES_SUCCESS',
        payload: movies
    }
};

export const fetchMoviesFailure = (error) => {
    return {
        type: 'FETCH_MOVIES_FAILURE',
        payload: error
    }
};

export const fetchMovieSuccess = (movie) => {
    return {
        type: 'FETCH_MOVIE_SUCCESS',
        payload: movie
    }
};

export const fetchMovieFailure = (error) => {
    return {
        type: 'FETCH_MOVIE_FAILURE',
        payload: error
    }
};

export const fetchMovies = (dispatch) => {
    console.log('start fetch....');
    return dispatch => {
        dispatch(fetchMoviesBegin());

        axios
            .get(`https://reactjs-cdp.herokuapp.com/movies`, {})
            .then(res => {
                dispatch(fetchMoviesSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(fetchMoviesFailure(err));
            });
    };
};

/*
export const fetchMovieById = (id) => {
    return dispatch => {
        dispatch(fetchMovieBegin());
        axios
            .get(`https://reactjs-cdp.herokuapp.com/movies/${id}`, {})
            .then(res => {
                dispatch(fetchMovieSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchMovieFailure(err));
            });
    };
};*/
