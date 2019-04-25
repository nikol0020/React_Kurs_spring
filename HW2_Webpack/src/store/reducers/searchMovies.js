const initialState = '';

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_MOVIES':
            return action.payload;
            break;
        default:
            return state;
    }
}