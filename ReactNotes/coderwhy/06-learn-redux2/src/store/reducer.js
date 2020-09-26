import {
    ADD_NUMBER,
    SUB_NUMBER,
    CHANGE_RECOMMEND,
    CHANGE_BANNER
} from './constants';

const initialState = {
    counter: 0,
    banners: [],
    recommends: []
}

function reducer(state=initialState, action) {
    switch(action.type) {
        case ADD_NUMBER:
            return {...state, counter: state.counter+action.num};
        case SUB_NUMBER:
            return {...state, counter: state.counter-action.num};
        case CHANGE_BANNER:
            return {...state, banners: action.banners};
        case CHANGE_RECOMMEND:
            return {...state, recommends: action.recommends};
        default:
            return state;
    }
}

export default reducer;
