import React, { PureComponent } from 'react';

export default class ControlledCPN extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            article: "请编写你喜欢的文章",
            fruits: "orange"
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="username">
                        用户名：
                        <input type="text" id="username" 
                               onChange={e => this.handleUsernamChange(e)}
                               value={this.state.username}/>
                        <hr/>
                        <textarea id="article" cols="30" rows="10"
                            value={this.state.article}
                            onChange={e => this.handleArticleChange(e)}/>
                        <hr/>
                        <select id="fruits" value={this.state.fruits}
                                            onChange={e => this.handleFruitsChange(e)}>
                            <option value="apple">苹果</option>
                            <option value="orange">橘子</option>
                            <option value="banana">香蕉</option>
                        </select>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }

    handleUsernamChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit(event) {
        // console.log(this.state.username);
        // console.log(this.state.article);
        console.log(this.state.fruits);
        event.preventDefault();
    }

    handleArticleChange(e) {
        this.setState({
            article: e.target.value
        })
    }

    handleFruitsChange(e) {
        this.setState({
            fruits: e.target.value
        })
    }
}