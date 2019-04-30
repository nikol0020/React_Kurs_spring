const initialState = '';

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_MOVIES':
            console.log ('searchMovies---------', action.payload);
            return {...state, movies: action.payload};
            break;
        default:
            return state;
    }
}