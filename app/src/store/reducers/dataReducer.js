export const initialState = {
    movies: [],
    loading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_MOVIES_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };
            break;
        case 'FETCH_MOVIE_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };
            break;
        case 'FETCH_MOVIES_SUCCESS':
            return {
                ...state,
                loading: false,
                movies: action.payload
            };
            break;
        case 'FETCH_MOVIES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
                movies: []
            };

        case 'FETCH_MOVIE_SUCCESS':
            return {
                ...state,
                loading: false,
                movie: action.payload
            };
            break;

        case 'FETCH_MOVIE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
                movie: null
            };

        default:
            return state;
    }
}
