import React, {createRef, forwardRef, PureComponent} from 'react';
import ReactDOM from 'react-dom';

const Home = forwardRef(function(props, ref) {
    return (
        <div>
            <h2 ref={ref}>Home</h2>
            <button>按钮</button>
        </div>
    )
})

class Modal extends PureComponent {

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById("modal")
        )
    }
}

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.homeTitleRef = createRef();
    }

    render() {
        return (
            <div>
                <Home ref={this.homeTitleRef}/>
                <button
                    onClick={ () => this.printInfo()}>打印ref</button>
                <Modal>
                    <h2>我是标题</h2>
                </Modal>
            </div>
        )
    }

    printInfo() {
        console.log(this.homeTitleRef.current);
    }
}
export default App;