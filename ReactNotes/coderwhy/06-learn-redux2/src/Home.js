import React, { PureComponent } from 'react';

import store from './store';
import {
    addAction
} from './store/actionCreators';

export default class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }

    render() {
        return (
            <div>
                <h1>home</h1>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <button onClick={e => this.addCounter()}>+5</button>
            </div>
        )
    }

    increment() {
        store.dispatch(addAction(1));
    }

    addCounter() {
        store.dispatch(addAction(5));
    }
}