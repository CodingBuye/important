import React, { PureComponent } from 'react';

class Header extends PureComponent {
    render() {
        const {name, age} = this.props;
        return <h2>header {name+age+height}</h2>;
    }
}

function enhanceProps(WrapperCpn, otherProps) {
    return props => <WrapperCpn {...props} {...otherProps}/>
}

const EnhanceHeader = enhanceProps(Header, {height: 1.88})

export default EnhanceHeader;