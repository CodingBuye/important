import React, {Component} from 'react';


export default class ChildCpn1 extends Component {
    // constructor(props) {
    //     console.log(props)
    //     super();
    //     this.props = props;
    // }

    render() {
        const {name, age, height} = this.props;

        return (
            <div>
                <h2>我是class组件</h2>
                <p>展示父组件传递过来的数据：{name + " " + age + " " + height}</p>
            </div>
        )
    }
}