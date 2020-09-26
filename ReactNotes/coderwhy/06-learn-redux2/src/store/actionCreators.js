import {
    ADD_NUMBER,
    SUB_NUMBER,
    CHANGE_BANNER,
    CHANGE_RECOMMEND
} from './constants';

const addAction = count => ({
    type: ADD_NUMBER,
    num: count
});

const subAction = count => ({
    type: SUB_NUMBER,
    num: count
});

const changeBannersAction = banners => ({
    type: CHANGE_BANNER,
    banners
});

const changeRecommendAction = recommeds => ({
    type: CHANGE_RECOMMEND,
    recommeds
});

export {
    addAction,
    subAction,
    changeBannersAction,
    changeRecommendAction
}