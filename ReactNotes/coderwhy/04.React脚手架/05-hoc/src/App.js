import React from 'react';
import Basic from './1';
import Header from './2';

function App() {
  return (
      <div>
        <Basic/>
        <Header name="aaa" age={18} height={1.60}/>
      </div>
  );
}

export default App;
