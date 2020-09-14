import React from 'react';

export default function ChildCpn2(props) {
    const {name, age, height} = props;
  
    return (
      <div>
        <h2>我是function的组件</h2>
        <p>展示父组件传递过来的数据: {name + " " + age + " " + height}</p>
      </div>
    )
}
  