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
        payload: sortMovies
    }
};
