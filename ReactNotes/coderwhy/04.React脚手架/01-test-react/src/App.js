import React, { Component } from 'react';

class HYTestCpn extends Component {
    render() {
        return <h2>HYTestCpn</h2>
    }

    componentWillUnmount() {
        console.log("HYTestCpn componentWillUnmount");
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        console.log("调用constructor方法");
    }

    componentDidMount() {
        console.log("调用componentDidMount方法");
    }
    
    componentDidUpdate() {
        console.log("调用componentDidUpdate方法");
    }
    
    componentWillUnmount() {
        console.log("调用componentWillUnmount方法");
    }

    render() {
        console.log("调用render方法")
        return (
            <div>
              <h2>当前计数: {this.state.counter}</h2>
              {this.state.counter <= 5 && <HYTestCpn/>}
              <button onClick={e => this.increment()}>+1</button>
            </div>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

// 函数组件
// export default function App() {
//     return <div>Hello World</div>
// }