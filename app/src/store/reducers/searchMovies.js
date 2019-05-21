export const initialState = {
    movies: null,
    changeFilter: 'TITLE'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_MOVIES':
            return {
                ...state,
                movies: action.payload
            };
            break;

        case 'SEARCH_TYPE':
            return {
                changeFilter: action.payload
            };
            break;

        case 'SORT_MOVIES':
            return {
                ...state,
                movies: action.payload
            };
            break;

        default:
            return state;
    }
}
