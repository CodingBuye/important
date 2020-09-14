import React, { Component } from 'react';
import { EventEmitter } from 'events';

import ChildCPN1 from './ChildCPN1';
import ChildCPN2 from './ChildCPN2';

// 事件总线
const eventBus = new EventEmitter();
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <button onClick={e => this.btnClick()}>按钮</button>
      </div>
    )
  }

  btnClick() {
    eventBus.emit("headerClick", "why", 18);
  }
}

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
          <li>设置5</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <ChildCPN1 name="why" age="18" height="1.88"/>
        <ChildCPN2 name="kobe" age="30" height="1.98"/>
        <Profile/>
      </div>
    );
  }

  componentDidMount() {
    eventBus.addListener("headerClick", this.headerClick);
  }

  headerClick(name, age) {
    console.log(name, age);
  }
  
  componentWillUnmount() {
    eventBus.removeListener("headerClick", this.headerClick);
  }
}

export default App;
