export const initialState = {
    movies: [],
    loading: false,
    error: null
};

export default function (state = initialState, action) {
    console.log('all dbReduser starts...', action);
    switch (action.type) {
        case 'FETCH_MOVIES_BEGIN':
            console.log('ReducerBegin.....');
            return {
                ...state,
                loading: true,
                error: null
            };
            break;
        case 'FETCH_MOVIES_SUCCESS':
            console.log('ReducerSuccess.....');
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

        default:
            return state;
    }
}
