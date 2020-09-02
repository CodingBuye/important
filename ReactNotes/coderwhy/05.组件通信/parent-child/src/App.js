import React, { Component } from 'react';

import ChildCpn1 from './ChildCpn1';
import ChildCpn2 from './ChildCpn2';
import CounterButton from './CounterButton';
import TabControl from './TabControl';

function Header() {
    return <h2>Header</h2>
}

function Main() {
    return (
        <div>
            <Banner/>
            <ProductList/>
        </div>
    )
}

function Banner() {
    return <div>Banner</div>
}

function ProductList() {
    return (
        <ul>
            <li>商品1</li>
            <li>商品2</li>
            <li>商品3</li>
            <li>商品4</li>
            <li>商品5</li>
        </ul>
    )
}

function Footer() {
    return <h2>Footer</h2>
}


export default class App extends Component {
    constructor(props) {
        super(props);
        this.titles = ["流行", "新款", "精选"];
        this.state = {
            counter: 0,
            currentTitle: "流行"
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>

                <ChildCpn1 name="why" age="18" height="1.88"/>
                <ChildCpn2 name="wwy" age="24" height="1.60"/>

                <h2>当前计数：{this.state.counter}</h2>
                <CounterButton operator="+1" btnClick={e => this.changeCounter(1)}/>
                <CounterButton operator="-1" btnClick={e => this.changeCounter(-1)}/>
                
                <h2>{this.state.currentTitle}</h2>
                <TabControl titles={this.titles} itemClick={index => this.itemClick(index)} />
            </div>
        )
    }

    changeCounter(num) {
        this.setState({
            counter: this.state.counter+num
        })
    }

    itemClick(index) {
        this.setState({
            currentTitle: this.titles[index]
        })
    }
}