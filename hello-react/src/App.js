import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <MyComponent name="React" favoriteNumber={3}>
        리액트
      </MyComponent>
      <br />
      <Counter />
    </div>
  );
};

export default App;
