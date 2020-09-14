import React, { createRef, PureComponent } from 'react';

export default class NonControlledCPN extends PureComponent {
    constructor(props) {
        super(props);
        this.usernameRef = createRef();
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="username">
                        用户名：
                        <input type="text" 
                               name="username"
                               ref={this.usernameRef}
                               defaultValue="username"/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.usernameRef.current.value);
    }
}