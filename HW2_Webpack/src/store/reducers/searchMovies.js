const initialState = '';

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_MOVIES':
            console.log ('searchMovies---------', action.payload);
            return {
                ...state,
                movies: action.payload
            };
            break;
        case 'SORT_BY_DATE':
            console.log ('sortMovies1111111111--------', action.payload);
            return {
                ...state,
                movies: action.payload
            };
        default:
            return state;
    }
}
