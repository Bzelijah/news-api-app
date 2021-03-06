import { GET_NEWS } from '../Types/News';

function NewsReducer(state = [], action) {
    switch (action.type) {
        case GET_NEWS:
            return [...action.payload];
        default:
            return state;
    }
}

export default NewsReducer;
