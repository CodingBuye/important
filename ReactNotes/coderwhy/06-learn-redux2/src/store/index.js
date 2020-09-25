import reducer from './reducer';

const redux = require('redux');

const store = redux.createStore(reducer);

export default store;