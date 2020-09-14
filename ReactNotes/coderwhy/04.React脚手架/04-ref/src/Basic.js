import React, { PureComponent, createRef } from 'react'


export default class Basic extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.titleEl = null;
  }

  render() {
    return (
      <div>
        <h2 ref="title">String Ref</h2>
        <h2 ref={this.titleRef}>Hello Create Ref</h2>
        <h2 ref={element => this.titleEl = element}>Callback Ref</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  changeText() {
    this.refs.title.innerHTML = "你好啊,李银河1";
    this.titleRef.current.innerHTML = "你好啊,李银河2";
    this.titleEl.innerHTML = "你好啊,李银河3";
  }
}