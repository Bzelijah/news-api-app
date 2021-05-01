import { GET_INTERESTING_NEWS } from '../Types/News';

function interestingNewsReducer(state = {}, action) {
    switch (action.type) {
        case GET_INTERESTING_NEWS:
            return {
                first: {
                    ...state.first, content: action.payload.first.splice(8),
                },
                second: {
                    ...state.second, content: action.payload.second.splice(8),
                },
                third: {
                    ...state.third, content: action.payload.third.splice(8),
                },
            };
        default:
            return state;
    }
}

export default interestingNewsReducer;
