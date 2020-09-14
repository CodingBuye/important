import React, { PureComponent, createRef } from 'react'

import Basic from './Basic';
import Counter from './Counter';
import ControlledCPN from './ControlledCPN';
import MultipleInput from './MultipleInput';
import NonControlledCPN from './NonControlledCPN';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.titleEl = null;

    this.counterRef = createRef();
  }

  render() {
    return (
      <div>
        
        <Basic/>

        <Counter ref={this.counterRef}/>
        <button onClick={e => this.increment()}>app +1</button>

        <ControlledCPN/>

        <MultipleInput/>

        <NonControlledCPN/>
      </div>
    )
  }

  changeText() {
    this.refs.title.innerHTML = "你好啊,李银河1";
    this.titleRef.current.innerHTML = "你好啊,李银河2";
    this.titleEl.innerHTML = "你好啊,李银河3";
  }

  increment() {
    this.counterRef.current.increment();
  }
}