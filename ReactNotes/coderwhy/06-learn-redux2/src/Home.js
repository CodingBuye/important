import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import store from './store';

import axios from 'axios';

import {
    addAction,
    changeBannersAction,
    changeRecommendAction
} from './store/actionCreators';

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
            const data = res.data.data;
            this.props.changeBanners(data.banner.list);
            this.props.changeRecommends(data.recommend.list);
        })
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

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNumber: function(number) {
            dispatch(addAction(number));
        },
        changeBanners(banners) {
            dispatch(changeBannersAction(banners));
        },
        changeRecommends(recommends) {
            dispatch(changeRecommendAction(recommends));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);