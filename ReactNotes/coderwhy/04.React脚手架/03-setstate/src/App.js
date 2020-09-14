import React, { Component } from 'react'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "coderwhy",
      message: "Hello World",
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText()} id="btn">改变文本</button>
        <button onClick={e => this.increment()} id="btn">+1</button>
      </div>
    )
  }

  componentDidMount() {
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
      this.setState({
        message: "你好啊,李银河"
      });
      console.log(this.state.message); // 你好啊,李银河
    })
  }

  changeText() {
    // this.setState({
    //   message: "你好啊,李银河"
    // }, () => {
    //   console.log(this.state.message); // 你好啊,李银河
    // });

    // console.log(this.state.message); // hello world

    // setTimeout(() => {
    //   this.setState({
    //     message: "你好啊,李银河"
    //   });
    //   console.log(this.state.message); // 你好啊,李银河
    // }, 0);
  }

  increment() {
    // this.setState({
    //   count: this.state.count + 1
    // });

    // this.setState({
    //   count: this.state.count + 1
    // });

    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log(this.state.count);
    // });

    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
  
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
  
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
  }
}
