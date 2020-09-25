import React, { PureComponent } from 'react';

import store from './store';
import {
    subAction
} from './store/actionCreators';

export default class Profile extends PureComponent {
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
                <hr/>
                <h1>profile</h1>
                <div>
                    <h2>当前计数：{this.state.counter}</h2>
                    <button onClick={e => this.decrement()}>-1</button>
                    <button onClick={e => this.subCounter()}>-5</button>
                </div>
            </div>
        )
    }

    decrement() {
        store.dispatch(subAction(1));
    }
    
    subCounter() {
        store.dispatch(subAction(5));
    }
}