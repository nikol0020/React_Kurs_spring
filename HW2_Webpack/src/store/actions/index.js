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