const initialState = '';

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SELECT_MOVIE':
            return action.payload;
            break;
        default:
            return state;
    }
}