import React, { PureComponent } from 'react';

function higherOrderComponent(WrapperComponent) {
    return class NewComponent extends PureComponent {
      render() {
        return <WrapperComponent/>
      }
    }
}
  

  
function Main() {
    return (
        <div>1</div>
    );
}

export default higherOrderComponent(Main);