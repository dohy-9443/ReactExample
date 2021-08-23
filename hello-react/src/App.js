import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

const App = () => {
  return (
    <div>
      <MyComponent name="React" favoriteNumber={3}>
        리액트
      </MyComponent>
      <br />
      <Counter />
      <br />
      <Say />
    </div>
  );
};

export default App;
