export const select = (movie) => {
    return {
        type: "SELECT_MOVIE",
        payload: movie
    }
};