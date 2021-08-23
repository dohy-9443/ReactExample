import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div>
      <MyComponent name="React" favoriteNumber={3}>
        리액트
      </MyComponent>
      <br />
    </div>
  );
};

export default App;
