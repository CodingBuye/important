const redux = require('redux');

// 1.创建一个对象，作为我们要保存的状态：
const initialState = {
    counter: 0
}

// 2.创建Store来存储这个state
// 创建store时必须创建reducer；
// 我们可以通过 store.getState 来获取当前的state
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter+1};
        case 'DECREMENT':
            return {...state, counter: state.counter-1};
        case 'ADD_NUMBER':
            return {...state, counter: state.counter+action.number};
        default:
            return state;
    }
}

const store = redux.createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
})


// 3.通过action来修改state
// 通过dispatch来派发action；
// 通常action中都会有type属性，也可以携带其他的数据；
store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'DECREMENT'
})

store.dispatch({
    type: 'ADD_NUMBER',
    number: 5
})

